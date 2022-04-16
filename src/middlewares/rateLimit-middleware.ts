import { NextFunction, Request, Response } from 'express';
import { RateLimiterMySQL } from 'rate-limiter-flexible';
import { Connection, getConnection, QueryRunner } from 'typeorm';
import TooManyConnections from '../exceptions/tooManyConnections-exception';
import { RateLimitHeaders } from '../interfaces/rateLimitHeaders-interface';
import { RateLimitType } from '../interfaces/rateLimitType-interface';
import path from 'path';
import { RateLimitOptions } from '../interfaces/rateLimitOptions-interface';

const dirname = path.join(path.resolve(), '/src');

process.env.NODE_CONFIG_DIR = dirname + '/config';
import config from 'config';
import { ConfigType } from '../interfaces/configType-interface';

const configRateLimit : RateLimitOptions = config.get('rateLimit');
const configTypeorm : ConfigType = config.get('typeorm');

async function RateLimitMiddleware(req: Request, res: Response, next: NextFunction) {
  const connection: Connection = getConnection();
  const queryRunner: QueryRunner = connection.createQueryRunner();

  await queryRunner.startTransaction();

  const opts : RateLimitOptions = {
    storeClient: await queryRunner.connect(),
    dbName: configTypeorm.database as unknown as string,
    tableName: configRateLimit.tableName,
    tableCreated: configRateLimit.tableCreated,
    storeType: configRateLimit.storeType,
    points: configRateLimit.points, // quantity of request
    duration: configRateLimit.duration, // per second by IP,
    blockDuration: configRateLimit.blockDuration // Block for 5 minutes
  };

  try {
    const rateLimiter = new RateLimiterMySQL(opts);
    const resource = await rateLimiter.consume(req.ip);

    await queryRunner.commitTransaction();
    generateHeaders(res, resource);
    next();
  } catch (error) {
    await queryRunner.rollbackTransaction();
    const err = error as RateLimitType;

    generateHeaders(res, err);
    next(new TooManyConnections());
  } finally {
    await queryRunner.release();
  }
}

const generateHeaders = (res: Response, resolve: RateLimitType) => {
  const headers : RateLimitHeaders = {
    'Retry-After': resolve.msBeforeNext / 1000,
    'X-RateLimit-Limit': configRateLimit.points,
    'X-RateLimit-Remaining': resolve.remainingPoints,
    'X-RateLimit-Reset': new Date(Date.now() + resolve.msBeforeNext)
  };

  return res.set(headers);
};

export default RateLimitMiddleware;

import dotenv from 'dotenv';
import NotFoundException from '../exceptions/notFound-exception';

const envFile = process.env.NODE_ENV === 'production' ? './.env' : './.env.dev';
const result = dotenv.config({ path: envFile });

if (result?.error) throw new NotFoundException('Could not find .env file');

export default {
  general: { host: { port: process.env.HOST_PORT } },
  typeorm: { database: process.env.TYPEORM_DATABASE },
  rateLimit: {
    tableName: process.env.RATELIMIT_TABLE_NAME,
    tableCreated: process.env.RATELIMIT_TABLE_CREATED,
    storeType: process.env.RATELIMIT_STORE_TYPE,
    points: process.env.RATELIMIT_POINTS,
    duration: process.env.RATELIMIT_DURATION,
    blockDuration: process.env.RATELIMIT_BLOCK_DURATION
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  }
};

import { NextFunction, Request, Response } from 'express';
import UnauthorizedException from '../exceptions/unauthorized-exception';
import ForbiddenException from '../exceptions/forbidden-exception';
import jwt, { JsonWebTokenError, TokenExpiredError, VerifyErrors } from 'jsonwebtoken';
import { JwtConfig } from '../components/auth/auth-interface';
import path from 'path';

const dirname = path.join(path.resolve(), '/src');

process.env.NODE_CONFIG_DIR = dirname + '/config';
import config from 'config';

async function IsAuthorizedMiddleware(req: Request, res: Response,
  next: NextFunction) : Promise<void> {
  try {
    const configJwt : JwtConfig = config.get('jwt');
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) throw new UnauthorizedException();

    jwt.verify(token, configJwt.secret, (err: VerifyErrors | null) => {
      if (err && err instanceof TokenExpiredError) {
        throw new UnauthorizedException('The token was been expired');
      }

      if (err && err instanceof JsonWebTokenError) {
        throw new ForbiddenException('The token is malformed or invalid');
      }

      if (err) throw new ForbiddenException();

      return next();
    });
  } catch (err) {
    next(err);
  }
}

export default IsAuthorizedMiddleware;

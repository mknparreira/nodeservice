import { injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';
import { JwtConfig } from './auth-interface';
import InternalServerErrorException from '../../exceptions/internalServerError-exception';
import path from 'path';

const dirname = path.join(path.resolve(), '/src');

process.env.NODE_CONFIG_DIR = dirname + '/config';
import config from 'config';

@injectable()
export default class AuthService {
  private readonly configJwt : JwtConfig = config.get('jwt');

  generateAuthToken() : object | undefined {
    const token = jwt.sign({}, this.configJwt.secret, { expiresIn: this.configJwt.expiresIn });

    if (!token) throw new InternalServerErrorException();
    return { token };
  }
}

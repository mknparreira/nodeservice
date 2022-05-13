import express, { Application } from 'express';
import { Callback } from '../interfaces/callback-interface';
import ErrorHandlerMiddleware from '../middlewares/errorHandler-middleware';
import helmet from 'helmet';
import RateLimitMiddleware from '../middlewares/rateLimit-middleware';
import cors from 'cors';
import swaggetUI from 'swagger-ui-express';
import userDoc from '../components/user/user-documentation.json';
import authDoc from '../components/auth/auth-documentation.json';
import responseTime from 'response-time';
import compression from 'compression';
import RequestId from '../middlewares/requestId-middleware';
export default class App {
  public app: Application;

  constructor(routes : Array<express.Router>) {
    this.app = express();
    this.middlewares();
    this.routes(routes);
    this.swaggerDocs();
    this.app.use(ErrorHandlerMiddleware);
  }

  private routes(routes: Array<express.Router>) {
    routes.forEach((route) => {
      this.app.use(route);
    });
  }

  private middlewares(): void {
    /* I´m using the express.json() and express.urlencoded() middlewares
        to enable to send a JSON response with res.json() and parse the URL body and extract data
        for HTTP METHOD POST data that doesn’t appear in URL in req.body, respectively.
    */
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(RateLimitMiddleware);
    this.app.use(cors());
    this.app.use(responseTime());
    this.app.use(compression({
      level: 6,
      filter: (req, res) => {
        if (req.headers['x-no-compression']) return false;
        return compression.filter(req, res);
      }
    }));
    this.app.use(RequestId);
  }

  private swaggerDocs(): void {
    this.app.use('/api-docs/user', swaggetUI.serveFiles(userDoc), swaggetUI.setup(userDoc));
    this.app.use('/api-docs/auth', swaggetUI.serveFiles(authDoc), swaggetUI.setup(authDoc));
  }

  public listen(port : string, callback : Callback) {
    return this.app.listen(port, callback);
  }
}

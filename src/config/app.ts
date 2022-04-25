import express, { Application } from 'express';
import { Callback } from '../interfaces/callback-interface';
import ErrorHandlerMiddleware from '../middlewares/errorHandler-middleware';
import helmet from 'helmet';
import RateLimitMiddleware from '../middlewares/rateLimit-middleware';
import cors from 'cors';
import swaggetUI from 'swagger-ui-express';
import userDoc from '../components/user/user-documentation.json';
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
  }

  private swaggerDocs(): void {
    this.app.use('/api-docs/user', swaggetUI.serveFiles(userDoc), swaggetUI.setup(userDoc));
  }

  public listen(port : string, callback : Callback) {
    return this.app.listen(port, callback);
  }
}

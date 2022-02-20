import { Application } from 'express';
import express from 'express';
import { Callback } from '../interfaces/callback-interface';

export default class App {
    public app: Application;

    constructor(
        routes : Array<express.Router>  
    ) {
        this.app = express();
        this.middlewares();
        this.routes(routes);
    }

    private routes(routes: Array<express.Router>) {
        routes.forEach((route) => {
            this.app.use(route);
        });
    }

    private middlewares() {
        /* I´m using the express.json() and express.urlencoded() middlewares to enable to send a JSON response with res.json() 
            and parse the URL body and extract data for HTTP METHOD POST data that doesn’t appear in URL in req.body, respectively. 
        */
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        //this.app.use(cors());
    }

    public listen(port : string, callback : Callback) {
        return this.app.listen(port, callback);
    }
}
import { Application } from 'express';
import express from 'express';
import { Callback } from '../interfaces/callback-interface';

export default class App {
    public app: Application;

    constructor(
        routes : Array<express.Router>  
    ) {
        this.app = express();
        //this.app.use(express.json());
        //this.app.user(cors());
        //this.app.use(express.urlencoded({ extended: true }));
        this.routes(routes);
    }

    private routes(routes: Array<express.Router>) {
        routes.forEach((route) => {
            this.app.use(route);
        });
    }

    public listen(port : string, callback : Callback) {
        return this.app.listen(port, callback);
    }
}
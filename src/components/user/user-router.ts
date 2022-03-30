import { Router } from "express";
import { container } from "tsyringe";
import { UserController }  from "./user-controller";

const routes = Router();
const controller = container.resolve(UserController);

routes.get('/users', controller.getUsers.bind(controller));
routes.post('/create', controller.create.bind(controller));

export default routes;
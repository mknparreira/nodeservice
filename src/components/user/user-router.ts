import { Router } from "express";
import { container } from "tsyringe";
import { UserController }  from "./user-controller";

const routes = Router();
const controller = container.resolve(UserController);

routes.get('/users', controller.getUsers.bind(controller));
routes.post('/user/create', controller.create.bind(controller));
routes.put('/user/edit', controller.edit.bind(controller));
routes.get('/user/show/:vatNumber', controller.list.bind(controller));

export default routes;
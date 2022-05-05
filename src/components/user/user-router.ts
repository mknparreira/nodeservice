import { Router } from 'express';
import { container } from 'tsyringe';
import IsAuthorizedMiddleware from '../../middlewares/isAuthorized-middleware';
import { UserController } from './user-controller';

const routes = Router();
const controller = container.resolve(UserController);

routes.get('/users', IsAuthorizedMiddleware, controller.getUsers.bind(controller));
routes.post('/user/create', IsAuthorizedMiddleware, controller.create.bind(controller));
routes.put('/user/edit', IsAuthorizedMiddleware, controller.edit.bind(controller));
routes.get('/user/show/:vatNumber', IsAuthorizedMiddleware, controller.list.bind(controller));

export default routes;

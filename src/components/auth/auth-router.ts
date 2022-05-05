import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthController } from './auth-controller';

const routes = Router();
const controller = container.resolve(AuthController);

routes.get('/getToken', controller.generateToken.bind(controller));

export default routes;

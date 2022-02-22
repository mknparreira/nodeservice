import { Router, Response, Request } from "express";

const routes = Router();

routes.get('/users', (req: Request, res : Response) => { res.send("chegou aqui kas fiquei não é possivel"); });
export default routes;
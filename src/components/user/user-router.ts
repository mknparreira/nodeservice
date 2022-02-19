import { Router } from "express";

const routes = Router();

routes.get('/users', (req, res) => { res.send("chegou aqui kas fiquei não é possivel"); });

export default routes;
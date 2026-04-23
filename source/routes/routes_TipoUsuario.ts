import { Router, Request , Response } from "express";

import {TipoUsuarioController} from "../controllers/controller_TipoUsuario"

const ConstTipoUsuarioController = new TipoUsuarioController()

const TipoUsuarioRouter = Router();

TipoUsuarioRouter.get('/TipoUsuario', ConstTipoUsuarioController.GetAll);
TipoUsuarioRouter.get('/TipoUsuario/:id', ConstTipoUsuarioController.GetById);
TipoUsuarioRouter.post('/TipoUsuario', ConstTipoUsuarioController.post);
TipoUsuarioRouter.put('/TipoUsuario/:id', ConstTipoUsuarioController.update);
TipoUsuarioRouter.delete('/TipoUsuario/:id', ConstTipoUsuarioController.delete);

export default TipoUsuarioRouter;
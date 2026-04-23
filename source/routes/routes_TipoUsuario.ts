import { Router, Request , Response } from "express";

import {TipoUsuarioController} from "../controllers/controller_TipoUsuario"

const ConstTipoUsuarioController = new TipoUsuarioController()

const TipoUsuarioRouter = Router();

TipoUsuarioRouter.get('/GetAll', ConstTipoUsuarioController.GetAll);
TipoUsuarioRouter.get('/Get/:id', ConstTipoUsuarioController.GetById);
TipoUsuarioRouter.post('/', ConstTipoUsuarioController.post);
TipoUsuarioRouter.put('/:id', ConstTipoUsuarioController.update);
TipoUsuarioRouter.delete('/:id', ConstTipoUsuarioController.delete);

export default TipoUsuarioRouter;
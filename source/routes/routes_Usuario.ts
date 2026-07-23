import { Router, Request , Response } from "express";

import {UsuarioController} from "../controllers/controller_Usuario"

const ConstUsuarioController = new UsuarioController()

const UserRouter = Router();

UserRouter.get('/GetAll', ConstUsuarioController.GetAll);
UserRouter.get('/Get/:id', ConstUsuarioController.GetById);
UserRouter.post('/', ConstUsuarioController.post);
UserRouter.put('/:id', ConstUsuarioController.update);
UserRouter.delete('/:id', ConstUsuarioController.delete);
UserRouter.post('/UpdatePassword', ConstUsuarioController.UpdatePassword)

export default UserRouter;
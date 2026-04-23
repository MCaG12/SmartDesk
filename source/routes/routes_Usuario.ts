import { Router, Request , Response } from "express";

import {UsuarioController} from "../controllers/controller_Usuario"

const ConstUsuarioController = new UsuarioController()

const UserRouter = Router();

UserRouter.get('/User', ConstUsuarioController.GetAll);
UserRouter.get('/User/:id', ConstUsuarioController.GetById);
UserRouter.post('/User', ConstUsuarioController.post);
UserRouter.put('/User/:id', ConstUsuarioController.update);
UserRouter.delete('/User/:id', ConstUsuarioController.delete);

export default UserRouter;
import { Router, Request , Response } from "express";

import {DepartamentoController} from "../controllers/controller_Departamento"

const ConstDepartamentoController = new DepartamentoController()

const DepartamentoRouter = Router();

DepartamentoRouter.get('/GetAll', ConstDepartamentoController.GetAll);
DepartamentoRouter.get('/Get/:id', ConstDepartamentoController.GetById);
DepartamentoRouter.post('/', ConstDepartamentoController.post);
DepartamentoRouter.put('/:id', ConstDepartamentoController.update);
DepartamentoRouter.delete('/:id', ConstDepartamentoController.delete);


export default DepartamentoRouter;
import { Router, Request , Response } from "express";

import {DepartamentoController} from "../controllers/controller_Departamento"

const ConstDepartamentoController = new DepartamentoController()

const DepartamentoRouter = Router();
DepartamentoRouter.get('/Departamento', ConstDepartamentoController.GetAll);
DepartamentoRouter.get('/Departamento/:id', ConstDepartamentoController.GetById);
DepartamentoRouter.post('/Departamento', ConstDepartamentoController.post);
DepartamentoRouter.put('/Departamento/:id', ConstDepartamentoController.update);
DepartamentoRouter.delete('/Departamento/:id', ConstDepartamentoController.delete);


export default DepartamentoRouter;
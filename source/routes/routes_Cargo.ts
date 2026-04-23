import { Router, Request , Response } from "express";

import {CargoController} from "../controllers/controller_Cargo"

const ConstCargoController = new CargoController()


const CargoRouter = Router();
CargoRouter.get('/Cargo', ConstCargoController.GetAll);
CargoRouter.get('/Cargo/:id', ConstCargoController.GetById);
CargoRouter.post('/Cargo', ConstCargoController.post);
CargoRouter.put('/Cargo/:id', ConstCargoController.update);
CargoRouter.delete('/Cargo/:id', ConstCargoController.delete);


export default CargoRouter;
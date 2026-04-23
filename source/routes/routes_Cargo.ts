import { Router, Request , Response } from "express";

import {CargoController} from "../controllers/controller_Cargo"

const ConstCargoController = new CargoController()


const CargoRouter = Router();
CargoRouter.get('/getAll', ConstCargoController.GetAll);
CargoRouter.get('/get/:id', ConstCargoController.GetById);
CargoRouter.post('/', ConstCargoController.post);
CargoRouter.put('/:id', ConstCargoController.update);
CargoRouter.delete('/:id', ConstCargoController.delete);


export default CargoRouter;
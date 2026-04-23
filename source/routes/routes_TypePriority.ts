import { Router, Request , Response } from "express";

import {TypePriorityController} from "../controllers/controller_TypePriority"

const ConstTypePriorityController = new TypePriorityController()

const TypePriorityRouter = Router();

TypePriorityRouter.get('/GetAll', ConstTypePriorityController.GetAll);
TypePriorityRouter.get('/Get/:id', ConstTypePriorityController.GetById);
TypePriorityRouter.post('/', ConstTypePriorityController.post);
TypePriorityRouter.put('/:id', ConstTypePriorityController.update);
TypePriorityRouter.delete('/:id', ConstTypePriorityController.delete);

export default TypePriorityRouter;
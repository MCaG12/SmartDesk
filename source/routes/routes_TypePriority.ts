import { Router, Request , Response } from "express";

import {TypePriorityController} from "../controllers/controller_TypePriority"

const ConstTypePriorityController = new TypePriorityController()

const TypePriorityRouter = Router();

TypePriorityRouter.get('/TypePriority', ConstTypePriorityController.GetAll);
TypePriorityRouter.get('/TypePriority/:id', ConstTypePriorityController.GetById);
TypePriorityRouter.post('/TypePriority', ConstTypePriorityController.post);
TypePriorityRouter.put('/TypePriority/:id', ConstTypePriorityController.update);
TypePriorityRouter.delete('/TypePriority/:id', ConstTypePriorityController.delete);

export default TypePriorityRouter;
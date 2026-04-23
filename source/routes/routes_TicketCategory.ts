import { Router, Request , Response } from "express";

import {TicketCategoryController} from "../controllers/controller_TicketCategory"

const ConstTicketCategoryController = new TicketCategoryController()


const TicketCategoryRouter = Router();

TicketCategoryRouter.get('/GetAll', ConstTicketCategoryController.GetAll);
TicketCategoryRouter.get('/Get/:id', ConstTicketCategoryController.GetById);
TicketCategoryRouter.post('/', ConstTicketCategoryController.post);
TicketCategoryRouter.put('/:id', ConstTicketCategoryController.update);
TicketCategoryRouter.delete('/:id', ConstTicketCategoryController.delete);

export default TicketCategoryRouter;
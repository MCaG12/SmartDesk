import { Router, Request , Response } from "express";

import {TicketCategoryController} from "../controllers/controller_TicketCategory"

const ConstTicketCategoryController = new TicketCategoryController()


const TicketCategoryRouter = Router();

TicketCategoryRouter.get('/TicketCategory', ConstTicketCategoryController.GetAll);
TicketCategoryRouter.get('/TicketCategory/:id', ConstTicketCategoryController.GetById);
TicketCategoryRouter.post('/TicketCategory', ConstTicketCategoryController.post);
TicketCategoryRouter.put('/TicketCategory/:id', ConstTicketCategoryController.update);
TicketCategoryRouter.delete('/TicketCategory/:id', ConstTicketCategoryController.delete);

export default TicketCategoryRouter;
import { Router, Request , Response } from "express";

import {TicketStatusController} from "../controllers/controller_TicketStatus"

const ConstTicketStatusController = new TicketStatusController()

const TicketStatusRouter = Router();

TicketStatusRouter.get('/GetAll', ConstTicketStatusController.GetAll);
TicketStatusRouter.get('/Get/:id', ConstTicketStatusController.GetById);
TicketStatusRouter.post('/', ConstTicketStatusController.post);
TicketStatusRouter.put('/:id', ConstTicketStatusController.update);
TicketStatusRouter.delete('/:id', ConstTicketStatusController.delete);


export default TicketStatusRouter;
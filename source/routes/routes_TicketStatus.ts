import { Router, Request , Response } from "express";

import {TicketStatusController} from "../controllers/controller_TicketStatus"

const ConstTicketStatusController = new TicketStatusController()

const TicketStatusRouter = Router();

TicketStatusRouter.get('/TicketStatus', ConstTicketStatusController.GetAll);
TicketStatusRouter.get('/TicketStatus/:id', ConstTicketStatusController.GetById);
TicketStatusRouter.post('/TicketStatus', ConstTicketStatusController.post);
TicketStatusRouter.put('/TicketStatus/:id', ConstTicketStatusController.update);
TicketStatusRouter.delete('/TicketStatus/:id', ConstTicketStatusController.delete);


export default TicketStatusRouter;
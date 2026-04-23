import { Router, Request , Response } from "express";

import {TicketController} from "../controllers/controller_Ticket"

const ConstTicketController= new TicketController()

const TicketRouter = Router();

TicketRouter.get('/GetAll', ConstTicketController.GetAll);
TicketRouter.get('/Get/:id', ConstTicketController.GetById);
TicketRouter.post('/', ConstTicketController.post);
TicketRouter.put('/:id', ConstTicketController.update);
TicketRouter.delete('/:id', ConstTicketController.delete);

export default TicketRouter;
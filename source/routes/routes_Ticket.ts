import { Router, Request , Response } from "express";

import {TicketController} from "../controllers/controller_Ticket"

const ConstTicketController= new TicketController()

const TicketRouter = Router();

TicketRouter.get('/Ticket', ConstTicketController.GetAll);
TicketRouter.get('/Ticket/:id', ConstTicketController.GetById);
TicketRouter.post('/Ticket', ConstTicketController.post);
TicketRouter.put('/Ticket/:id', ConstTicketController.update);
TicketRouter.delete('/Ticket/:id', ConstTicketController.delete);

export default TicketRouter;
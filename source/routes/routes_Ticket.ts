import { Router, Request , Response } from "express";

import {TicketController} from "../controllers/controller_Ticket"
import { Ticket } from "../entities/entity_Ticket";

const ConstTicketController= new TicketController()

const TicketRouter = Router();

TicketRouter.get('/GetAll', ConstTicketController.GetAll);
TicketRouter.get('/Get/:id', ConstTicketController.GetById);
TicketRouter.post('/', ConstTicketController.post);
TicketRouter.put('/:id', ConstTicketController.update);
TicketRouter.delete('/:id', ConstTicketController.delete);
TicketRouter.post('/GetTicketsByEmail', ConstTicketController.GetTicketsByEmail);
TicketRouter.get('/advanceTicket/:id', ConstTicketController.advanceTicket);
TicketRouter.post('/fetch-latest-tickets', ConstTicketController.fetchLastestTickets)

export default TicketRouter;


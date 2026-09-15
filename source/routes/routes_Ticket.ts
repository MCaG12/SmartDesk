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
TicketRouter.post('/fetch-latest-ticket-comments', ConstTicketController.fetchLatestTicketComments)
TicketRouter.post('/fetch-ticket-categories', ConstTicketController.fetchTicketTypesByAgent)
TicketRouter.post('/fetch-tickets-by-category', ConstTicketController.fetchTicketsByCategory)
TicketRouter.get('/fetch-open-ticket-counts', ConstTicketController.fetchOpenTicketCountPerCategory)
TicketRouter.post('/fetch-highest-ticket-count-operators', ConstTicketController.fetchHighestTicketCountOperators)
TicketRouter.post('/fetch-tickets-in-period', ConstTicketController.fetchTicketsInPeriod)

export default TicketRouter;


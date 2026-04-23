import { Router, Request , Response } from "express";

import {TicketController} from "../controllers/controller_Ticket"

const ConstTicketController= new TicketController()

const TicketRouter = Router();

TicketRouter.get('/Departamento', ConstTicketController.GetAll);
TicketRouter.get('/Departamento/:id', ConstTicketController.GetById);
TicketRouter.post('/Departamento', ConstTicketController.post);
TicketRouter.put('/Departamento/:id', ConstTicketController.update);
TicketRouter.delete('/Departamento/:id', ConstTicketController.delete);

export default TicketRouter;
import { Router, Request , Response } from "express";

import {TicketCommentController} from "../controllers/controller_TicketComment"

const ConstTicketCommentController= new TicketCommentController()

const TicketCommentRouter = Router();

TicketCommentRouter.get('/TicketComment', ConstTicketCommentController.GetAll);
TicketCommentRouter.get('/TicketComment/:id', ConstTicketCommentController.GetById);
TicketCommentRouter.post('/TicketComment', ConstTicketCommentController.post);
TicketCommentRouter.put('/TicketComment/:id', ConstTicketCommentController.update);
TicketCommentRouter.delete('/TicketComment/:id', ConstTicketCommentController.delete);


export default TicketCommentRouter;
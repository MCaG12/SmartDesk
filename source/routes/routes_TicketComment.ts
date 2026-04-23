import { Router, Request , Response } from "express";

import {TicketCommentController} from "../controllers/controller_TicketComment"

const ConstTicketCommentController= new TicketCommentController()

const TicketCommentRouter = Router();

TicketCommentRouter.get('/GetAll', ConstTicketCommentController.GetAll);
TicketCommentRouter.get('/Get/:id', ConstTicketCommentController.GetById);
TicketCommentRouter.post('/', ConstTicketCommentController.post);
TicketCommentRouter.put('/:id', ConstTicketCommentController.update);
TicketCommentRouter.delete('/:id', ConstTicketCommentController.delete);


export default TicketCommentRouter;
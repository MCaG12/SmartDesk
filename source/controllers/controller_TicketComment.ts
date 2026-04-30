
import { AppDataSource } from '../data-source';
import { TicketComment } from '../entities/entity_TicketComment';
import { GenericController } from './genericController';
import { Request , Response } from "express";


export class TicketCommentController extends GenericController<TicketComment> {

  const TicketCommentRepository = AppDataSource.getRepository(TicketComment)
  constructor() {
    super(AppDataSource.getRepository(TicketComment));
  }

  post = async (req: Request, res: Response) =>
  {
    if(req.body.tickcomComment.trim() == "" || typeof req.body.tickcomComment != "string"){}

    
  }

 
}
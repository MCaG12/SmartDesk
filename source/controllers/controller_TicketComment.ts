
import { generateDTO } from '../auxFunctions/generateObjectDto';
import ConstTicketComment from '../consts/ticketComment';
import { AppDataSource } from '../data-source';
import { Ticket } from '../entities/entity_Ticket';
import { TicketComment } from '../entities/entity_TicketComment';
import { Usuario } from '../entities/entity_Usuario';
import { GenericController } from './genericController';
import { Request , Response } from "express";

interface TicketCommentDTO
{
  tickcomComment: string,
  tickcomTicket: number,
  tickcomUser: number
}

export class TicketCommentController extends GenericController<TicketComment> {

  private TicketCommentRepository = AppDataSource.getRepository(TicketComment)
  private UserRepository = AppDataSource.getRepository(Usuario)
  private TicketRepository = AppDataSource.getRepository(Ticket)

  constructor() {
    super(AppDataSource.getRepository(TicketComment));
  }

  post = async (req: Request, res: Response) =>
  {
    try 
    {
      if(req.body.tickcomComment.trim() == "" || typeof req.body.tickcomComment != "string")
      {
        return res.status(400).json({ error: ConstTicketComment.BODY_REQUIRED});
      }

      if(req.body.tickcomTicket == null || typeof req.body.tickcomTicket != "number")
        {
          return res.status(400).json({ error: ConstTicketComment.BODY_REQUIRED});
        }

      if(req.body.tickcomUser == null || typeof req.body.tickcomUser != "string")
        {
          return res.status(400).json({ error: ConstTicketComment.BODY_REQUIRED});
        }

      const TemplateTicket = 
      {
        tickcomComment: '',
        tickcomTicket: 0,
        tickcomUser: 0
      }

      const nullables = [''];
      
      const TicketCommentObject = generateDTO<TicketCommentDTO>(TemplateTicket, req, nullables);

      if(typeof TicketCommentObject == "string")
        {
          return res.status(400).json({ error: ConstTicketComment.TICKETCOMMENT_INVALIDINFO});
        }

      if(!this.UserRepository.findOne({where :{Id : TicketCommentObject.tickcomUser}}))
      {
        return res.status(400).json({ error: ConstTicketComment.TICKETCOMMENT_INVALIDUSER});
      }

      if(!this.TicketRepository.findOne({where :{Id : TicketCommentObject.tickcomTicket}}))
      {
        return res.status(400).json({ error: ConstTicketComment.TICKETCOMMENT_INVALIDTICKET});
      }

      const TicketData = 
      {
        tickcomComment: '',
        tickcomTicket: {Id: TemplateTicket.tickcomTicket},
        tickcomUser: {Id: TemplateTicket.tickcomUser}
      }
      
      const NewTicketComment = this.TicketCommentRepository.create(TicketData)

      await this.TicketCommentRepository.save(NewTicketComment);

      return res.status(200).json(NewTicketComment)
    } 
    catch (error) 
    {
      return res.status(401).json(error)
    }

  }

 
}
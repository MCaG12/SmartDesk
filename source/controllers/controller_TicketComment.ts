
import { QueryBuilder } from 'typeorm';
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

  fetchCommentsByTicketId = async (req: Request, res: Response) =>
  {
    try 
    {
      if(req.body.ticketId == null || typeof req.body.ticketId != "number")
      {
        return res.status(400).json({ error: ConstTicketComment.BODY_REQUIRED});
      }

      const ticketId = req.body.ticketId; 

      const TicketCommentsFound : TicketComment[] =   await this.TicketCommentRepository
                                                      .createQueryBuilder("ticketComment")
                                                      .innerJoinAndSelect("ticketComment.tickcomTicket", "ticket")
                                                      .innerJoinAndSelect("ticketComment.tickcomUser", "user")
                                                      .where("ticket.TICKET_ID = :ticketCode", { ticketCode: ticketId })
                                                      .getMany();

      return res.status(200).json(TicketCommentsFound);
    } 
    catch (error) 
    {
      return res.status(401).json(error)
    }
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

      if(req.body.tickcomUser == null || typeof req.body.tickcomUser != "number")
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

      if (!this.UserRepository.findOne({ where: { Id: TicketCommentObject.tickcomUser } })) {
        return res.status(400).json({ error: ConstTicketComment.TICKETCOMMENT_INVALIDUSER });
      }

      if (!this.TicketRepository.findOne({ where: { Id: TicketCommentObject.tickcomTicket } })) {
        return res.status(400).json({ error: ConstTicketComment.TICKETCOMMENT_INVALIDTICKET });
      }

      const TicketData = 
      {
        tickcomComment: TicketCommentObject.tickcomComment,
        tickcomTicket: {Id: TicketCommentObject.tickcomTicket},
        tickcomUser: {Id: TicketCommentObject.tickcomUser}
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
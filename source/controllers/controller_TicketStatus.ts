
import { generateDTO } from '../auxFunctions/generateObjectDto';
import { AppDataSource } from '../data-source';
import { TicketStatus } from '../entities/entity_TicketStatus';
import { GenericController } from './genericController';
import { Request , Response } from "express";

interface ticketStatusDto
{
  ticketStatus: string;
}

export class TicketStatusController extends GenericController<TicketStatus> {

  private TicketStatusRepository = AppDataSource.getRepository(TicketStatus);

  constructor() {
    super(AppDataSource.getRepository(TicketStatus));
  }

  post = async (req: Request, res: Response) =>
    {
      if(req.body.ticketStatus.trim() == "" || typeof req.body.ticketStatus != "string"){return}
  
      try
      {
        const TicketTemplate = 
        {
           ticketStatus: ""
        }

        const nullables = [''];

        const TicketStatusObject = generateDTO<ticketStatusDto>(TicketTemplate, req, nullables);
        
        if(typeof TicketStatusObject == "string")
          {
            return
          }

        const NewTicketStatusBody = {
            tickstaDescription : TicketStatusObject.ticketStatus
        }

        const NewTicketStatusObject = await this.TicketStatusRepository.create(NewTicketStatusBody);

        await this.TicketStatusRepository.save(NewTicketStatusObject);

        return res.status(200).json(NewTicketStatusObject) 
      } 
      catch (error) 
      {
        
      }
    }

 
}
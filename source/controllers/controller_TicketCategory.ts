
import { generateDTO } from '../auxFunctions/generateObjectDto';
import { AppDataSource } from '../data-source';
import { TicketCategory } from '../entities/entity_TicketCategory';
import { GenericController } from './genericController';
import { Request , Response } from "express";

interface TicketCategoryDTO
{
  ticketCategory: string
}

export class TicketCategoryController extends GenericController<TicketCategory> {
  private TicketCategoryRepository = AppDataSource.getRepository(TicketCategory);

  constructor() {
    super(AppDataSource.getRepository(TicketCategory));
  }

  post = async (req: Request, res: Response) => 
    {
      if(req.body.ticketCategory.trim() == "" || typeof req.body.ticketCategory != "string")
        {

        }

      try
      {
        const TicketCategoryTemplate =
          {
            ticketCategory: ""
          }

        const nullables = [''];
          
        const TicketCategoryObject = generateDTO<TicketCategoryDTO>(TicketCategoryTemplate, req, nullables);

        if(typeof TicketCategoryObject == "string")
          {
            return
          }

        const NewTicketCategoryObject =
        {
            tickcatDescription : TicketCategoryObject.ticketCategory
        }

        const CreatedTicket = this.TicketCategoryRepository.create(NewTicketCategoryObject)
        
        const NewTicket = this.TicketCategoryRepository.save(CreatedTicket);
          
        return res.status(200).json(NewTicket)
      }
      catch
      {

      }
    }

 
}
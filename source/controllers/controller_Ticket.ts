
import { QueryBuilder } from 'typeorm';
import { generateDTO } from '../auxFunctions/generateObjectDto';
import ConstTicket from '../consts/TicketConst';
import { AppDataSource } from '../data-source';
import { Departamento } from '../entities/entity_Departamento';
import { Ticket } from '../entities/entity_Ticket';
import { TicketCategory } from '../entities/entity_TicketCategory';
import { TicketComment } from '../entities/entity_TicketComment';
import { Usuario } from '../entities/entity_Usuario';
import { ITicket } from '../interfaces/ticketInterface';
import { GenericController } from './genericController';
import { Request , Response } from "express";
import isValidDate from '../auxFunctions/isValidDate';

interface CreateTicketDTO {
  ticketTitle: string;
  ticketStatus: number;
  ticketPriority: number;
  ticketDescription: string;
  ticketCategory: number;
  ticketDateOpen: Date;
  ticketDateClose?: Date;
  ticketSolicitant: number;
  ticketAgent: number;
}

export class TicketController extends GenericController<Ticket> {

  private TicketRepository = AppDataSource.getRepository(Ticket)  
  private UserRepository   = AppDataSource.getRepository(Usuario) 
  private TicketCommentRepository = AppDataSource.getRepository(TicketComment)
  private CategoryRepository = AppDataSource.getRepository(TicketCategory)

  constructor() {
    super(AppDataSource.getRepository(Ticket));
  }

  GetTicketsByEmail = async (req:Request, res :Response) =>
  {
    try 
        {
            const email = req.body.email;
            if(email.trim() == "" || typeof(email) !== "string")
            {
                return res.status(400).json({ error: ConstTicket.TICKET_AGENT_EMAIL_INVALID});
            }

            return res.status(200).json(await this.TicketRepository.find({
            relations: [
              "ticketStatus",
              "ticketPriority",
              "ticketCategory",
              "ticketSolicitant",
              "ticketAgent"
            ],
            where: {
              ticketAgent: {
                usuarEmail: email
              }
            }
          }));
        } 

        catch (error) 
        {
            return error
        }
  }

 GetAll = async (req: Request, res  :Response) => 
  {
        try 
        {
            return res.status(200).json(await this.TicketRepository.find({
            relations: [
              "ticketStatus",
              "ticketPriority",
              "ticketCategory",
              "ticketSolicitant",
              "ticketAgent"
            ]
          }));
        } 

        catch (error) 
        {
            return error
        }
  }

 post = async (req: Request, res  :Response) => {
   {
      if (!req.body) {
        return res.status(400).json({ error: ConstTicket.BODY_REQUIRED});
      }
       
      if( req.body.ticketStatus == null || typeof req.body.ticketStatus !== "number")
        {
            return res.status(400).json({ error: ConstTicket.TICKET_STATUS_INVALID});
        }
      if( req.body.ticketPriority == null || typeof req.body.ticketPriority !== "number")
        {
            return res.status(400).json({ error: ConstTicket.TICKET_PRIORITY_INVALID});
        }
      if( req.body.ticketDescription.trim() == "" || typeof req.body.ticketDescription !== "string")
        {
            return res.status(400).json({ error: ConstTicket.TICKET_DESCRIPTION_INVALID});
        }      
      if( req.body.ticketCategory == null || typeof req.body.ticketCategory !== "number" )
        {
            return res.status(400).json({ error: ConstTicket.TICKET_CATEGORY_INVALID});
        }
      if( req.body.ticketDateOpen.trim() == "")
        {
          return res.status(400).json({ error: ConstTicket.TICKET_DATE_OPEN_EMPTY});
        }
      req.body.ticketDateOpen = new Date(req.body.ticketDateOpen)
      if( isNaN(req.body.ticketDateOpen.getTime()))
        {
          return res.status(400).json({ error: ConstTicket.TICKET_DATE_OPEN_INVALID});
        }
      if( req.body.ticketSolicitant == null || typeof req.body.ticketSolicitant !== "number")
        {
          return res.status(400).json({ error: ConstTicket.TICKET_SOLICITANT_INVALID});
        }
      if( typeof req.body.ticketAgent !== "number"  && req.body.ticketAgent != null )
        {
          return res.status(400).json({ error: ConstTicket.TICKET_AGENT_INVALID});
        }
        
         try 
         {   
            const TicketTemplate = 
            {
                ticketTitle: "",
                ticketStatus: 0,
                ticketPriority: 0,
                ticketDescription: "",
                ticketCategory: 0,
                ticketDateOpen: new Date(),
                ticketDateClose: undefined,
                ticketSolicitant: 0,
                ticketAgent:  0
              }

            const nullables = [];
            nullables.push("ticketDateClose")

            const TicketObject = generateDTO<CreateTicketDTO>(TicketTemplate, req, nullables)

            if(typeof TicketObject === "string")
            {
              return res.status(401).json(TicketObject);
            }

              
            if (!TicketObject.ticketDateClose) {
              delete TicketObject.ticketDateClose;
            }

            if(!await this.UserRepository.findOne({where: {Id : TicketObject.ticketAgent}}))
              {
                return res.status(401).json("The specified ticket agent has not been found!");
              }

             if(!await this.UserRepository.findOne({where: {Id : TicketObject.ticketSolicitant}}))
              {
                return res.status(401).json("The specified ticket solicitant has not been found!");
              }

              const entityData = {
                ...TicketObject,

                ticketStatus: { Id: TicketObject.ticketStatus },
                ticketPriority: { Id: TicketObject.ticketPriority },
                ticketCategory: { Id: TicketObject.ticketCategory },
                ticketSolicitant: { Id: TicketObject.ticketSolicitant },
                ticketAgent: { Id: TicketObject.ticketAgent }
              };
              const NewTicket =  this.TicketRepository.create(entityData) 

            await this.TicketRepository.save(NewTicket)

            return res.status(201).json(NewTicket);
         } 
 
         catch (error) 
         {
             return res.status(401).json(error)
         }
   }
 }

 advanceTicket = async (req: Request, res  :Response) => 
  {
    const ticketId = req.params.id;
    try 
    {
      const ticketFound = await this.TicketRepository.findOne({
          relations: [
            "ticketStatus",
            "ticketPriority",
            "ticketCategory",
            "ticketSolicitant",
            "ticketAgent"
          ],
          where: {
            Id: Number(ticketId)
          }
      })
      if(!ticketFound)
        {
          return res.status(400).json({ error: ConstTicket.TICKET_NOT_FOUND});
        }
      if(ticketFound.ticketStatus.Id == 1)
        {
          ticketFound.ticketStatus.Id = 2
        }
      else if(ticketFound.ticketStatus.Id == 2)
      {
        ticketFound.ticketStatus.Id = 4
      }
      else
        {
          ticketFound.ticketStatus.Id = 5
        }
      
      await this.TicketRepository.update(Number(ticketId), {
      ticketStatus: { Id: ticketFound.ticketStatus.Id } 
      });

      return res.status(200).json({ message: "Ticket advanced successfully" });

    } 

    catch (error) 
    {
        return error
    }
  }

  fetchLastestTickets = async (req:Request, res: Response) => 
  {
    const UserId : Number = req.body.UserId;

    try 
    {
      const TicketsFound: Ticket[] = await this.TicketRepository
      .createQueryBuilder("ticket")
      .limit(5)
      .where("ticket.TICKET_AGENT = :agentCode", { agentCode: UserId })
      .orderBy("ticket.TICKET_ID", "DESC")
      .getMany()

      return res.status(200).json(TicketsFound);
    } 

    catch (error) 
    {
      return res.status(500).json({message : error})
    }
  }

  fetchLatestTicketComments = async (req:Request, res:Response) => 
  {
    const AgentId : Number = req.body.AgentId;
    try 
    {
      const CommentsFound : TicketComment[] = await  this.TicketCommentRepository
      .createQueryBuilder("TicketComment")
      .innerJoinAndSelect(Ticket,"ticket", "ticket.TICKET_ID = TicketComment.TICKCOM_TICKETID")
      .where("TicketComment.TICKCOM_USERID = :agentCode", {agentCode: AgentId})
      .limit(5)
      .orderBy("TicketComment.TICKCOM_TICKETID", "DESC")
      .getMany()
      
      return res.status(200).json(CommentsFound)
    } 
    catch (error) 
    {
      return res.status(500).json({message : error});  
    }
  }

  fetchTicketTypesByAgent = async (req:Request, res:Response) => 
  {
    const AgentId : Number = req.body.AgentId;
    try 
    {
      const CategoriesFound : number [] = await this.TicketRepository
      .createQueryBuilder("ticket")
      .select("ticket.TICKET_CATEGORY", "category")
      .addSelect("COUNT(*)", "typeCount")
      .groupBy("ticket.TICKET_CATEGORY")
      .where("ticket.TICKET_AGENT = :agentCode", {agentCode: AgentId})
      .getRawMany();
      
      return res.status(200).json(CategoriesFound);
    } 

    catch (error) 
    {
      return res.status(500).json({message: error})  
    }
  }

  fetchTicketsByCategory = async (req: Request, res:Response) => 
  {
    const CategoryId = req.body.CategoryId;
    if(CategoryId == null)
      {
        return res.status(400).json({ error: ConstTicket.TICKET_CATEGORY_NOT_INFORMED});
      }

    const category = await this.CategoryRepository.findOneBy({
        Id: CategoryId
    });

    if (!category) {
       return res.status(400).json({ error: ConstTicket.TICKET_CATEGORY_NOT_FOUND});
    }

    try 
    {
      const CategoriesFound = await this.TicketRepository
      .createQueryBuilder("ticket")
      .leftJoinAndSelect("ticket.ticketStatus", "ticketStatus")
      .leftJoinAndSelect("ticket.ticketPriority", "ticketPriority")
      .leftJoinAndSelect("ticket.ticketCategory", "ticketCategory")
      .leftJoinAndSelect("ticket.ticketSolicitant", "ticketSolicitant")
      .leftJoinAndSelect("ticket.ticketAgent", "ticketAgent")
      .where("ticket.TICKET_CATEGORY = :categoryCode", {categoryCode: CategoryId})
      .getMany()

      return res.status(200).json(CategoriesFound);
    } 
    catch (error) 
    {
      return res.status(500).json({message: error})  
    }

  }

  fetchOpenTicketCountPerCategory = async (req: Request, res:Response) => 
    {
      try 
      {
          const CountsFound = await this.TicketRepository
          .createQueryBuilder("ticket")
          .select("ticket.TICKET_CATEGORY", "category")
          .addSelect("COUNT(ticket.TICKET_ID)", "count")
          .groupBy("ticket.TICKET_CATEGORY")
          .getRawMany();

          return res.status(200).json(CountsFound);
      } 
      catch (error) 
      {
          return res.status(500).json({message: error})  
      }
    }

  fetchHighestTicketCountOperators = async (req: Request, res: Response) => {
    try 
    {
        const CategoryId = req.body.CategoryId;
        if(CategoryId == null)
          {
            return res.status(400).json({ error: ConstTicket.TICKET_CATEGORY_NOT_INFORMED});
          }

        const category = await this.CategoryRepository.findOneBy({
            Id: CategoryId
        });

        if (!category) {
          return res.status(400).json({ error: ConstTicket.TICKET_CATEGORY_NOT_FOUND});
        }

        const OperatorsFound = await this.TicketRepository
        .createQueryBuilder("ticket")
        .leftJoin("ticket.ticketAgent", "ticketAgent")
        .select("ticketAgent.usuarNome", "OperatorName")
        .addSelect("COUNT(ticket.ticketAgent.Id)", "count")
        .where("ticket.TICKET_CATEGORY = :categoryCode", { categoryCode: CategoryId })
        .groupBy("ticketAgent.usuarNome")
        .limit(3)
        .getRawMany();

        return res.status(200).json(OperatorsFound);
    } 
    catch (error) 
    {
        return res.status(500).json({message: error}) 
    }
  }

  fetchTicketsInPeriod = async (req: Request, res: Response) => 
    {
      try 
      {
        const InitialDate = req.body.InitialDate;
        const FinalDate = req.body.FinalDate;
        const CategorySelected = req.body.TicketCategory;

        if( typeof(InitialDate) != "string" || InitialDate.trim() == "" || isValidDate(new Date(InitialDate)) == false)
          {
            return res.status(400).json({message: ConstTicket.TICKET_DATE_OPEN_INVALID });
          }
        
        if( typeof(FinalDate) != "string" )
          {
            return res.status(400).json({message: ConstTicket.TICKET_CLOSE_DATE_INVALID });
          }

        if( typeof(CategorySelected) != "number" || CategorySelected == null )
          {
            return res.status(400).json({message: ConstTicket.TICKET_CATEGORY_NOT_FOUND});
          }

        const TicketCategoryFound = await this.CategoryRepository.findOneBy({
            Id: CategorySelected
        })

        if(!TicketCategoryFound)
          {
            return res.status(400).json({message: ConstTicket.TICKET_CATEGORY_INVALID})
          }

        const TicketsFoundQuery = this.TicketRepository.createQueryBuilder("ticket")
          .andWhere("ticket.ticketCategory = :ticketcategory", { ticketcategory: CategorySelected });

        if (FinalDate.trim() != "" && isValidDate(new Date(FinalDate))) {

          TicketsFoundQuery.andWhere(
            "ticket.ticketDateOpen BETWEEN :initialdate AND :finaldate",
            { initialdate: InitialDate, finaldate: FinalDate }
          );
        } else {

          TicketsFoundQuery.andWhere(
            "ticket.ticketDateOpen >= :initialdate",
            { initialdate: InitialDate }
          );
        }

        const TicketsFound = await TicketsFoundQuery.getMany();
         
        return res.status(200).json(TicketsFound)
        
      } 
      catch (error) 
      {
        console.error(error); 
        return res.status(500).json({message: error}) 
      }
    }

  fetchTicketsBySolicitant = async (req: Request, res: Response) => 
  {
    try 
    {
      const solicitantId = req.body.solicitantId;

      if(typeof(solicitantId) != "number" || solicitantId == null)
      {
        return res.status(400).json({message: ConstTicket.TICKET_DATE_OPEN_INVALID });
      }

      const SolicitantFound =  await this.UserRepository.findOneBy({Id: solicitantId})

      if(!SolicitantFound)
        {
          return res.status(401).json({message: ConstTicket.TICKET_SOLICITANT_NOT_FOUND });
        }

      const TicketsFound : Ticket[] = await this.TicketRepository
                                      .createQueryBuilder("Ticket")
                                      .leftJoinAndSelect("Ticket.ticketStatus", "ticketStatus")
                                      .leftJoinAndSelect("Ticket.ticketPriority", "ticketPriority")
                                      .leftJoinAndSelect("Ticket.ticketCategory", "ticketCategory")
                                      .leftJoinAndSelect("Ticket.ticketSolicitant", "ticketSolicitant")
                                      .leftJoinAndSelect("Ticket.ticketAgent", "ticketAgent")
                                      .where("Ticket.TICKET_SOLICITANT  = :solicitantCode", {solicitantCode: solicitantId})
                                      .getMany()

      return res.status(200).json(TicketsFound)
                                    
    } 
    catch (error) 
    {
      console.error(error); 
      return res.status(500).json({message: error}) 
    }
  }

  fetchUserTicketsCompletedAndNotInExpectedTime = async (req:Request, res:Response) => 
    {
      try 
      {
        const agentId = req.body.agentId;

        if(typeof(agentId) != "number" || agentId == null)
        {
          return res.status(400).json({message: ConstTicket.TICKET_AGENT_INVALID });
        }

        const [counts] = await this.TicketRepository.query('SELECT * FROM ticket_counts($1)', [agentId]);

        return res.status(200).json({completedInTime: counts.completed_in_time,
                                     notCompletedInTime: counts.not_completed_in_time}); 
      } 
      catch (error) 
      {
        console.error(error); 
        return res.status(500).json({message: error}) 
      }
    }

}




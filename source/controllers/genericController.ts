import { ObjectLiteral, Repository } from "typeorm";
import { Request , Response } from "express";

export class GenericController<T extends ObjectLiteral> {
  constructor(private readonly repository: Repository<T>) {}

  GetAll = async(req:Request, res:Response) =>
  {
        try 
        {
            return res.status(200).json(await this.repository.find());
        } 

        catch (error) 
        {
            return error
        }
  }

  GetById = async(req:Request, res:Response) =>
  {
        console.log(req.params.id)
        try 
        {   
            
            return res.status(200).json(await this.repository.find({
            where: {
                Id:req.params.id  as any
            }
            }))
        } 

        catch (error) 
        {
           return error 
        }
  }

    post = async (req: Request, res:Response) => {
    {
            try 
            {   
                const entity = this.repository.create();
                return res.status(200).json(await this.repository.save(entity));
            } 

            catch (error) 
            {
                return error
            }
    }
    }

 update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);  
    const data = req.body;             

    await this.repository.update(id, data);
    const result = await this.repository.findOneBy({ id } as any);

    if (!result) return res.status(404).json({ message: 'Not found' });
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

delete = async (req: Request, res: Response) => {
    try 
    {
      await res.status(200).json(this.repository.delete(req.body.id as any))
      return `Register with id ${req.body.id} has been deleted!`;
    } 

    catch (error) 
    {
        return error;
    }

}

}


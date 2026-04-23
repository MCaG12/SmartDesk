import { ObjectLiteral, Repository } from "typeorm";
import { Request , Response } from "express";

export class GenericController<T extends ObjectLiteral> {
  constructor(private readonly repository: Repository<T>) {}

  GetAll = async(req:Request, res:Response) =>
  {
        try 
        {
            return this.repository.find;
        } 

        catch (error) 
        {
            return error
        }
  }

  GetById = async(req:Request, res:Response) =>
  {
        try 
        {   
            return this.repository.findBy( req.body.id  as any);
        } 

        catch (error) 
        {
           return error 
        }
  }

  post = async (data: Partial<T>) => {
  {
        try 
        {   
            const entity = this.repository.create();
            return this.repository.save(entity);
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
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

delete = async (req: Request) => {
    try 
    {
      await this.repository.delete(req.body.id as any);
      return `Register with id ${req.body.id} has been deleted!`;
    } 

    catch (error) 
    {
        return error;
    }

}

}


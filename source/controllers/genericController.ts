import { ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
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
            return this.repository.findBy( id  as any);
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

 update = async (id: number, data: Partial<T>) => {
    {
        try 
        {
        await this.repository.update(id, data as any);
        return this.repository.findOne(id as any);     
        } 
        catch (error) 
        {
        return error;      
        }
    }
}

delete = async (id: number, data: Partial<T>) => {
    try 
    {
      await this.repository.delete(id as any);
      return "Register Removed";
    } 

    catch (error) 
    {
        return error;
    }

}

}


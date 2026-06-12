
import { generateDTO } from '../auxFunctions/generateObjectDto';
import ConstTypePriority from '../consts/TypePriority';
import { AppDataSource } from '../data-source';
import { TypePriority } from '../entities/entity_TypePriority';
import { GenericController } from './genericController';
import { Request , Response } from "express";

interface TypePriorityDTO 
{
  typepriDescription: string
}
export class TypePriorityController extends GenericController<TypePriority> {

  private TypePriority = AppDataSource.getRepository(TypePriority);

  constructor() {
    super(AppDataSource.getRepository(TypePriority));
  }

  Post = async (req:Request, res:Response) => 
  {
    try 
    {
        if(req.body.typepriDescription.trim() == "" || typeof req.body.typepriDescription != "string")
        {
            return res.status(400).json({ error: ConstTypePriority.TYPE_PRIORITY_DESCRIPTION});
        }

        const TypePriorityTemplate = 
        {
          typepriDescription: ""
        }

        const nullables = [''];

        const NewTypePriority = generateDTO<TypePriorityDTO>(TypePriorityTemplate, req, nullables);

        if(typeof NewTypePriority == "string")
          {
            return res.status(400).json({ error: ConstTypePriority.TYPE_PRIORITY_BADBODY}); 
          }
        
        const NewTypePriorityObject = await this.TypePriority.create(NewTypePriority)
        
        await this.TypePriority.save(NewTypePriorityObject)

        return res.status(200).json(NewTypePriorityObject)
    } 
    catch (error) 
    {
        return res.status(401).json(error)
    }
      
  }
}
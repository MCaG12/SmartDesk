
import { generateDTO } from '../auxFunctions/generateObjectDto';
import ConstDepartamento from '../consts/Departamento';
import { AppDataSource } from '../data-source';
import { Departamento } from '../entities/entity_Departamento';
import { GenericController } from './genericController';
import { Request , Response } from "express";

interface DepartamentoDTO
{
    DepartamentoNome: string
}

export class DepartamentoController extends GenericController<Departamento> {

  private DepartamentoRepository = AppDataSource.getRepository(Departamento);
  constructor() {
    super(AppDataSource.getRepository(Departamento));
  }

  post = async (req:Request, res:Response) => 
    {
      if(req.body.departamentoNome.trim() == "" || typeof req.body.departamentoNome != "string")
        {
          return res.status(400).json({ error: ConstDepartamento.BODY_REQUIRED});
        }

      try 
      {
          const DepartamentoTemplate =
          {
             DepartamentoNome: ""
          }

          const nullables = [''];

          const DepartamentoObject = generateDTO<DepartamentoDTO>(DepartamentoTemplate, req, nullables);

          if(typeof DepartamentoObject == "string")
            {
              return res.status(400).json({ error: ConstDepartamento.DEPARTAMENTO_NAME_REQUIRED});
            }

          const newObject = 
          {
              depNomeDepartamento: DepartamentoObject.DepartamentoNome
          }


          const NewDepartament = await this.DepartamentoRepository.create(newObject)

          await this.DepartamentoRepository.save(NewDepartament);

          return res.status(200).json(NewDepartament)


      } 
      catch (error) 
      {
        
      }
    }
 
}
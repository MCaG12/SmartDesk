
import { generateDTO } from '../auxFunctions/generateObjectDto';
import ConstCargo from '../consts/Cargo';
import { AppDataSource } from '../data-source';
import { Cargo } from '../entities/entity_Cargo';
import { GenericController } from './genericController';
import { Request , Response } from "express";

interface cargoDto
{
  cargoNome:string,
  departamento: number

}

export class CargoController extends GenericController<Cargo> {

  private CargoRepository = AppDataSource.getRepository(Cargo);
  constructor() {
    super(AppDataSource.getRepository(Cargo));
  }

  Post = async (req:Request, res:Response) => 
    {
        if(req.body.cargoNome.trim() == "" || typeof req.body.cargoNome != "string")
        {
          return res.status(400).json({ error: ConstCargo.CARGO_NAME});
        }

        if(req.body.departamento == null || typeof req.body.departamento != "number")
        {
          return res.status(400).json({ error: ConstCargo.DEPARTAMENT_CODE});
        }
      try 
      {
          const CargoTemplate =
          {
            cargoNome: "",
            departamento: 0
          }

          const nullables = [''];

          const CargoObject = generateDTO<cargoDto>(CargoTemplate, req, nullables);

          if(typeof CargoObject == "string")
            {
              return res.status(400).json({ error: ConstCargo.BODY_REQUIRED});
            }

          const NewCargoObject = {
              carNome: CargoObject.cargoNome,
              carDepartamento: { Id: CargoObject.departamento }  
          }

          const NewCargo = await this.CargoRepository.create(NewCargoObject)

          await this.CargoRepository.save(NewCargo);

          return res.status(200).json(NewCargo)


      } 
      catch (error) 
      {
        
      }
    }
  

 
}

import { generateDTO } from '../auxFunctions/generateObjectDto';
import ConstUser from '../consts/UserConst';
import { AppDataSource } from '../data-source';
import { Usuario } from '../entities/entity_Usuario';
import { GenericController } from './genericController';
import { Request , Response } from "express";


interface CreateUserDTO {
  usuarNome: string;
  usuarEmail: string;
  usuarSenha: string;
  usuarCargo: number;
  usuarDepartamento: number;
  usuarTipoUsuario: number;

}

export class UsuarioController extends GenericController<Usuario> {

  private UserRepository   = AppDataSource.getRepository(Usuario) 

  constructor() {
    super(AppDataSource.getRepository(Usuario));
  }

  post = async (req: Request, res  :Response) => {
    if (!req.body) {
        return res.status(400).json({ error: ConstUser.BODY_REQUIRED});
      }
       
      if( req.body.usuarNome == null || typeof req.body.usuarNome !== "string")
        {
            return res.status(400).json({ error: ConstUser.TICKET_STATUS_INVALID});
        }

      if( req.body.usuarEmail.trim() == "" || typeof req.body.usuarEmail !== "string")
        {
            return res.status(400).json({ error: ConstUser.TICKET_PRIORITY_INVALID});
        }

      if( req.body.usuarSenha.trim() == "" || typeof req.body.usuarSenha !== "string")
        {
            return res.status(400).json({ error: ConstUser.TICKET_DESCRIPTION_INVALID});
        }  

      if( req.body.usuarCargo == null || typeof req.body.usuarCargo !== "number")
        {
            return res.status(400).json({ error: ConstUser.TICKET_STATUS_INVALID});
        }

      if( req.body.usuarDepartamento == null || typeof req.body.usuarDepartamento !== "number")
        {
            return res.status(400).json({ error: ConstUser.TICKET_PRIORITY_INVALID});
        }

      if( req.body.usuarTipoUsuario == null|| typeof req.body.usuarTipoUsuario !== "number")
        {
            return res.status(400).json({ error: ConstUser.TICKET_DESCRIPTION_INVALID});
        }      

      try 
      {
        const UserTemplate = 
        {
          usuarNome: "",
          usuarEmail: "",
          usuarSenha: "",
          usuarCargo: 0,
          usuarDepartamento: 0,
          usuarTipoUsuario: 0,
        }

        const nullables :string[] = [];

        const UserObject = generateDTO<CreateUserDTO>(UserTemplate, req, nullables)

        if(typeof UserObject === "string")
        {
          return res.status(401).json(UserObject);
        }


        const entityData = {
          ...UserObject,

          usuarCargo: { Id: UserObject.usuarCargo },
          usuarDepartamento: { Id: UserObject.usuarDepartamento },
          usuarTipoUsuario: { Id: UserObject.usuarTipoUsuario },
        };
        const NewUser =  this.UserRepository.create(entityData) 

        await this.UserRepository.save(NewUser)

        return res.status(201).json(NewUser);
      } 
      catch (error) 
      {
        return res.status(401).json(error)
      }
  }
 
}
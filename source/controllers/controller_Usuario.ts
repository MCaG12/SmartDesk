
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

        const saltRounds = 10;
        UserObject.usuarSenha = await bcrypt.hash(UserObject.usuarSenha, saltRounds);

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

  GetAll = async (req: Request, res  :Response) => 
  {
        try 
        {
            return res.status(200).json(await this.UserRepository.find({
            relations: [
              "usuarCargo",
              "usuarDepartamento",
              "usuarTipoUsuario"
            ]
          }));
        } 

        catch (error) 
        {
            return error
        }
  }

  UpdatePassword = async (req: Request, res  :Response) => 
  {
        try 
        {
            const BodyEmail = req.body.Email;
            const BodyPassword = req.body.Password
            const NewPassword = req.body.NewPassword

            if(typeof BodyEmail !== "string" || BodyEmail.trim() === "")
              {
                  return res.status(400).json({ error: ConstUser.USER_EMAIL_OR_PASSWORD_INVALID});   
              }
            
            if(typeof BodyPassword !== "string" || BodyPassword.trim() === "")
              {
                  return res.status(400).json({ error: ConstUser.USER_EMAIL_OR_PASSWORD_INVALID});   
              }
            
            if(typeof NewPassword !== "string" || NewPassword.trim() === "")
              {
                  return res.status(400).json({ error: ConstUser.USER_NEW_PASSWORD_INVALID});   
              }

            const FoundUser = await this.UserRepository.findOne({where:{"usuarEmail": BodyEmail}})
            
            if(!FoundUser)
              {
                 return res.status(400).json({ error: ConstUser.USER_NOT_FOUND});   
              }
            
            FoundUser.usuarSenha = NewPassword;
            await this.UserRepository.save(FoundUser) 
            return res.status(200).json({ message: "UserUpdated"})
        } 

        catch (error) 
        {
            return res.status(500).json({ error: "Internal server error" });
        }
  }

  HandleLogin = async (req : Request, res : Response) => 
  {
    try 
    {
      const BodyEmail = req.body.Email;
      const BodyPassword = req.body.Password; 

      if(typeof req.body.Email != "string" || BodyEmail.trim() == "")
        {
            return res.status(400).json({ error: ConstUser.USER_NO_EMAIL}); 
        }

      if(typeof req.body.Password  != "string" || BodyPassword.trim() == "")
        {
            return res.status(400).json({ error: ConstUser.USER_NO_PASSWORD}); 
        }
        
      const UserFound = await this.UserRepository.findOne({
        where: { usuarEmail: BodyEmail },
        relations: ['usuarCargo', 'usuarDepartamento', 'usuarTipoUsuario'],
        select: {
          Id: true,
          usuarEmail: true,
          usuarNome: true,
          usuarSenha: true,
          usuarCargo: true,
          usuarDepartamento: true,
          usuarTipoUsuario: true,
        },
      });

      if(!UserFound)
      {
          return res.status(400).json({ error: ConstUser.USER_NOT_FOUND});   
      }

      const PasswordCheck = await bcrypt.compare(BodyPassword, UserFound.usuarSenha)

      if(!PasswordCheck) 
        {
          return res.status(400).json({ error: ConstUser.USER_EMAIL_OR_PASSWORD_INVALID}); 
        }

      const { usuarSenha, ...UserWithoutPassword } = UserFound;

      return res.status(200).json({message : UserWithoutPassword})
        
    } 
    catch (error)
    {
        return res.status(500).json({ error: "Internal server error" });
    }
  }

  HandleFetchUsersByRole = async (req: Request, res: Response) => {
    try 
    {
      const id = Number(req.params.roleCode);

      if(id == null)
        {
          return res.status(400).json({ error: ConstUser.USER_NO_ROLECODE}); 
        }
      
      const usersFound = await this.UserRepository.createQueryBuilder("USUARIO").where("USUARIO.USUAR_CARGO = :roleCode", {roleCode: id}).getMany();

      return res.status(200).json({ message: usersFound});
    }
    catch (error) 
    {
      return res.status(500).json({error: error})  
    }
  }

 
}
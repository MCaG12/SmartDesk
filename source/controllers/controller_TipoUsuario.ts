
import { generateDTO } from '../auxFunctions/generateObjectDto';
import ConstTypeUser from '../consts/TypeUser';
import { AppDataSource } from '../data-source';
import { TipoUsuario } from '../entities/entity_TipoUsuario';
import { GenericController } from './genericController';
import { Request , Response } from "express";

interface TipoUserDto 
{
    tipusuDescricao: string
}

export class TipoUsuarioController extends GenericController<TipoUsuario> {
  private TipoUsuarioRepository = AppDataSource.getRepository(TipoUsuario);

  constructor() {
    super(AppDataSource.getRepository(TipoUsuario));
  }

  post = async (req: Request, res: Response) => 
    {

      if(req.body.tipusuDescricao.trim() == "" || typeof req.body.tipusuDescricao != "string")
        {
           return res.status(400).json({ error: ConstTypeUser.TYPE_USER_DESCRIPTION});
        }


      const TipoUserTemplate =
      { 
        tipusuDescricao: ""
      }

      const nullables = [''];

      const TipoUserObject = generateDTO<TipoUserDto>(TipoUserTemplate, req, nullables);

      if(typeof TipoUserObject == "string")
        {
          return res.status(400).json({ error: ConstTypeUser.TYPE_USER_BADBODY});
        }

      const NewTipoUser = await this.TipoUsuarioRepository.create(TipoUserObject); 

      await this.TipoUsuarioRepository.save(NewTipoUser);

      return res.status(200).json(NewTipoUser);

    }

 
}
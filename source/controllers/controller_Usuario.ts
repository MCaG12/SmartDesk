
import { AppDataSource } from '../data-source';
import { Usuario } from '../entities/entity_Usuario';
import { GenericController } from './genericController';

export class UsuarioController extends GenericController<Usuario> {
  constructor() {
    super(AppDataSource.getRepository(Usuario));
  }

 
}
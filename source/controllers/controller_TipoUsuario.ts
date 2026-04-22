
import { AppDataSource } from '../data-source';
import { TipoUsuario } from '../entities/entity_TipoUsuario';
import { GenericController } from './genericController';

export class CargoController extends GenericController<TipoUsuario> {
  constructor() {
    super(AppDataSource.getRepository(TipoUsuario));
  }

 
}
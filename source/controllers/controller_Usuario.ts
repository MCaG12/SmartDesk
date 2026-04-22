
import { AppDataSource } from '../data-source';
import { Usuario } from '../entities/entity_Usuario';
import { GenericController } from './genericController';

export class CargoController extends GenericController<Usuario> {
  constructor() {
    super(AppDataSource.getRepository(Usuario));
  }

 
}
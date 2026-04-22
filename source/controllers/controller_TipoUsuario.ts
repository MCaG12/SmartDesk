
import { AppDataSource } from '../data-source';
import { Ticket } from '../entities/entity_TipoUsuario';
import { GenericController } from './genericController';

export class CargoController extends GenericController<Cargo> {
  constructor() {
    super(AppDataSource.getRepository(Cargo));
  }

 
}
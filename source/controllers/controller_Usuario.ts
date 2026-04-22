
import { AppDataSource } from '../data-source';
import { Ticket } from '../entities/entity_Usuario';
import { GenericController } from './genericController';

export class CargoController extends GenericController<Cargo> {
  constructor() {
    super(AppDataSource.getRepository(Cargo));
  }

 
}
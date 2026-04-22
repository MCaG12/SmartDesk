
import { AppDataSource } from '../data-source';
import { TicketCategory } from '../entities/entity_Category';
import { GenericController } from './genericController';

export class CargoController extends GenericController<Cargo> {
  constructor() {
    super(AppDataSource.getRepository(Cargo));
  }

 
}
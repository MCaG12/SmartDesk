
import { AppDataSource } from '../data-source';
import { TicketCategory } from '../entities/entity_Category';
import { GenericController } from './genericController';

export class CargoController extends GenericController<TicketCategory> {
  constructor() {
    super(AppDataSource.getRepository(TicketCategory));
  }

 
}
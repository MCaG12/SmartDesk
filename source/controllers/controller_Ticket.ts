
import { AppDataSource } from '../data-source';
import { Ticket } from '../entities/entity_Ticket';
import { GenericController } from './genericController';

export class CargoController extends GenericController<Ticket> {
  constructor() {
    super(AppDataSource.getRepository(Ticket));
  }

 
}
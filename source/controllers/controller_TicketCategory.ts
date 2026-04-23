
import { AppDataSource } from '../data-source';
import { TicketCategory } from '../entities/entity_TicketCategory';
import { GenericController } from './genericController';

export class TicketCategoryController extends GenericController<TicketCategory> {
  constructor() {
    super(AppDataSource.getRepository(TicketCategory));
  }

 
}
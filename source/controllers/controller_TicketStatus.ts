
import { AppDataSource } from '../data-source';
import { TicketStatus } from '../entities/entity_TicketStatus';
import { GenericController } from './genericController';

export class TicketStatusController extends GenericController<TicketStatus> {
  constructor() {
    super(AppDataSource.getRepository(TicketStatus));
  }

 
}
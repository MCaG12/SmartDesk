
import { AppDataSource } from '../data-source';
import { TicketComment } from '../entities/entity_TicketComment';
import { GenericController } from './genericController';

export class TicketCommentController extends GenericController<TicketComment> {
  constructor() {
    super(AppDataSource.getRepository(TicketComment));
  }

 
}
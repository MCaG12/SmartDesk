
import { AppDataSource } from '../data-source';
import { TypePriority } from '../entities/entity_TypePriority';
import { GenericController } from './genericController';

export class CargoController extends GenericController<TypePriority> {
  constructor() {
    super(AppDataSource.getRepository(TypePriority));
  }

 
}
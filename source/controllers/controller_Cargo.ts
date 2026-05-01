
import { AppDataSource } from '../data-source';
import { Cargo } from '../entities/entity_Cargo';
import { GenericController } from './genericController';

export class CargoController extends GenericController<Cargo> {
  constructor() {
    super(AppDataSource.getRepository(Cargo));
  }

  

 
}
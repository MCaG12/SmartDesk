
import { AppDataSource } from '../data-source';
import { Departamento } from '../entities/entity_Departamento';
import { GenericController } from './genericController';

export class CargoController extends GenericController<Cargo> {
  constructor() {
    super(AppDataSource.getRepository(Cargo));
  }

 
}
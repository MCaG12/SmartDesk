
import { AppDataSource } from '../data-source';
import { Departamento } from '../entities/entity_Departamento';
import { GenericController } from './genericController';

export class DepartamentoController extends GenericController<Departamento> {
  constructor() {
    super(AppDataSource.getRepository(Departamento));
  }

 
}
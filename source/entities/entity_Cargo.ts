import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Departamento } from './entity_Departamento';
 
@Entity('CARGO')
export class Cargo {
  @PrimaryGeneratedColumn({ name: 'CAR_ID' })
  carId!: number;
 
  @Column({ name: 'CAR_NOME', type: 'varchar', length: 50, nullable: false })
  carNome!: string;
 
  @ManyToOne(() => Departamento)
  @JoinColumn({ name: 'CAR_DEPARTAMENTOID' })
  carDepartamento!: Departamento;
}
 

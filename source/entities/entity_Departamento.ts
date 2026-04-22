import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('DEPARTAMENTO')
export class Departamento {
  @PrimaryGeneratedColumn({ name: 'DEP_ID' })
  depId!: number;
 
  @Column({ name: 'DEP_NOMEDEPARTAMENTO', type: 'varchar', length: 50, nullable: false })
  depNomeDepartamento!: string;
}

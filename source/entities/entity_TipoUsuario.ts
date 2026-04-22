import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('TIPOUSUARIO')
export class TipoUsuario {
  @PrimaryGeneratedColumn({ name: 'TIPUSU_ID' })
  tipusuId!: number;
 
  @Column({ name: 'TIPUSU_DESCRICAO', type: 'varchar', length: 50, nullable: true })
  tipusuDescricao!: string;
}

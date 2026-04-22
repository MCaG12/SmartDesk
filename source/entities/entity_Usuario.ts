import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cargo } from './entity_cargo';
import { Departamento } from './entity_Departamento';
import { TipoUsuario } from './entity_tipoUsuario';
 
@Entity('USUARIO')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'USUAR_ID' })
  usuarId!: number;
 
  @Column({ name: 'USUAR_NOME', type: 'varchar', length: 100, nullable: true })
  usuarNome!: string;
 
  @Column({ name: 'USUAR_EMAIL', type: 'varchar', length: 50, nullable: true })
  usuarEmail!: string;
 
  @Column({ name: 'USUAR_SENHA', type: 'varchar', length: 50, nullable: true })
  usuarSenha!: string;
 
  @ManyToOne(() => Cargo)
  @JoinColumn({ name: 'USUAR_CARGO' })
  usuarCargo!: Cargo;
 
  @ManyToOne(() => Departamento)
  @JoinColumn({ name: 'USUAR_DEPARTAMENTO' })
  usuarDepartamento!: Departamento;
 
  @ManyToOne(() => TipoUsuario)
  @JoinColumn({ name: 'USUAR_TIPOUSUARIO' })
  usuarTipoUsuario!: TipoUsuario;
}
 

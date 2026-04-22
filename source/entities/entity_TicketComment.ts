import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ticket } from './entity_Ticket';
import { Usuario } from './entity_usuario';
 
@Entity('TICKETCOMMENT')
export class TicketComment {
  @PrimaryGeneratedColumn({ name: 'TICKCOM_ID' })
  tickcomId!: number;
 
  @Column({ name: 'TICKCOM_COMMENT', type: 'text', nullable: false })
  tickcomComment!: string;
 
  @ManyToOne(() => Ticket, { nullable: true })
  @JoinColumn({ name: 'TICKCOM_TICKETID' })
  tickcomTicket!: Ticket;
 
  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'TICKCOM_USERID' })
  tickcomUser!: Usuario;
}

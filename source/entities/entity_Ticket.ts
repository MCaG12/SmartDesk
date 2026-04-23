import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TicketStatus } from './entity_TicketStatus';
import { TypePriority } from './entity_TypePriority';
import { TicketCategory } from './entity_TicketCategory';
import { Usuario } from './entity_Usuario';
 
@Entity('TICKET')
export class Ticket {
  @PrimaryGeneratedColumn({ name: 'TICKET_ID' })
  ticketId!: number;
 
  @Column({ name: 'TICKET_TITLE', type: 'text', nullable: false })
  ticketTitle!: string;
 
  @ManyToOne(() => TicketStatus, { nullable: true })
  @JoinColumn({ name: 'TICKET_STATUS' })
  ticketStatus!: TicketStatus;
 
  @ManyToOne(() => TypePriority, { nullable: true })
  @JoinColumn({ name: 'TICKET_PRIORITY' })
  ticketPriority!: TypePriority;
 
  @Column({ name: 'TICKET_DESCRIPTION', type: 'text', nullable: false })
  ticketDescription!: string;
 
  @ManyToOne(() => TicketCategory, { nullable: true })
  @JoinColumn({ name: 'TICKET_CATEGORY' })
  ticketCategory!: TicketCategory;
 
  @Column({ name: 'TICKET_DATEOPEN', type: 'timestamp', nullable: false })
  ticketDateOpen!: Date;
 
  @Column({ name: 'TICKET_DATECLOSE', type: 'timestamp', nullable: true })
  ticketDateClose!: Date;
 
  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'TICKET_SOLICITANT' })
  ticketSolicitant!: Usuario;
 
  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'TICKET_AGENT' })
  ticketAgent!: Usuario;
}

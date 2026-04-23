import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('TICKETCATEGORY')
export class TicketCategory {
  @PrimaryGeneratedColumn({ name: 'TICKCAT_ID' })
  tickcatId!: number;
 
  @Column({ name: 'TICKCAT_DESCRIPTION', type: 'text', nullable: false })
  tickcatDescription!: string;
}

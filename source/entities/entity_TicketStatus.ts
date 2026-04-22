import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('TICKETSTATUS')
export class TicketStatus {
  @PrimaryGeneratedColumn({ name: 'TICKSTA_ID' })
  tickstaId!: number;
 
  @Column({ name: 'TICKSTA_DESCRIPTION', type: 'text', nullable: false })
  tickstaDescription!: string;
}

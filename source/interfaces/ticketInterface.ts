export interface ITicket {
  ticketTitle: string;
  ticketStatus: number;
  ticketPriority: number;
  ticketDescription: string;
  ticketCategory: number;
  ticketDateOpen: Date;
  ticketDateClose: undefined;
  ticketSolicitant: number;
  ticketAgent: number;
}
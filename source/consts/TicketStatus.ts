interface ConstTicketStatus<T> {
  [Key: string]: T;
}

const ConstTicketStatus: ConstTicketStatus<string> = {
  BODY_REQUIRED: "Request body cannot be empty.",
  TICKET_STATUS_DESCRIPTION: "Ticket status description is required and must be a valid string."
};

export default ConstTicketStatus;
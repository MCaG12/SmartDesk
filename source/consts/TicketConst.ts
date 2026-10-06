interface ConstTicket<T> {
  [Key: string]: T;
}

const ConstTicket: ConstTicket<string> = {
  BODY_REQUIRED: "Request body cannot be empty.",
  TICKET_STATUS_INVALID: "The specified ticket status is invalid.",
  TICKET_PRIORITY_INVALID: "The specified ticket priority is invalid.",
  TICKET_DESCRIPTION_INVALID: "Ticket description is required and must be a valid string.",
  TICKET_CATEGORY_INVALID: "The specified ticket category is invalid or does not exist.",
  TICKET_DATE_OPEN_EMPTY: "Ticket opening date is required.",
  TICKET_DATE_OPEN_INVALID: "Ticket opening date must be a valid date format.",
  TICKET_SOLICITANT_INVALID: "The solicitant information provided is invalid.",
  TICKET_AGENT_INVALID: "The assigned agent information is invalid.",
  TICKET_AGENT_EMAIL_INVALID: "Agent email must be a valid email address.",
  TICKET_NOT_FOUND: "The specified ticket was not found.",
  TICKET_CLOSE_DATE_INVALID: "Ticket closing date must be a valid date format.",
  TICKET_SOLICITANT_NOT_FOUND: "The specified solicitant does not exist."
};

export default ConstTicket;
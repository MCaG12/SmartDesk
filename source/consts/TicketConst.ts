interface ConstTicket<T> {
  [Key: string]: T;
}

const ConstTicket: ConstTicket<string> = {
  BODY_REQUIRED: "",
  TICKET_STATUS_INVALID: "",
  TICKET_PRIORITY_INVALID: "",
  TICKET_DESCRIPTION_INVALID: "",
  TICKET_CATEGORY_INVALID: "",
  TICKET_DATE_OPEN_EMPTY: "",
  TICKET_DATE_OPEN_INVALID: "",
  TICKET_SOLICITANT_INVALID: "",
  TICKET_AGENT_INVALID: "",
};

export default ConstTicket;
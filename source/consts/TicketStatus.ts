interface ConstTicketStatus<T> {
  [Key: string]: T;
}

const ConstTicketStatus: ConstTicketStatus<string> = {
  BODY_REQUIRED: "",
  TICKET_STATUS_DESCRIPTION: ""
};

export default ConstTicketStatus;
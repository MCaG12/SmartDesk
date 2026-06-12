interface ConstTicketComment<T> {
  [Key: string]: T;
}

const ConstTicketComment: ConstTicketComment<string> = {
  BODY_REQUIRED: "",
  TICKETCOMMENT_INVALIDUSER : "",
  TICKETCOMMENT_INVALIDTICKET: "",
  TICKETCOMMENT_INVALIDINFO: ""
};

export default ConstTicketComment;
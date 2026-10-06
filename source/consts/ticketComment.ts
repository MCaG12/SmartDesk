interface ConstTicketComment<T> {
  [Key: string]: T;
}

const ConstTicketComment: ConstTicketComment<string> = {
  BODY_REQUIRED: "Request body cannot be empty.",
  TICKETCOMMENT_INVALIDUSER: "The user making or referenced in the comment is invalid or does not exist.",
  TICKETCOMMENT_INVALIDTICKET: "The target ticket ID is invalid or does not exist.",
  TICKETCOMMENT_INVALIDINFO: "Comment details or body content are invalid or missing required fields."
};

export default ConstTicketComment;
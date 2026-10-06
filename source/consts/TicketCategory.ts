interface ConstTicketCategory<T> {
  [Key: string]: T;
}

const ConstTicketCategory: ConstTicketCategory<string> = {
  BODY_REQUIRED: "Request body cannot be empty.",
  TICKET_CATEGORY_DESCRIPTION: "Ticket category description is required and must be a valid string."
};

export default ConstTicketCategory;
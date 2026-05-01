interface ConstTicketCategory<T> {
  [Key: string]: T;
}

const ConstTicketCategory: ConstTicketCategory<string> = {
  BODY_REQUIRED: "",
  TICKET_CATEGORY_DESCRIPTION: ""
};

export default ConstTicketCategory;
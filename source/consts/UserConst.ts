interface ConstUser<T> {
  [Key: string]: T;
}

const ConstUser: ConstUser<string> = {
  BODY_REQUIRED: "",
  TICKET_STATUS_INVALID: "",
  TICKET_PRIORITY_INVALID: "",
  TICKET_DESCRIPTION_INVALID: "",
  TICKET_CATEGORY_INVALID: "",
  TICKET_DATE_OPEN_EMPTY: "",
  TICKET_DATE_OPEN_INVALID: "",
  TICKET_SOLICITANT_INVALID: "",
  TICKET_AGENT_INVALID: "",
  USER_NOT_FOUND: "Usuário não encontrado",
  USER_EMAIL_OR_PASSWORD_INVALID: "Email ou Senha incorretos!",
  USER_NEW_PASSWORD_INVALID: "",
  USER_NO_PASSWORD: "Insira a senha!",
  USER_NO_EMAIL:"Insira o email!"
};

export default ConstUser;
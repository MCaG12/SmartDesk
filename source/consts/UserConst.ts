interface ConstUser<T> {
  [Key: string]: T;
}

const ConstUser: ConstUser<string> = {
  BODY_REQUIRED: "O corpo da requisição é obrigatório.",
  TICKET_STATUS_INVALID: "Status do chamado inválido.",
  TICKET_PRIORITY_INVALID: "Prioridade do chamado inválida.",
  TICKET_DESCRIPTION_INVALID: "Descrição do chamado inválida ou ausente.",
  TICKET_CATEGORY_INVALID: "Categoria do chamado inválida.",
  TICKET_DATE_OPEN_EMPTY: "A data de abertura do chamado é obrigatória.",
  TICKET_DATE_OPEN_INVALID: "Data de abertura do chamado inválida.",
  TICKET_SOLICITANT_INVALID: "Solicitante do chamado inválido.",
  TICKET_AGENT_INVALID: "Agente do chamado inválido.",
  USER_NOT_FOUND: "Usuário não encontrado",
  USER_EMAIL_OR_PASSWORD_INVALID: "Email ou Senha incorretos!",
  USER_NEW_PASSWORD_INVALID: "Nova senha inválida.",
  USER_NO_PASSWORD: "Insira a senha!",
  USER_NO_EMAIL: "Insira o email!",
  USER_NO_ROLECODE: "Código de perfil de usuário (role code) é obrigatório."
};

export default ConstUser;
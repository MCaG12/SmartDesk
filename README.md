<div align="center">

#  SmartDesk API

### Backend para plataforma de gerenciamento de chamados (tickets) de suporte técnico

Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC) - Fatec Arthur de Azevedo

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/Typescript-0000FF?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)

</div>

---

## Sobre o Projeto

O **SmartDesk** é um backend desenvolvido para dar suporte a uma plataforma de gerenciamento de chamados (tickets) de suporte técnico. O sistema permite o controle completo de usuários, departamentos, cargos, categorias, status e prioridades dos chamados, oferecendo uma base sólida para a criação de um Help Desk funcional.

##  Módulos do Sistema

O projeto está organizado nos seguintes módulos:

| Módulo | Descrição |
|---|---|
|  **Cargo** | Gerenciamento dos cargos dos usuários dentro da organização |
|  **Departamento** | Gerenciamento dos departamentos/setores da empresa |
|  **Ticket** | Abertura, consulta, atualização e avanço de status dos chamados |
|  **Categoria de Ticket** | Classificação dos chamados por tipo/categoria |
|  **Comentário de Ticket** | Histórico de interações e respostas dentro de um chamado |
|  **Status de Ticket** | Controle do andamento/estado dos chamados |
|  **Tipo de Usuário** | Perfis de acesso (ex: administrador, agente, cliente) |
|  **Prioridade** | Níveis de urgência atribuídos aos chamados |
|  **Usuário** | Cadastro, autenticação e gerenciamento das contas do sistema |

Cada módulo segue, em sua maioria, o padrão **CRUD** (Create, Read, Update, Delete), com endpoints adicionais para funcionalidades específicas, como avanço de status de ticket e busca de chamados por e-mail do solicitante.

---

## > Documentação da API

### >> Cargo
`/cargo`

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/getAll` | Lista todos os cargos |
| `GET` | `/get/:id` | Busca um cargo pelo ID |
| `POST` | `/` | Cria um novo cargo |
| `PUT` | `/:id` | Atualiza um cargo existente |
| `DELETE` | `/:id` | Remove um cargo |

<br>

### 🏢 Departamento
`/departamento`

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/GetAll` | Lista todos os departamentos |
| `GET` | `/Get/:id` | Busca um departamento pelo ID |
| `POST` | `/` | Cria um novo departamento |
| `PUT` | `/:id` | Atualiza um departamento existente |
| `DELETE` | `/:id` | Remove um departamento |

<br>

### >> Ticket
`/ticket`

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/GetAll` | Lista todos os tickets |
| `GET` | `/Get/:id` | Busca um ticket pelo ID |
| `POST` | `/` | Cria um novo ticket |
| `PUT` | `/:id` | Atualiza um ticket existente |
| `DELETE` | `/:id` | Remove um ticket |
| `POST` | `/GetTicketsByEmail` | Lista tickets vinculados a um e-mail |
| `GET` | `/advanceTicket/:id` | Avança o status de um ticket |
| `POST` | `/fetch-latest-tickets` | Busca os tickets mais recentes |
| `POST` | `/fetch-latest-ticket-comments` | Busca os comentários mais recentes de um ticket |
| `POST` | `/fetch-ticket-categories` | Busca categorias de ticket por agente |

<br>

### >> Categoria de Ticket
`/ticket-category`

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/GetAll` | Lista todas as categorias |
| `GET` | `/Get/:id` | Busca uma categoria pelo ID |
| `POST` | `/` | Cria uma nova categoria |
| `PUT` | `/:id` | Atualiza uma categoria existente |
| `DELETE` | `/:id` | Remove uma categoria |

<br>

### >> Comentário de Ticket
`/ticket-comment`

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/GetAll` | Lista todos os comentários |
| `GET` | `/Get/:id` | Busca um comentário pelo ID |
| `POST` | `/` | Cria um novo comentário |
| `PUT` | `/:id` | Atualiza um comentário existente |
| `DELETE` | `/:id` | Remove um comentário |

<br>

### >> Status de Ticket
`/ticket-status`

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/GetAll` | Lista todos os status |
| `GET` | `/Get/:id` | Busca um status pelo ID |
| `POST` | `/` | Cria um novo status |
| `PUT` | `/:id` | Atualiza um status existente |
| `DELETE` | `/:id` | Remove um status |

<br>

### >> Tipo de Usuário
`/tipo-usuario`

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/GetAll` | Lista todos os tipos de usuário |
| `GET` | `/Get/:id` | Busca um tipo de usuário pelo ID |
| `POST` | `/` | Cria um novo tipo de usuário |
| `PUT` | `/:id` | Atualiza um tipo de usuário existente |
| `DELETE` | `/:id` | Remove um tipo de usuário |

<br>

### >> Prioridade
`/type-priority`

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/GetAll` | Lista todas as prioridades |
| `GET` | `/Get/:id` | Busca uma prioridade pelo ID |
| `POST` | `/` | Cria uma nova prioridade |
| `PUT` | `/:id` | Atualiza uma prioridade existente |
| `DELETE` | `/:id` | Remove uma prioridade |

<br>

### >> Usuário
`/user`

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/GetAll` | Lista todos os usuários |
| `GET` | `/Get/:id` | Busca um usuário pelo ID |
| `POST` | `/` | Cria um novo usuário |
| `PUT` | `/:id` | Atualiza um usuário existente |
| `DELETE` | `/:id` | Remove um usuário |
| `POST` | `/UpdatePassword` | Atualiza a senha do usuário |

---

## >> Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Typescript**
- **

> Adicione aqui outras tecnologias do seu projeto, como banco de dados (ex: MySQL, PostgreSQL, MongoDB), ORM (ex: Sequelize, Prisma) e ferramentas de autenticação (ex: JWT).

## >> Como Executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/smartdesk.git

# Acesse a pasta do projeto
cd smartdesk

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

## >> Licença

Este projeto foi desenvolvido para fins acadêmicos, como parte do Trabalho de Conclusão de Curso (TCC).

---

<div align="center">

Feito com 💙 para o TCC — **SmartDesk**

</div>

# API Connect

API RESTful para gerenciamento de usuários, desenvolvida como MVP (Produto Mínimo Viável) com persistência simulada em memória.

## Objetivo

Fornecer um backend simples e funcional para operações de CRUD (Create, Read, Update, Delete) de usuários, servindo como base para futuras integrações com um banco de dados real.

## Tecnologias utilizadas

- Node.js
- Express.js

## Estrutura do projeto

api-connect/
├── controllers/
│ └── userController.js
├── data/
│ └── users.js
├── routes/
│ └── userRoutes.js
├── server.js
├── package.json
└── README.md


## Como executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/danye11ebrown/api-connect-danye11e-brown.git
```

2. Acesse a pasta do projeto:
```bash
cd api-connect-danye11e-brown
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor:
```bash
node server.js
```

5. A API estará disponível em:
http://localhost:3000


## Endpoints

| Método | Rota          | Descrição                          | Body (JSON)                               | Status de sucesso |
|--------|---------------|------------------------------------|-------------------------------------------|-------------------|
| GET    | `/users`      | Lista todos os usuários            | —                                         | 200               |
| GET    | `/users/:id`  | Busca um usuário pelo ID           | —                                         | 200 / 404         |
| POST   | `/users`      | Cria um novo usuário               | `{ "name": "string", "email": "string" }` | 201               |
| PUT    | `/users/:id`  | Atualiza um usuário existente      | `{ "name": "string", "email": "string" }` | 200 / 404         |
| DELETE | `/users/:id`  | Remove um usuário                  | —                                         | 204 / 404         |

### Exemplo de requisição — Criar usuário

**POST** `/users`
```json
{
  "name": "Maria Oliveira",
  "email": "maria.oliveira@email.com"
}
```

**Resposta (201 Created)**
```json
{
  "data": {
    "id": 3,
    "name": "Maria Oliveira",
    "email": "maria.oliveira@email.com"
  }
}
```

### Exemplo de requisição — Buscar usuário inexistente

**GET** `/users/999`

**Resposta (404 Not Found)**
```json
{
  "error": "Usuário não encontrado."
}
```

## Autor

Danyelle Brown
// Estrutura de dados em memória para armazenar os usuários
let users = [
  {
    id: 1,
    name: "Ana Silva",
    email: "ana.silva@email.com"
  },
  {
    id: 2,
    name: "Carlos Souza",
    email: "carlos.souza@email.com"
  }
];

// Próximo ID disponível
let nextId = 3;

// Retorna a lista de usuários
const getUsers = () => {
  return users;
};

// Busca um usuário pelo ID
const getUserById = (id) => {
  return users.find(user => user.id === Number(id));
};

// Gera um novo ID incremental
const generateId = () => {
  return nextId++;
};

// Adiciona um novo usuário
const addUser = (user) => {
  const newUser = {
    id: generateId(),
    name: user.name,
    email: user.email
  };

  users.push(newUser);

  return newUser;
};

// Atualiza um usuário existente
const updateUser = (id, data) => {
  const user = users.find(user => user.id === Number(id));

  if (!user) {
    return null;
  }

  if (data.name !== undefined) {
    user.name = data.name;
  }

  if (data.email !== undefined) {
    user.email = data.email;
  }

  return user;
};

// Remove um usuário
const deleteUser = (id) => {
  const index = users.findIndex(user => user.id === Number(id));

  if (index === -1) {
    return null;
  }

  const deletedUser = users[index];

  users.splice(index, 1);

  return deletedUser;
};

// Exporta as funções e dados necessários
module.exports = {
  users,
  getUsers,
  getUserById,
  generateId,
  addUser,
  updateUser,
  deleteUser
};
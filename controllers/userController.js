const { users, generateId } = require('../data/users');

// GET /users
// Lista todos os usuários cadastrados
const getUsers = (req, res) => {
  return res.status(200).json({
    data: users
  });
};


// GET /users/:id
// Busca um usuário pelo ID
const getUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  // Usuário não encontrado
  if (!user) {
    return res.status(404).json({
      error: 'Usuário não encontrado.'
    });
  }

  return res.status(200).json({
    data: user
  });
};


// POST /users
// Cadastra um novo usuário
const createUser = (req, res) => {
  const { name, email } = req.body;

  // Validação dos campos obrigatórios
  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e e-mail são obrigatórios.'
    });
  }

  // Criação do novo usuário
  const newUser = {
    id: generateId(),
    name,
    email
  };

  // Adiciona o usuário à estrutura em memória
  users.push(newUser);

  // Resposta de sucesso padronizada
  return res.status(201).json({
    data: newUser
  });
};


// PUT /users/:id
// Atualiza um usuário pelo ID
const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  // Localiza a posição do usuário no array
  const userIndex = users.findIndex(user => user.id === id);

  // Usuário não encontrado
  if (userIndex === -1) {
    return res.status(404).json({
      error: 'Usuário não encontrado.'
    });
  }

  // Validação dos campos obrigatórios
  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e e-mail são obrigatórios.'
    });
  }

  // Atualiza os dados mantendo o mesmo ID
  users[userIndex] = {
    id,
    name,
    email
  };

  return res.status(200).json({
    data: users[userIndex]
  });
};


// DELETE /users/:id
// Remove um usuário pelo ID
const deleteUser = (req, res) => {
  const id = Number(req.params.id);

  // Localiza a posição do usuário no array
  const userIndex = users.findIndex(user => user.id === id);

  // Usuário não encontrado
  if (userIndex === -1) {
    return res.status(404).json({
      error: 'Usuário não encontrado.'
    });
  }

  // Remove o usuário do array
  users.splice(userIndex, 1);

  // 204 não possui corpo de resposta
  return res.status(204).send();
};


// Exporta as funções para serem utilizadas pelas rotas
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
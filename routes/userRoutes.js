const express = require('express');

const router = express.Router();

// Importa as funções de usuários
const {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} = require('../data/users');

// GET /users
// Retorna todos os usuários
router.get('/', (req, res) => {
  try {
    const users = getUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar usuários',
      error: error.message
    });
  }
});

// GET /users/:id
// Retorna um usuário pelo ID
router.get('/:id', (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: 'ID inválido'
      });
    }

    const user = getUserById(id);

    if (!user) {
      return res.status(404).json({
        message: 'Usuário não encontrado'
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar usuário',
      error: error.message
    });
  }
});

// POST /users
// Cria um novo usuário

router.post('/', (req, res) => {
  try {
    const { name, email } = req.body;

    // Validação
    if (!name || !email) {
      return res.status(400).json({
        message: 'Nome e email são obrigatórios'
      });
    }

    const newUser = addUser({
      name,
      email
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao criar usuário',
      error: error.message
    });
  }
});

// PUT /users/:id
// Atualiza um usuário
router.put('/:id', (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: 'ID inválido'
      });
    }

    const { name, email } = req.body;

    if (!name && !email) {
      return res.status(400).json({
        message: 'Informe name ou email para atualizar'
      });
    }

    const updatedUser = updateUser(id, {
      name,
      email
    });

    if (!updatedUser) {
      return res.status(404).json({
        message: 'Usuário não encontrado'
      });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao atualizar usuário',
      error: error.message
    });
  }
});

// DELETE /users/:id
// Remove um usuário
router.delete('/:id', (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: 'ID inválido'
      });
    }

    const deletedUser = deleteUser(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: 'Usuário não encontrado'
      });
    }

    res.status(200).json({
      message: 'Usuário removido com sucesso',
      user: deletedUser
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao remover usuário',
      error: error.message
    });
  }
});

// Exporta as rotas
module.exports = router;
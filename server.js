const express = require('express');
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

// Middleware para interpretar requisições JSON
app.use(express.json());

// Rota inicial para testar a API
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Connect funcionando!'
  });
});

// Rotas de usuários
app.use('/users', userRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
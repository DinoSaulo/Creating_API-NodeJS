'use strict' // Forçando o javascript a ser estruturado

const express = require('express');
const router = express.Router(); // arquivos de rotas
const controller = require('../controllers/order-controler'); // importando os controllers
const authService = require('../services/auth-service');

// definição dos metodos

router.get('/', authService.authorize, controller.get);

router.post('/', authService.authorize, controller.post);

module.exports = router;
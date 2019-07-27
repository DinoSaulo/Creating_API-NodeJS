'use strict' // Forçando o javascript a ser estruturado

const express = require('express');
const router = express.Router(); // arquivos de rotas
const controller = require('../controllers/customer-controler'); // importando os controllers

// definição dos metodos

router.post('/', controller.post);

module.exports = router;
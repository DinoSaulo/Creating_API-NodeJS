'use strict' // Forçando o javascript a ser estruturado

const express = require('express');
const router = express.Router(); // arquivos de rotas
const controller = require('../controllers/product-controler'); // importando os controllers
const authService = require('../services/auth-service');

// definição dos metodos

router.get('/', controller.get);

router.get('/:slug', controller.getBySlug);

router.get('/admin/:id', controller.getById);

router.get('/tags/:tag', controller.getByTag);

router.post('/', authService.isAdmin, controller.post);

router.put('/:id', authService.isAdmin, controller.put);

router.delete('/', authService.isAdmin, controller.delete);

module.exports = router;
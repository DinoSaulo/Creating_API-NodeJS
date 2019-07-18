'use strict' // Forçando o javascript a ser estruturado

const express = require('express');
const router = express.Router(); // arquivos de rotas

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Estruturação da API",
        version: "0.0.1"
    })
});

module.exports = router;
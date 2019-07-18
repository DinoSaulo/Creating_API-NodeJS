'use strict' // Forçando o javascript a ser estruturado

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router(); // arquivos de rotas

const indexRoute = require('./routes/index-route'); // carregando as rotas
const productRoute = require('./routes/product-route'); // carregando as rotas

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute); // definindo a rota padrão
app.use('/products', productRoute);


module.exports = app;
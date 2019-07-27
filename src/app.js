'use strict' // Forçando o javascript a ser estruturado

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router(); // arquivos de rotas

// conectando com o banco
mongoose.connect(config.connectionString);

const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

const indexRoute = require('./routes/index-route'); // carregando as rotas
const productRoute = require('./routes/product-route'); // carregando as rotas
const customerRoute = require('./routes/customer-route'); // carregando as rotas
const orderRoute = require('./routes/order-route'); // carregando as rotas

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute); // definindo a rota padrão
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);


module.exports = app;
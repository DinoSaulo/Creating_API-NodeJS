'use strict' // Forçando o javascript a ser estruturado

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router(); // arquivos de rotas

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Estruturação da API",
        version: "0.0.1"
    })
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

app.use('/', route); // definindo a rota padrão
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);


module.exports = app;
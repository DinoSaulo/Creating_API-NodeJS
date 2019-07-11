'use strict' // Forçando o javascript a ser estruturado

const http = require('http');
const debug = require('debug')('nodestr:server')
const express = require('express')

const app = express();
const port = 3000; //porta em que vai roda a aplicação
app.set('port', port);

const server = http.createServer(app); //criando o servidor -> Definindo o MVC
const router = express.Router(); // arquivos de rotas

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Estruturação da API",
        version: "0.0.1"
    })
});

app.use('/', route); // definindo a rota padrão

server.listen(port) // ouvindo a porta
console.log('API rodando na porta ' + port);
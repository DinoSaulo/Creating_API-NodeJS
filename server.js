'use strict' // Forçando o javascript a ser estruturado

const http = require('http');
const debug = require('debug')('nodestr:server')
const express = require('express')

const app = express();
const port = normalizePort(process.env.PORT || '3000'); //porta em que vai roda a aplicação
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
server.on('error', onError); // gerenciando Erros do Servidor
server.on('listening', onListening); // inicializando o debug
console.log('API rodando na porta ' + port);

// função para buscar uma porta disponível para rodar
function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return port;
}

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);  // iniciando o debug
  }
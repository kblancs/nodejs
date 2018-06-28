
const http = require('http');
const EventEmitter = require('events');

const server = http.createServer()
const Logger = require('./logger');
const logger = new Logger();

server.on('connection', (socket) => {
  console.log('New connection....');
});
server.listen(3000);

//Register a listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');

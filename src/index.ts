import App from './app'
import * as http from 'http'
import config from './config';

const server =  http.createServer(App);

server.listen(config.port);

server.on('listening', () => {
    console.log('Listening on port: ' + config.port)
})
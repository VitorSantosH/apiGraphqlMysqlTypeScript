"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const config_1 = require("./config");
const server = http.createServer(app_1.default);
server.listen(config_1.default.port);
server.on('listening', () => {
    console.log('Listening on port: ' + config_1.default.port);
});

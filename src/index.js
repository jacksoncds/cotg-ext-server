const WebSocket = require('ws');
const wss = new WebSocket.Server({ host: '127.0.0.1', port: '1443' });
const mongoose = require('mongoose');
const onmessage = require('./onmessage');
const heartbeat = require('./heartbeat');

// Bind routes.
const routes = require('./routes');

mongoose.connect('mongodb://127.0.0.1:27017/cotg_management');

let fs = require('fs');
let path = require('path');
let modelsPath = __dirname + '/database-models';
fs.readdirSync(modelsPath).forEach((file) => {
    if (fs.lstatSync(modelsPath + '/' + file).isDirectory() == false) {
        let name = path.parse(file).name;
        let schema = require(modelsPath + '/' + file);
        mongoose.connection.model(name, schema, name);
    }
});

// Start web socket server.
wss.on('connection', function connection(ws, request) {
    ws.on('message', (message) => {
        onmessage(ws, message, request, wss);
    });

    ws.on('pong', heartbeat);
});

let i = require('./requester');
i(wss);
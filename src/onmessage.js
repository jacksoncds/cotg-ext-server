const auth = require('./authentication');
const routes = require('./routes');

const router = require('./router');

let clients = [];

/**
 * Try to parse request data.
 * @param {*} ws websocket request.
 * @param {*} data data sent.
 * @return {object} parsed data.
 */
function tryParsePayload(ws, data) {
    let req = null;

    try {
        req = JSON.parse(data);
    } catch (error) {
        ws.send('Data could not be parsed.');
    }

    if (req !== null) {
        return req;
    } else {
        return null;
    }
}

/**
 * Get client by token.
 * @param {*} clients Clients.
 * @param {*} token Token.
 * @return {Object} token.
 */
function getClientByToken(clients, token) {
    return clients.find(function(client) {
        if (client.member.extensionToken === token) {
            return client;
        }
    });

    return null;
}

module.exports = (ws, message, request, wss) => {
    // Parse data.
    let req = null;

    if (req = tryParsePayload(ws, message)) {

        if(!req.path){
            ws.send('Path is not valid.');
        } else {
            req.ip = request.headers['x-real-ip'].split(/\s*,\s*/)[0];
            router.route(req.path, req, ws);
        }
    }
};

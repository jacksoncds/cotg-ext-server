let routes = [];

function isAuthenticated(inGameName, token){
    const authenticatedClients = require('./authenticated').authenticated;

    return authenticatedClients.find(
        r => r.member.extensionToken === token &&
             r.member.inGameName === inGameName);
}

module.exports = {
    bind(path, func){
        if(!path || typeof path !== 'string'){
            throw new Error('Path must be a valid string.');
        }
    
        if(!func || typeof func !== 'function'){
            throw new Error('Function must be a valid function type.');
        }

        let pathIndex = routes.findIndex(
            r => r.path === path);
    
        if(pathIndex < 0){
            routes.push({
                path: path,
                callback: func
            });
        }
    },

    route(path, req, client){
        // Check if authenticated.
        let member = isAuthenticated(req.inGameName, req.token);

        if(member != null || req.path === '/authenticate'){
            let index = routes.findIndex(
                r => r.path === path);
            
            if(index > -1){
                // Sanitize data.
                let ms = require('mongo-sanitize');
                req.data = ms(req.data);

                routes[index].callback(req, client);
            }
        } else {
            client.send(JSON.stringify({
                status: 401,
                data: {
                    message: 'Not authenticated.'
                }
            }));
        }
    }
}
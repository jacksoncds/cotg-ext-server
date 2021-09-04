const router = require('./router');
const secret = "YourSecret";

let authenticatedClients = require('./authenticated').authenticated;

function validateToken(token, ip) {
    const jwt = require('jsonwebtoken');
    let content = jwt.verify(token, secret);

    if (content.ip !== ip) {
        return false;
    } else {
        return true;
    }
};

function authenticate(inGameName, extensionToken, ip) {
    let db = require('mongoose').connection;

    return new Promise((resolve, reject) => {
        db.models.members.findOne(
            { inGameName: inGameName, extensionToken: extensionToken },
            (err, member) => {
                if (err) {
                    reject(err);
                } else {
                    if (member) {
                        if (validateToken(extensionToken, ip)) {
                            resolve(member);
                        }
                    } else {
                        reject(new Error('Could not find member.'));
                    }
                }
            }
        );
    });
}


function isAuthenticated(inGameName, token) {
    return authenticatedClients.find(
        r => r.member.extensionToken === token && r.member.inGameName === inGameName);
}

router.bind('/authenticate', function (req, client) {
    let authClient = isAuthenticated(req.inGameName, req.token);
    if (authClient != null) {
        client.send(JSON.stringify({
            path: '/authenticate',
            status: 200,
            token: req.token,
            data: {
                message: 'Already authenticated.'
            }
        }));
    } else {
        authenticate(req.inGameName, req.token, req.ip)
            .then((member) => {
                if (member != null) {
                    authenticatedClients.push({
                        connection: client,
                        member: member,
                    });

                    client.send(JSON.stringify({
                        path: '/authenticate',
                        status: 200,
                        token: req.token,
                        data: {
                            message: 'Authenticated.'
                        }
                    }));
                }
            })
            .catch((error) => {
                client.send(JSON.stringify({
                    path: '/authenticate',
                    status: 401,
                    data: {
                        message: 'Could not authenticate with credentials given.'
                    }
                }));
            });
    }
});

module.exports = {
    validateToken: validateToken,
    authenticate: authenticate,
    isAuthenticated: isAuthenticated,
}
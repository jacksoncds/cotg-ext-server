const minPlayers = 1;

let wss = {};

// Get clients to request upload.
function findClients(wss) {
    if (wss.clients.size <= 1) {
        return wss.clients;
    } else {
        let randoms = [];

        for (let i = 0; i < minPlayers; i++) {
            randoms.push(Math.floor(Math.random() * wss.clients.size));
        }

        // Get connections.
        let connections = [];

        randoms.forEach(r => {
            connections.push(wss.clients[r]);
        });

        return connections;
    }
}

module.exports = {
    setWss: function(w){
        wss = w;
    },

    playerMilitary: function(){
        let payload = {
            path: '/import/player/military',
            data: {}
        }

        if(wss.clients != null && wss.clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    playerCity: function(){
        let payload = {
            path: '/import/player/cities',
            data: {}
        }

        wss.clients.forEach(c => {
            c.send(JSON.stringify(payload));
        });
    },
    allianceScore: function () {
        let payload = {
            path: '/import/alliance/score',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    allianceDonations: function(){
        let payload = {
            path: '/import/alliance/donations',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    allianceMilitary: function(){
        let payload = {
            path: '/import/alliance/military',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    allianceRankingTemples: function(){
        let payload = {
            path: '/import/temples/alliance',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    allianceReputation: function(){
        let payload = {
            path: '/import/alliance/reputation',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    attackIncoming: function () {
        let payload = {
            path: '/import/attack/incoming',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    attackOutgoing: function () {
        let payload = {
            path: '/import/attack/outgoing',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    empireScore: function () {
        let payload = {
            path: '/import/empire/score',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    empireMilitary: function(){
        let payload = {
            path: '/import/empire/military',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    empireOffensive: function(){
        let payload = {
            path: '/import/empire/offensive',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    empireDefensive: function(){
        let payload = {
            path: '/import/empire/defensive',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    raidingCaverns: function(){
        let payload = {
            path: '/import/raiding/caverns',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    raidingBosses: function(){
        let payload = {
            path: '/import/raiding/bosses',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    combatReputation: function(){
        let payload = {
            path: '/import/combat/reputation',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    combatOffensiveReputation: function(){
        let payload = {
            path: '/import/combat/offensiveReputation',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    combatDefensiveReputation: function(){
        let payload = {
            path: '/import/combat/defensivereputation',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    combatUnitKills: function(){
        let payload = {
            path: '/import/combat/unitkills',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    },
    combatPlundered: function(){
        let payload = {
            path: '/import/combat/plundered',
            data: {}
        }

        let clients = findClients(wss);

        if(clients != null && clients.size > 0){
            wss.clients.forEach(c => {
                c.send(JSON.stringify(payload));
            });
        }
    }
}
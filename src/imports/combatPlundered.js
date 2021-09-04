const router = require('./../router');

let path = '/import/combat/plundered';

function importCombatPlundered(player, data) {
    return new Promise((resolve, reject) => {
        let util = require('./util');

        let sanitized = util.sanitize(data[0]);

        let db = require('mongoose').connection;

        let readyData = util.formatRankingData(player, path, sanitized);

        db.models.ranking_imports.create(
            readyData,
            function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

router.bind(path, function(req, client){
    try {
        await importCombatPlundered(req.inGameName, req.data);
    } catch(err){
        client.send('Something went wrong, looking into it.');
    }
});

module.exports = {
    importCombatPlundered: importCombatPlundered,
}
const router = require('./../router');

let path = '/import/empire/military';

function importEmpireMilitary(player, data) {
    let util = require('./util');

    let sanitized = util.sanitize(data[0]);

    let db = require('mongoose').connection;

    let readyData = util.formatRankingData(player, path, sanitized);

    db.models.ranking_imports.create(
        readyData,
        function(err, result) {
            if (err) {
                throw err;
            }
        }
    );
}

router.bind(path, function(req, client){
    importEmpireMilitary(req.inGameName, req.data);
});

module.exports = {
    importEmpireMilitary: importEmpireMilitary,
}
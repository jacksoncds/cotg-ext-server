/**
 * Import player data.
 */
class Import {
    /**
     * Constructor.
     */
    constructor() {

    };

    sanitize(data) {
        let s = require('mongo-sanitize');
        return s(data);
    }

    formatData(data) {
        return {
            importDate: new Date(),
            data: JSON.parse(data),
        }
    }

    formatRankingData(inGameName, path, data) {
        let sanitized = this.sanitize(data);

        return {
            importedBy: inGameName,
            path: path,
            importDate: Date.now(),
            data: this.sanitized,
        }
    }

    /**
     * Military import.
     * @param {string} player Player name.
     * @param {object} data Data
     */
    military(player, data) {
        let mongoose = require('mongoose').connection;
        let readyData = this.sanitize(data);
        readyData = this.formatData(readyData);

        mongoose.models.members.update(
            { inGameName: player },
            {
                $push: { military: readyData },
            },
            function (err, result) {
                if (err) {
                    throw err;
                }

                console.log('Updated: ', result);
            }
        );
    }

    cities(player, data) {
        let db = require('mongoose').connection;
        let readyData = this.sanitize(data);
        readyData = this.formatData(readyData);

        db.models.members.update(
            { inGameName: player },
            {
                $push: { cities: readyData },
            },
            function (err, result) {
                if (err) {
                    throw err;
                }
            }
        );
    }

    empireScoreRank(player, data) {
        let db = require('mongoose').connection;

        let path = '/import/empire/score';

        let readyData = this.formatRankingData(player, path, data);

        db.models.ranking_imports.create(
            readyData,
            function (err, result) {
                if (err) {
                    throw err;
                }
            }
        );
    }

    allianceScoreRanking(player, data) {
        let db = require('mongoose').connection;
        let readyData = this.sanitize(data);
        readyData = this.formatData(readyData);

        db.models.world.update(
            { name: 'World 13' },
            {
                $push: { 'alliance.score': readyData },
            },
            function (err, result) {
                if (err) {
                    throw err;
                }

                console.log('Updated: ', result);
            }
        );
    }
    attackIncoming(player, data) {
        let db = require('mongoose').connection;
        let readyData = this.sanitize(data);
        readyData = this.formatData(readyData);

        db.models.allainces.update(
            { name: 'Black Sail Reapers' },
            {
                $push: { incoming: readyData },
            },
            function (err, result) {
                if (err) {
                    throw err;
                }

                console.log('Updated: ', result);
            }
        );
    }

    attackOutgoing(player, data) {
        let db = require('mongoose').connection;
        let readyData = this.sanitize(data);
        readyData = this.formatData(readyData);

        db.models.allainces.update(
            { name: 'Black Sail Reapers' },
            {
                $push: { outgoing: readyData },
            },
            function (err, result) {
                if (err) {
                    throw err;
                }

                console.log('Updated: ', result);
            }
        );
    }
}

module.exports = Import;

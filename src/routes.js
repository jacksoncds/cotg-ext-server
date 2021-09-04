const authentication = require('./authentication');
const playerCities = require('./imports/playerCities');
const playerMilitary = require('./imports/playerMilitary');
const empireScore = require('./imports/empireScore');

const Importer = new require('./import.js');

function onError(err) {
    console.log(err);
}

function onSucess(data, client) {
    console.log(client);
}

module.exports = function (path, client, data, options) {
    let importer = new Importer();

    switch (path) {
        case 'import/player/military':
            try {
                client.connection.send(`Imported millitary for ${client.member.inGameName}.`);
                importer.military(client.member.inGameName, data);
            } catch (error) {
                console.log(error);
            }
            break;
        case 'import/city':
            try {
                importer.cities(client.member.inGameName, data);
                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/alliance/ranking':
            importer.allianceScoreRanking(client.member.inGameName, data);

            onSucess(
                `Imported cities for ${client.member.inGameName}.`,
                client);
            break;
        case 'import/alliance/blessing':
            try {
                importer.allianceBlessing(client.member.inGameName, data);

            onSucess(
                `Imported cities for ${client.member.inGameName}.`,
                client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/alliance/donations':
            try {
                importer.allianceDonations(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/alliance/loyalty':
            try {
                importer.allianceLoyalty(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/rankings/allaince/score':
            try {
                importer.allianceScore(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/rankings/allaince/military':
            try {
                importer.allainceMilitary(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/rankings/allaince/temples':
            try {
                importer.allainceTemples(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/rankings/allaince/rep':
            try {
                importer.allainceRep(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/report':
            try {
                importer.report(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/attack/imcoming':
            try {
                importer.attackIncoming(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/attack/outgoing':
            try {
                importer.attackOutgoing(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case '/import/empire/score':
            try {
                importer.empireScoreRank(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        case 'import/rankings/player/military':
            try {
                importer.playerRankingMilitary(client.member.inGameName, data);

                onSucess(
                    `Imported cities for ${client.member.inGameName}.`,
                    client);
            } catch (error) {
                onError(error);
            }
            break;
        default:
            break;
    }
};
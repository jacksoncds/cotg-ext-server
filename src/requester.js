const schedule = require('node-schedule');
const requests = require('./requests');

const TIME_TABLE = {
    playerMilitary: '*/1 * * * *',
    playerCity: '*/1 * * * *',
    allianceScore: '*/1 * * * *',
    allianceRankingBlessing: '*/1 * * * *',
    allianceDonations: '*/1 * * * *',
    allianceMilitary: '*/1 * * * *',
    allianceRankingTemples: '*/1 * * * *',
    allianceReputation: '*/1 * * * *',
    attackIncoming: '*/1 * * * *',
    attackOutgoing: '*/1 * * * *',
    empireScore: '*/1 * * * *',
    empireMilitary: '*/1 * * * *',
    empireOffensive: '*/1 * * * *',
    empireDefensive: '*/1 * * * *',
    combatReputation: '*/1 * * * *',
    combatOffensiveReputation: '*/1 * * * *',
    combatDefensiveReputation: '*/1 * * * *',
    combatUnitKills: '*/1 * * * *',
    combatPlundered: '*/1 * * * *',
    raidingCaverns: '*/1 * * * *',
    raidingBosses: '*/1 * * * *',
};

let importedTime = {
    playerMilitary: '*/1 * * * *',
    playerCity: '2 * * * *',
    allianceRankingScore: '3 * * * *',
    allianceRankingBlessing: '4 * * * *',
    allianceDonations: '5 * * * *',
    allianceLoyal: '6 * * * *',
    allianceRankingMilitary: '7 * * * *',
    allianceRankingTemples: '8 * * * *',
    allianceRankingRep: '9 * * * *',
    attackIncoming: '*/5 * * * *',
    attackOutgoing: '10 * * * *',
    empireScore: '11 * * * *',
    raidingCaverns: '11 * * * *',
    raidingBosses: '11 * * * *',
    playerRankingMilitary: '12 * * * *',
}

function ranking() {
    let empireScoreJob = schedule.scheduleJob(
        TIME_TABLE.empireScore, requests.empireScore);

    let empireMilitaryJob = schedule.scheduleJob(
        TIME_TABLE.empireMilitary, requests.empireMilitary);

    let empireOffensiveJob = schedule.scheduleJob(
        TIME_TABLE.empireOffensive, requests.empireOffensive);

    let empireDefensiveJob = schedule.scheduleJob(
        TIME_TABLE.empireDefensive, requests.empireDefensive);

    let allianceScoreJob = schedule.scheduleJob(
        TIME_TABLE.allianceScore, requests.allianceScore);

    let allianceReputationJob = schedule.scheduleJob(
        TIME_TABLE.allianceReputation, requests.allianceReputation);

    let allianceMilitaryJob = schedule.scheduleJob(
        TIME_TABLE.allianceMilitary, requests.allianceMilitary);

    let combatReputationJob = schedule.scheduleJob(
        TIME_TABLE.combatReputation, requests.combatReputation);

    let combatOffensiveReputationJob = schedule.scheduleJob(
        TIME_TABLE.combatOffensiveReputation, requests.combatOffensiveReputation);

    let combatDefensiveReputationJob = schedule.scheduleJob(
        TIME_TABLE.combatDefensiveReputation, requests.combatDefensiveReputation);

    let combatUnitKillsJob = schedule.scheduleJob(
        TIME_TABLE.combatUnitKills, requests.combatUnitKills);

    let combatPlunderedJob = schedule.scheduleJob(
        TIME_TABLE.combatPlundered, requests.combatPlundered);

    let raidingCavernsJob = schedule.scheduleJob(
        TIME_TABLE.raidingCaverns, requests.raidingCaverns);

    let raidingBossesJob = schedule.scheduleJob(
        TIME_TABLE.raidingBosses, requests.raidingBosses);
}

function playerData(){
    let playerMilitaryJob = schedule.scheduleJob(
        TIME_TABLE.playerMilitary, requests.playerMilitary);

    let playerCityJob = schedule.scheduleJob(
        TIME_TABLE.playerCity, requests.playerCity);
}

function allianceData(){
    let allianceDonationsJob = schedule.scheduleJob(
        TIME_TABLE.allianceDonations, requests.allianceDonations);

    let attackIncomingJob = schedule.scheduleJob(
        TIME_TABLE.attackIncoming, requests.attackIncoming);

    let attackOutgoingJob = schedule.scheduleJob(
        TIME_TABLE.attackOutgoing, requests.attackOutgoing);
}

function start(wss) {
    requests.setWss(wss);

    playerData();
    ranking();
    allianceData();
};

module.exports = start;
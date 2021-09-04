const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const role = require('./roles');
const permission = require('./permissions');

var military = new Schema({
    c: { type: String, default: ""},
    l: { type: String, default: ""},
    wall_level: { type: Number, default: 0},
    spot_time: { type: String, default: ""},
    Guard_home: { type: Number, default: 0},
    Ballista_home: { type: Number, default: 0},
    Ranger_home: { type: Number, default: 0},
    Triari_home: { type: Number, default: 0},
    Priestess_home: { type: Number, default: 0},
    Vanquisher_home: { type: Number, default: 0},
    Sorcerer_home: { type: Number, default: 0},
    Scout_home: { type: Number, default: 0},
    Arbalist_home: { type: Number, default: 0},
    Praetor_home: { type: Number, default: 0},
    Horseman_home: { type: Number, default: 0},
    Druid_home: { type: Number, default: 0},
    Ram_home: { type: Number, default: 0},
    Scorpion_home: { type: Number, default: 0},
    Galley_home: { type: Number, default: 0},
    Stinger_home: { type: Number, default: 0},
    Warship_home: { type: Number, default: 0},
    Senator_home: { type: Number, default: 0},
    Guard_total: { type: Number, default: 0},
    Ballista_total: { type: Number, default: 0},
    Ranger_total: { type: Number, default: 0},
    Triari_total: { type: Number, default: 0},
    Priestess_total: { type: Number, default: 0},
    Vanquisher_total: { type: Number, default: 0},
    Sorcerer_total: { type: Number, default: 0},
    Scout_total: { type: Number, default: 0},
    Arbalist_total: { type: Number, default: 0},
    Praetor_total: { type: Number, default: 0},
    Horseman_total: { type: Number, default: 0},
    Druid_total: { type: Number, default: 0},
    Ram_total: { type: Number, default: 0},
    Scorpion_total: { type: Number, default: 0},
    Galley_total: { type: Number, default: 0},
    Stinger_total: { type: Number, default: 0},
    Warship_total: { type: Number, default: 0},
    Senator_total: { type: Number, default: 0},
    total_home: { type: Number, default: 0},
    total_troops: { type: Number, default: 0}
});

var city = new Schema({
    c: { type: String, default: ""},
    l: { type: String, default: ""},
    wall_level: { type: Number, default: 0},
    spot_time: { type: String, default: ""},
    Guard_home: { type: Number, default: 0},
    Ballista_home: { type: Number, default: 0},
    Ranger_home: { type: Number, default: 0},
    Triari_home: { type: Number, default: 0},
    Priestess_home: { type: Number, default: 0},
    Vanquisher_home: { type: Number, default: 0},
    Sorcerer_home: { type: Number, default: 0},
    Scout_home: { type: Number, default: 0},
    Arbalist_home: { type: Number, default: 0},
    Praetor_home: { type: Number, default: 0},
    Horseman_home: { type: Number, default: 0},
    Druid_home: { type: Number, default: 0},
    Ram_home: { type: Number, default: 0},
    Scorpion_home: { type: Number, default: 0},
    Galley_home: { type: Number, default: 0},
    Stinger_home: { type: Number, default: 0},
    Warship_home: { type: Number, default: 0},
    Senator_home: { type: Number, default: 0},
    Guard_total: { type: Number, default: 0},
    Ballista_total: { type: Number, default: 0},
    Ranger_total: { type: Number, default: 0},
    Triari_total: { type: Number, default: 0},
    Priestess_total: { type: Number, default: 0},
    Vanquisher_total: { type: Number, default: 0},
    Sorcerer_total: { type: Number, default: 0},
    Scout_total: { type: Number, default: 0},
    Arbalist_total: { type: Number, default: 0},
    Praetor_total: { type: Number, default: 0},
    Horseman_total: { type: Number, default: 0},
    Druid_total: { type: Number, default: 0},
    Ram_total: { type: Number, default: 0},
    Scorpion_total: { type: Number, default: 0},
    Galley_total: { type: Number, default: 0},
    Stinger_total: { type: Number, default: 0},
    Warship_total: { type: Number, default: 0},
    Senator_total: { type: Number, default: 0},
    total_home: { type: Number, default: 0},
    total_troops: { type: Number, default: 0}
});

let agenda = require('./agenda');

let militaryImport = new Schema({
    data: Array,
    importDate: Date,
});

let cityImport = new Schema({
    data: Array,
    importDate: Date,
});

var member = new mongoose.Schema({
    provider: String,
    providerId: String,
    inGameName: String,
    extensionToken: String,
    gender: String,
    email: String,
    inviteId: String,
    joinOnDate: Date,
    agenda: [agenda],
    military: [militaryImport],
    cities: [cityImport],
    roles: [{type: mongoose.SchemaTypes.ObjectId, ref: 'roles'}],
    permissions: [{type: mongoose.SchemaTypes.ObjectId, ref: 'permissions'}],
});

module.exports = member;

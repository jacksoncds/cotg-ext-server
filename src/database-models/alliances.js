const mongoose = require('mongoose');

module.exports = mongoose.Schema({
    name: String,
    abbreviation: String,
    numberOfPlayers: Number,
    incoming: [],
    outgoing: [],
    enlightment: [],
    donation: [],
    faith: [],
});
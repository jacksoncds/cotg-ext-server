const mongoose = require("mongoose");

let rankingImport = mongoose.Schema({
    importedBy: String,
    path: String,
    importDate: Date,
    data: []
});

module.exports = rankingImport;
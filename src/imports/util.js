module.exports = {
    sanitize(data) {
        let s = require('mongo-sanitize');
        return s(data);
    },

    formatData(data) {
        return {
            importDate: new Date(),
            data: JSON.parse(data),
        }
    },

    formatRankingData(inGameName, path, data){
        return {
            importedBy: inGameName,
            path: path,
            importDate: Date.now(),
            data: data,
        }
    },
}
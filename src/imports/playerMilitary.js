const router = require('./../router');

/**
* Military import.
* @param {string} player Player name.
* @param {object} data Data
*/
function military(player, token, data) {
   let mongoose = require('mongoose').connection;

    readyData = {
        importDate: new Date(),
        data: data,
    }

   mongoose.models.members.updateOne(
       {inGameName: player, extensionToken: token},
       {
           $push: {military: readyData},
       },
       function(err, result) {
           if (err) {
               throw err;
           }
       }
   );
}


router.bind('/import/player/military', function(req, client){
    military(req.inGameName, req.token, req.data);
});

module.exports = {
    importPlayerMilitary: military,
}
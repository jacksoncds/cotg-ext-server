const router = require('./../router');

function cities(player, token, data) {
    let db = require('mongoose').connection;

    readyData = {
        importDate: new Date(),
        data: data,
    }

    db.models.members.updateOne(
        {inGameName: player, extensionToken: token},
        {
            $push: {cities: readyData},
        },
        function(err, result) {
            if (err) {
                throw err;
            }
        }
    );
}


router.bind('/import/player/cities', function(req, client){
    cities(req.inGameName, req.token, req.data);
});

module.exports = {

}
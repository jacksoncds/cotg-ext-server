const mongoose = require("mongoose");

let reputationRank = mongoose.Schema({
    rank: Number,
    name: String,
    alliance: String,
    reputation: Number,
});

let world = mongoose.Schema({
    alliance: {
        score: [
            {
                importDate: Date,
                data: [{
                    rank: Number,
                    name: String,
                    score: Number,
                    numberOfPlayer: Number,
                    cities: Number,
                }],
            }
        ],
        reputation: [
            {
                importDate: Date,
                data: [
                    {
                        rank: Number,
                        name: String,
                        reputation: Number,
                    }
                ]
            }
        ],
        military: [
            {
                importDate: Date,
                data: [
                    {
                        rank: Number,
                        name: String,
                        military: Number,
                    }
                ]
            }
        ]
    },
    combat: {
        reputation: [
            {
                importDate: Date,
                data: [reputationRank],
            }
        ],
        offensiveRep: [
            {
                importDate: Date,
                data: [reputationRank],
            }
        ],
        defensiveRep: [
            {
                importDate: Date,
                data: [reputationRank],
            }
        ],
        unitKills: [
            {
                importDate: Date,
                data: [
                    {
                        rank: Number,
                        name: String,
                        alliance: String,
                        unitKilled: Number,
                    }
                ]
            }
        ],
        plundered: [
            {
                importDate: Date,
                data: [
                    {
                        rank: Number,
                        name: String,
                        alliance: String,
                        plundered: Number,
                    }
                ]
            }
        ],
    },
    raiding: {
        caverns: [
            {
                importDate: Date,
                data: [
                    {
                        rank: Number,
                        name: String,
                        alliance: String,
                        plundered: Number,
                    }
                ]
            }
        ],
        bosses: [
            {
                importDate: Date,
                data: [
                    {
                        rank: Number,
                        name: String,
                        alliance: String,
                        plundered: Number,
                    }
                ]
            }
        ],
    },
    timezone: String,
    start: Date,
    name: String,
});

module.exports = world;
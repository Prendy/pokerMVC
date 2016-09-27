var mongoose = require('mongoose');
var Player = require('../models/player')

var GameSchema = new mongoose.Schema({
	players: [Player.schema], //array of players
	flop: {type: Array}, // array of cards
	round: {type: Number, max: 4, min: 1}, // 4 is game OVER
	pot: {type: Number}

});

module.exports = mongoose.model('Game', GameSchema);

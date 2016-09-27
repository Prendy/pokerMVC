var Game = require('../models/game');
// var Player = require('./players');
var Player = require('../models/player');

function initGame(req, res) {	
	var game = {
		Players: [],
		Flop: [],
		Round: 1,
		Pot: 0
	};

	
	Game.create(game, function(err, result) {
		if (err) console.log(err);
		addPlayer(function(game) {
			console.log(game);
			return res.status(200).json(game);
		});
	})

}

function addPlayer(callback) {

	Game.findOne({}, function(err, game) {
		var newPlayer = new Player({
			name: "Farrakh",
			hand: [],
			round1Choice: "",
			round2Choice: "",
			round3Choice: "",
			balance: 0
		});

		newPlayer.save(function(err, player) {
			if (err) console.log(err);
			game.players.push(player);
			game.save(function(err, newGame) {
				return callback(newGame);
			});
		});
	})
}



module.exports = {
	index : initGame
};
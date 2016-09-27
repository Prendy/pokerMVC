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
	var name = req.body.name;
	
	Game.create(game, function(err, result) {
		console.log(name);
		if (err) console.log(err);
		addPlayer(function(game) {
			return res.status(200).json(game);
		}, name);
	})

}

function addPlayer(callback, name) {

	Game.findOne({}, function(err, game) {
		console.log(name);
		var newPlayer = new Player({
			name: name,
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
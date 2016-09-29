var Game = require('../models/game');
// var Player = require('./players');
var Player = require('../models/player');

function initGame(req, res) {
	var game = {
		players: [],
		flop: [],
		round: 1,
		pot: 0
	};

	// var isComputer = req.body.isComputer;
	// var name = req.body.player;

	// var isComputer1 = req.body.isComputer1;
	// var name1 = req.body.player1;

	// var player = req.body.player2;
	// var player = req.body.player3;
	// var player = req.body.player4;
	// console.log(req.body.name1);

	//DELETED [0]

	var player1 = {
		name: req.body[0].name,
		isComputer: req.body[0].isComputer
	};

	var player2 = {
		name: req.body[1].name1,
		isComputer: req.body[1].isComputer1
	}

	Game.create(game, function(err, newGame) {
		if (err) console.log(err);
		Player.create(player1, function(err, newPlayer1) {
			if (err) console.log(err);
			newGame.players.push(newPlayer1);
			Player.create(player2, function(err, newPlayer2) {
				if (err) console.log(err);
				newGame.players.push(newPlayer2);
				newGame.save(function(err, savedGame) {
					if (err) console.log(err);
					return res.status(200).json(savedGame);
				})
			})
		})
	})

	// Game.create(game, function(err, result) {
	// 	console.log(name);
	// 	if (err) console.log(err);

	// 	// adds the human player

	// 	//adds the computer player
	// 	addPlayer(function(game) {
	// 		addPlayer(function(game) {
	// 			(function(){
	// 				return res.status(200).json(game);
	// 			})();
	// 		}, name, isComputer);
	// 	}, name1, isComputer1);

	// })

}

function addPlayer(callback, name, isComputer) {

	Game.findOne({}, function(err, game) {
		console.log(name);
		var newPlayer = new Player({
			name: name,
			hand: [],
			round1Choice: "",
			round2Choice: "",
			round3Choice: "",
			balance: 0,
			isComputer: isComputer
		});

		newPlayer.save(function(err, player) {
			if (err) console.log(err);
			game.players.push(player);
			game.save(function(err, newGame) {
				return callback(newGame);
			});
		});
	});
}

// function returnWinner(req, res) {
//
// }
//
// function conputerDecision(req, res) {
//
// }
//
// function winner() {
// 	var hand1Score = evaluateHand();
// }
//
//
// function evaluateHand(hand, flop) {

// }



module.exports = {
	index : initGame,
	returnWinner : returnWinner,
	computerDecision : computerDecision
};

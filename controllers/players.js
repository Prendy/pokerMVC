var Player = require('../models/player');
var Game = require('../models/game');

function addPlayer() {
	var player = {
		name: "Farrakh",
		hand: [],
		round1Choice: "",
		round2Choice: "",
		round3Choice: "",
		balance: 0
	};
	
	Player.create(player, function(err, result) {
		if (err) console.log(err);
	});

	return player;
}
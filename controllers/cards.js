var shuffleArray = require('shuffle-array')
var Card = require('../models/card');
var Player = require('../models/player');
var Game = require('../models/game');
var deck = [];
var numberOfPlayers = 2;

function cardsIndex(req, res){
	Card.find({}, function(err, cards){
		if (err) console.log(err);
		res.status(200).json(cards);
	});

};

function dealCards(req, res) {
	Card.find({}, function(err, cards){

		

		deck = shuffleArray(cards);

		// empty user and computer arrays - this will hold their cards
		var usersCards = [];
		var computersCards = [];
		var flop = [];

		// deal the human (user) and computer 2 cards
		dealCard(usersCards);
		dealCard(computersCards);
		dealCard(usersCards);
		dealCard(computersCards);

		// deals the first three cards to the flop
		dealCard(flop);
		dealCard(flop);
		dealCard(flop);

		// deals the fourth card in the flop
		dealCard(flop);

		// deals the fifth card in the flop
		dealCard(flop);

		// computersCards = [
		// 	{ Suit: 'Hearts', Number: 12 },
  // 			{ Suit: 'Banter', Number: 11 }
  // 			];
		Game.findOne({}, function(err, game){
			var userId = game.players[0]._id;
			var computerId = game.players[1]._id;

			Player.findByIdAndUpdate(userId, {$push: { hand: {$each : usersCards}}}, {upsert: true}, function(err, user) {

				Player.findByIdAndUpdate(computerId, {$push: { hand: {$each : computersCards}}}, {upsert: true}, function(err, computer) {

					game.update({$push: {
						players: {$each: [user, computer]}
					}}, {new: true}, function(err, updatedGame) {
						console.log("getting here");
						return res.status(200).json(updatedGame);
					})
				})
			})
		});


		// an object of the two players to return as JSON on screen
		var players = { 
			"users" : usersCards,
			"computer" : computersCards,
			"flop" : flop,
			"remainingDeck" : deck
		}

		//console.log(deck.length);
		
	});
}

function dealCard(thePlayer) {

	var card = deck[0];

	thePlayer.push(card);

    deck = deck.slice(1); 
	//console.log("The card dealt was " + card);
	return card;
}





module.exports = {
	index : cardsIndex,
	// shuffle : cardsShuffle,
	deal : dealCards
};

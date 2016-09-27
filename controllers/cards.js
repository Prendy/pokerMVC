var shuffleArray = require('shuffle-array')
var Card = require('../models/card');
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
		var user = [];
		var computer = [];
		var flop = [];

		// deal the human (user) and computer 2 cards
		dealCard(user);
		dealCard(computer);
		dealCard(user);
		dealCard(computer);

		// deals the first three cards to the flop
		dealCard(flop);
		dealCard(flop);
		dealCard(flop);

		// deals the fourth card in the flop
		dealCard(flop);

		// deals the fifth card in the flop
		dealCard(flop);


		// an object of the two players to return as JSON on screen
		var players = { 
			"user" : user,
			"computer" : computer,
			"flop" : flop,
			"remainingDeck" : deck
		}

		console.log(deck.length);
		res.status(200).json(players);
	});
}

function dealCard(thePlayer) {

	var card = deck[0];

	thePlayer.push(card);

    deck = deck.slice(1); 
	console.log("The card dealt was " + card);
	return card;
}







module.exports = {
	index : cardsIndex,
	// shuffle : cardsShuffle,
	deal : dealCards
};

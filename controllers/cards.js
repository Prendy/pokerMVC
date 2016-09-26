var shuffleArray = require('shuffle-array')
var Card = require('../models/card');

function cardsIndex(req, res){
	Card.find({}, function(err, cards){
		if (err) console.log(err);
		res.status(200).json(cards);
	});

};

function cardsShuffle(req, res){
	Card.find({}, function(err, cards){
		if (err) console.log(err);
		var shuffledCards = shuffleArray(cards);
		res.status(200).json(shuffledCards);
	});

};

module.exports = {
	index : cardsIndex,
	shuffle : cardsShuffle
};

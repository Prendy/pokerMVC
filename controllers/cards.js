var Card = require('../models/card');

function cardsIndex(req, res){
	Card.find({}, function(err, cards){
		if (err) console.log(err);
		res.status(200).json(cards);
	});

}

module.exports = {
	index : cardsIndex
};

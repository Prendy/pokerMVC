var mongoose = require('mongoose');
var Card = require('../models/card');

var PlayerSchema = new mongoose.Schema({
	name: {type: String}, // Player details
	hand: [Card.schema], // array of cards
	round1Choice: {type: String}, // round 1 choice
	round2Choice: {type: String}, // round 2 choice
	round3Choice: {type: String}, // round 3 choice
	balance: {type: Number}, // Players remaining chips
	isComputer: {type: Boolean}

});

module.exports = mongoose.model('Player', PlayerSchema);

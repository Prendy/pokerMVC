var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
	Suit: {type: String, required: true},
	Number:{type: Number, max: 14, min:2}
});

module.exports = mongoose.model('Card', CardSchema);

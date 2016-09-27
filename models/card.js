var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
	suit: {type: String, required: true},
	number: {type: Number, max: 14, min:2}
});

module.exports = mongoose.model('Card', CardSchema);

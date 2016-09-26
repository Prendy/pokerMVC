var express = require('express');
var router = express.Router();

var cardsController = require('../controllers/cards');



router.route('/cards')
	.get(cardsController.index);

module.exports = router;

// Indes
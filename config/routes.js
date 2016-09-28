var express = require('express');
var router = express.Router();

var cardsController = require('../controllers/cards');
var gamesController = require('../controllers/games');



router.route('/cards')
	.get(cardsController.index);

router.route('/deal')
	.get(cardsController.deal);

router.route('/game')
	.get(gamesController.index)
	.post(gamesController.index);

module.exports = router;

// Index
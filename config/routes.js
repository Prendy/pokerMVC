var express = require('express');
var router = express.Router();

var cardsController = require('../controllers/cards');
var gamesController = require('../controllers/games');



router.route('/cards')
	.get(cardsController.index);

router.route('/deal')
	.get(cardsController.deal);

router.route('/game')
	.post(gamesController.index);

router.route('/end')
	.get(cardsController.end);

router.route('/winner')
	.get(gamesController.returnWinner);

router.route('/computerDecision')
	.get(gamesController.computerDecision);

module.exports = router;

// Index

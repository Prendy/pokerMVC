var express = require('express');
var router = express.Router();

var cardsController = require('../controllers/cards');


router.route('/cards')
	.get(cardsController.index);

router.route('/deal')
	.get(cardsController.deal);

module.exports = router;

// Indes
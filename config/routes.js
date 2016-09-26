var express = require('express');
var router = express.Router();

var cardsController = require('../controllers/cards');



router.route('/cards')
	.get(cardsController.index);

router.route('/shuffle')
	.get(cardsController.shuffle);



module.exports = router;

// Indes
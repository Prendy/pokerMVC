var shuffleArray = require('shuffle-array')
var Card = require('../models/card');
var Player = require('../models/player');
var Game = require('../models/game');
var deck = [];
var numberOfPlayers = 2;
var gameId = "";
var userId = "";
var computerId = "";

function cardsIndex(req, res) {
    Card.find({}, function(err, cards) {
        if (err) console.log(err);
        res.status(200).json(cards);
    });

};

function dealCards(req, res) {
    Card.find({}, function(err, cards) {



        deck = shuffleArray(cards);

        // empty user and computer arrays - this will hold their cards
        var usersCards = [];
        var computersCards = [];
        var flop = [];

        // deal the human (user) and computer 2 cards
        dealCard(usersCards);
        dealCard(computersCards);
        dealCard(usersCards);
        dealCard(computersCards);

        // deals the first three cards to the flop
        dealCard(flop);
        dealCard(flop);
        dealCard(flop);

        // deals the fourth card in the flop
        dealCard(flop);

        // deals the fifth card in the flop
        dealCard(flop);

        // computersCards = [
        // 	{ Suit: 'Hearts', Number: 12 },
        // 			{ Suit: 'Banter', Number: 11 }
        // 			];
        Game.findOne({}, function(err, game) {
            userId = game.players[0];
            computerId = game.players[1];
            game.flop.addToSet(flop);
            Player.findById(userId, function(err, user) {
                user.hand.addToSet(usersCards[0], usersCards[1]);
                return user.save(function(err, savedUser) {
                    Player.findById(computerId, function(err, computer) {
                        computer.hand.addToSet(computersCards[0], computersCards[1]);
                        return computer.save(function(err, savedComputer) {
                            game.players.addToSet(userId, computerId);
                            return game.save(function(err, savedGame) {
                                var data = {
                                  "user": savedUser,
                                  "computer": savedComputer,
                                  "flop": flop,
                                  "savedGame": savedGame
                                }
                                return res.status(200).json(data);
                            });
                        });
                    });
                });
            });
        });

        // {$push: {
        // 						//players: {$each: [user, computer]}
        // 					}}
        // an object of the two players to return as JSON on screen
        var players = {
            "users": usersCards,
            "computer": computersCards,
            "flop": flop,
            "remainingDeck": deck
        }

        //console.log(deck.length);

    });
}

function dealCard(thePlayer) {

    var card = deck[0];

    thePlayer.push(card);

    deck = deck.slice(1);
    //console.log("The card dealt was " + card);
    return card;
}

function endGame(req, res) {

    // findByIdAndRemove({ _id: })


    Game.remove({}, function(err) {
        if (err) console.log(err);
        Player.remove({}, function(err) {
            if (err) console.log(err);
            console.log("all gone");
            res.status(200).json({
                message: "Game Over"
            })
        })
    })

    // Player.find({}, function(err, players){
    // 	players.forEach(function() {

    // 	}
    // });


}




module.exports = {
    index: cardsIndex,
    // shuffle : cardsShuffle,
    deal: dealCards,
    end: endGame

};

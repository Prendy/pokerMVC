

var userCards = [
    {Suit: "Hearts", Number: 2},
    {Suit: "Hearts", Number: 3}
    ];
var flop = [
    {Suit: "Hearts", Number: 4},
    {Suit: "Hearts", Number: 5},
    {Suit: "Hearts", Number: 6},
    {Suit: "Hearts", Number: 13},
    {Suit: "Diamons", Number: 13}
    ];


var score = 0;

evaluateHand(userCards, flop);


function evaluateHand (userCards, flop) {
    var allCards = userCards.concat(flop);

    score += highCard(allCards);


    console.log(score);

}

function highCard(allCards) {
    var scoreHighCard = 0;

    for (var i = 0; i < allCards.length; i++) {
        var cardNumber = allCards[i].Number;

        if (cardNumber > 10) {
            scoreHighCard += 1;
        } else scoreHighCard += 0;
    }
}

function singlePair(allCards) {
    // return 10 if they have a pair.
    // if they had a pair and 2 high cards, score would be 12
}

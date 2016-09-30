
//
// var userCards = [
//     {Suit: "Hearts", Number: 2},
//     {Suit: "Hearts", Number: 3}
//     ];
// var flop = [
//     {Suit: "Hearts", Number: 4},
//     {Suit: "Hearts", Number: 5},
//     {Suit: "Hearts", Number: 6},
//     {Suit: "Hearts", Number: 13},
//     {Suit: "Diamons", Number: 13}
//     ];


var score = 0;

winner();

function winner() {

	var hand1 = [
	    {Suit: "Hearts", Number: 6},
	    {Suit: "Hearts", Number: 8}
	    ];
	var hand2 = [
	    {Suit: "Hearts", Number: 3},
	    {Suit: "Hearts", Number: 3}
	    ];
	var flop = [
	    {Suit: "Hearts", Number: 3},
	    {Suit: "Hearts", Number: 5},
	    {Suit: "Hearts", Number: 6},
	    {Suit: "Hearts", Number: 13},
	    {Suit: "Diamons", Number: 13}
	    ];



    var hand1Score = evaluateHand(hand1, flop);
    var hand2Score = evaluateHand(hand2, flop);


    if (hand1Score > hand2Score) {
        return "User";
    } else if (hand1Score < hand2Score) {
        return "Computer";
    } else return "Draw";

}


function evaluateHand(hand, flop) {
    var handScore = 0;


    var allCards = hand.concat(flop);


    handScore += highCard(allCards);
    handScore += findPair(allCards)*100;
	handScore += findThree(allCards)*1000;

	console.log("Score is : " + handScore);
    return handScore;
}

function highCard(allCards) {
    // var highCardScore = 0;
    var i = 0;
    while (i < allCards.length) {
        switch (allCards[i].Number) {
            case 14:
                return 14;
            case 13:
                return 13;
            case 12:
                return 12;
            case 11:
                return 11;
            default:
                // console.log("Not a high card");
                return 0;
        }
        i++;

    }
    return 0;
}

function findPair(allCards) {
    var pair = 0;

    // for (var i = 0; i < allCards.length - 1; i++) {
    //     for (var j = i; j < allCards.length - 1; j++) {
    //         func([this[i], this[j+1]]);
    //     }
    // }

    var allCardsArray = [];
    for (var i = 0; i < allCards.length; i++) {
        allCardsArray.push(allCards[i].Number);
    }

    allCardsArray.sort(sortNumber);

    // console.log(allCardsArray);

	var results = [];
	for (var i = 0; i < allCardsArray.length - 1; i++) {
	    if (allCardsArray[i + 1] == allCardsArray[i]) {
	        results.push(allCardsArray[i]);
			console.log("We have a pair");
    	}
	}

	//console.log(results);
}

function findThree(allCards) {

	console.log("Im here");

	var allCardsArray = [];
	for (var i = 0; i < allCards.length; i++) {
		allCardsArray.push(allCards[i].Number);
	}

	allCardsArray.sort(sortNumber);

	// console.log(allCardsArray);

	var threeResults = [];
	for (var i = 0; i < allCardsArray.length - 1; i++) {
	    if (allCardsArray[i + 1] == allCardsArray[i] && allCardsArray[i + 2] == allCardsArray[i]) {
	        threeResults.push(allCardsArray[i]);
    	}
	}
    console.log(threeResults);

}

function sortNumber(a,b) {
    return a - b;
}

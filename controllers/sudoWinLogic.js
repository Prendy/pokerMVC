function calculateFirstRoundScore(playersCards, flop, roundNumber){
	var sevenCards = []

	for each card in playersCards
		add it to sevenCards

	for each card in flop
		add it to sevenCards

	sevenCards = [14H, 6C, 3H, 3C, 4H, 12H, 9H]

	evaluateHand(sevenCards);


};

function evaluateHand(sevenCards){
	// if array contains 2 of the same value
	// 	then = they have a pair

	// if array contain 3 of the same value
	// 	then = they have three of a kind


	// royal flush
	if array contains A K Q J 10 of the same suit
		then = royal flush (hand has a score of 10)

	// straight flush and straight
	if array contains 5 consecutive cards 
		if they are all of the same suit
			then = straight flush (score of 9)
		else
			then = straight (score of 5)

	// four of a kind
	if array contains 4 cards with the same value
		then = four of a kind (score of 8)

	// full house and 3 of a kind
	if array contains 3 cards with the same rank value
		if array also contains 2 DIFFERENT cards of the same value
			then = full house (score of 7)
		else
			then = three of a kind (score of 4)

	// flush
	if array contains 5 cards of the same suit
		then flush (score of 6)

	// two pair
	if array contains 2 sets of 2 cards with the same value
		then two pair (score of 3)

	// pair
	if array contains 2 cards with the same value
		then pair (score of 2)

	// high card
	if array contains a high card 
		then high card (score of 1)

	if newScore > than oldScore then change the value


};

function winner(){


};
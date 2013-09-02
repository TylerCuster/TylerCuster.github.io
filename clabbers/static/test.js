function boardSpecialsCheck() {
	for (var i = 0; i < boardSpecials.length; i++) {
		if (boardSpecials[i].length != BOARD_WIDTH)
			return false;
	}
	if (boardSpecials.length != BOARD_HEIGHT)
		return false;
	return true;
};

function isInlineTests() {
	var testBoard = Board.create(5, 5);
	return (testBoard.isInline([[1,2], [1,3], [1, 4]]) == true) &&
			(testBoard.isInline([[0, 2], [1, 2], [2, 2]]) == true) &&
			(testBoard.isInline([[0, 3], [0, 4], [0, 1]]) == false) &&
			(testBoard.isInline([[0, 1], [1, 2]]) == false) &&
			(testBoard.isInline([[0, 1], [0, 2], [0, 3], [0, 0]]) == false) &&
			(testBoard.isInline([[0, 0], [1, 1]]) == false) &&
			(testBoard.isInline([[0, 1], [1, 0]]) == false);
}
function rowOrColumnTests() {
	var testBoard = Board.create(5, 5);
	return testBoard.rowOrColumn([[0, 2], [1, 2], [2, 2]]) == "row" &&
			(testBoard.rowOrColumn([[1, 2], [1, 3], [1, 4]]) == "column") &&
			(testBoard.rowOrColumn([[0, 3], [0, 4], [0, 1]]) == "column") &&
			(testBoard.rowOrColumn([[0, 1], [1, 2]]) == false) &&
			(testBoard.rowOrColumn([[0, 1], [1, 0]]) == false) &&
			(testBoard.rowOrColumn([[0, 1]]) == "single");
}
function isValidHandTests(testBag) {
	var testHand = Hand.create(testBag, {"B": 1, "A": 2, "Y": 1});
	return testHand.isValidHand("BABY") == false &&
		testHand.isValidHand("BAY") ==  true &&
		testHand.isValidHand("BY") == true &&
		testHand.isValidHand("XBY") == false &&
		testHand.isValidHand("BAAY") == true;
}
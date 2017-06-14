const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function turtle() {
	function filterPositive(move) {
		for(let i = 0; i < move.length; i++) {
			if(move[i] < 0) {
				return false;
			}
		}
		return true;
	}
	console.log(turtleMoves.filter(filterPositive));
}

function turtleSteps() {
	var newArray = turtleMoves.map(function(move) {
		return move[0] + move[1];
	})
	console.log(newArray);
}

function turtleStepsEach() {
	turtleMoves.forEach(function(move) {
		console.log(move[0] + move[1]);
	})
}

turtle();
turtleSteps();
turtleStepsEach();
var ROWS = 6;
var COLUMNS = 7;

var player = 1;

// initialize board
var board = new Array(ROWS);

for (var i = 0; i < ROWS; i++) {
	board[i] = new Array(COLUMNS);
}

var columnFill = new Array(COLUMNS);

var theWinner = 0;

reset();


//resets the board

function reset() {
	for (var i = 0; i < ROWS; i++) {
		for (var j = 0; j < COLUMNS; j++) {
			board[i][j] = 0;
			var loc = i + "-" + j;
			console.log(loc);
			document.getElementById(loc).style.backgroundColor = "white";
		}
	}

	for (var i = 0; i < columnFill.length; i++) {
		columnFill[i] = 0;
	}
	
	theWinner = 0;
}

function dropPiece(columnNum) {
	var x = columnNum;
	var y = columnFill[columnNum];
	
	if (y < ROWS && theWinner === 0) {
		board[y][x] = player;
		columnFill[columnNum]++;
		
		checkWin(x, y);
		
		var circleLocation = y + "-" + x;
		if (player == 1) {
			document.getElementById(circleLocation).style.backgroundColor = "yellow";
			player = 2;
		} else {
			document.getElementById(circleLocation).style.backgroundColor = "red";
			player = 1;
		}
		
		declareWinner(theWinner);
	}
}

//says who won

function declareWinner(p){
	if (p == 1) {
		alert("Yellow Wins!"); 
		console.log("yellow");
	} else if (p == 2) {
		alert("Red Wins!");
		console.log("red");
	}
}

//checks who won

function checkWin(x, y) {
	// horizontal check
	var horizontalMatch = 0;
	
	for (var i = 0; i < 4; i++) {
		var left = x - i;
		
		if (left < 0) {
			break;
		}
		
		if (board[y][left] == player) {
			horizontalMatch++;
		} else {
			break;
		}
	}

	for (i = 1; i < 4; i++) {
		var right = x + i;
		
		if (right >= COLUMNS) {
			break;
		}
		
		if (board[y][right] == player) {
			horizontalMatch++;
		} else {
			break;
		}
	}
	
	if (horizontalMatch >= 4) {
		theWinner = player;
	}
	
	// vertical check
	
	var verticalMatch = 0;
	
	for (i = 0; i < 4; i++) {
		var down = y - i;
		
		if (down < 0) {
			break;
		}
		
		if (board[down][x] == player) {
			verticalMatch++;
		} else {
			break;
		}
	}
	
	for (i = 1; i < 4; i++) {
		var up = y + i;
		
		if (up >= ROWS) {
			break;
		}
		
		if (board[up][x] == player) {
			verticalMatch++;
		} else {
			break;
		}
	}
	
	if (verticalMatch >= 4) {
		theWinner = player;
	}
	
	//diagonal checker
	
	var forwardDiagonalMatch = 0;
	
	for (i = 0; i < 4; i++) {
		var left = x - i;
		var down = y - i;
		
		if (left < 0 || down < 0) {
			break;
		}
		
		if (board[down][left] == player) {
			forwardDiagonalMatch++;
		} else {
			break;
		}
	}
	
	for (i = 1; i < 4; i++) {
		var right = x + i;
		var up = y + i;
		
		if (right >= COLUMNS || up >= ROWS) {
			break;
		}
		
		if (board[up][right] == player) {
			forwardDiagonalMatch++;
		} else {
			break;
		}
	}
	
	if (forwardDiagonalMatch >= 4) {
		theWinner = player;
	}
	
	var backwardDiagonalMatch = 0;
	
	for (i = 0; i < 4; i++) {
		var left = x - i;
		var up = y + i;
		
		if (left < 0 || up >= ROWS) {
			break;
		}
		
		if (board[up][left] == player) {
			backwardDiagonalMatch++;
		} else {
			break;
		}
	}
	
	for (i = 1; i < 4; i++) {
		var right = x + i;
		var down = y - i;
		
		if (right >= COLUMNS || down < 0) {
			break;
		}
		
		if (board[down][right] == player) {
			backwardDiagonalMatch++;
		} else {
			break;
		}
	}
	
	if (backwardDiagonalMatch >= 4) {
		theWinner = player;
	}
}
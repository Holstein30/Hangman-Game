// Initialized variables/booleans/arrays/etc.

running = false;
correct = false;
wins = 0;

// Array of guessable characters

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
				'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Array of potential words to guess

var gods = ['ZUES', 'POSEIDON', 'HADES', 'APOLLO', 'ATLAS', 'APHRODITE', 'ARTEMIS',
			'ODIN', 'THOR', 'LOKI', 'TYR', 'FREYA', 'HEIMDALL', 'OSIRIS', 'ISIS',
			'ANUBIS', 'RA', 'HORUS', 'THOTH', 'MUT'];


// Event to start game

document.body.addEventListener('keypress', start);

// Detect if enter key is pressed to start

function start () {
	var k = event.keyCode
	if (k === 13) {
		newGame();
	}
}

// Start new game and reset variables

function newGame () {
	if (running) return;
	running = true;
	characters = [];
	guessesLeft = 10;
	wrongGuess = [];
	main();
}

// Main function for game order and organization

function main () {
	pick();
	blanks();
	display();
	userGuess();
}

// Pick a random word from gods array

function pick () {
	// equation to generate random word from gods array
	answer = gods[Math.floor(Math.random() * gods.length)];
}

// Create blank spaces for each character in word

function blanks () {
	for (i = 0; i < answer.length; i++) {
		characters.push("__");
	}
	document.getElementById("start").innerHTML = "Choose a letter A-Z";
}

// Display info for user

function display () {
	document.getElementById("blanks").innerHTML = characters;
	document.getElementById("guessesLeft").innerHTML = 10;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("guessed").innerHTML = "__";
}

// Get guess from user

function userGuess () {
	// detect which key is pressed
	var k = event.key;
	// turn input into uppercase
	guess = k.toUpperCase(); 
	check();
}

// Check that user entered a valid letter

function check () {
	for (var i in alphabet) {
		letter = alphabet[i];
			if (letter === guess) {
				check2();
				break;
			}
			// else
			// 	console.log("Please choose a letter A-Z");
			// 	document.body.addEventListener('keypress', userGuess);
		}
	document.body.addEventListener('keypress', userGuess);

}

// Check if user input matches a letter in answer

function check2 () {
	for (var i = 0; i < answer.length; i++) {
		if (guess === answer[i]) {
			characters[i] = guess;
			correct = true;
			replace();
		} 
	} 
	if (correct === false){
		guessesLeft--;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		wrong();
	}

	correct = false;
}

// Replace matching letters

function replace () {
	// characters.join(" ");
	document.getElementById("blanks").innerHTML = characters.join(" ");
	win();
}

// Letters already guessed if wrong

function wrong () {
	wrongGuess.push(guess);
	document.getElementById("guessed").innerHTML = wrongGuess;
	gameOver();
}


// Determine if user wins

function win () {
	for (var i in characters) {
		var right = characters.join("");
	}
	if (right === answer) {
			wins++;
			document.getElementById("wins").innerHTML = wins;
			running = false;
			document.getElementById("guessesLeft").innerHTML = "YOU WIN!";
			document.getElementById("guessed").innerHTML = "Press ENTER to RESTART!";
			document.body.addEventListener('keypress', start);
		}
		else
			gameOver();
}

// Determine if the game is over or should continue

function gameOver () {
	if (guessesLeft === 0) {
		running = false;
		document.getElementById("guessesLeft").innerHTML = "YOU LOSE :(";
		document.getElementById("guessed").innerHTML = "Press ENTER to RESTART!";
		document.body.addEventListener('keypress', start);

	}
	else 
		document.body.addEventListener('keypress', userGuess);
}

// KNOWN BUGS

// Doesn't recognize if same letter is guessed twice
// Can keep entering guesses after game ends until enter is pressed
// Wins will keep going up if you keep hitting first letter of answer before hitting enter
// Commas are in between blank spaces until a correct letter is guessed


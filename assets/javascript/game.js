// initialized variables

guessesLeft = 10;
wins = 0;

// Array of guessable characters

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
				'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Array of potential words to guess

var gods = ['ZUES', 'POSEIDON', 'HADES', 'APOLLO', 'ATLAS', 'APHRODITE', 'ARTEMIS',
			'ODIN', 'THOR', 'LOKI', 'TYR', 'FREYA', 'HEIMDALL', 'OSIRIS', 'ISIS',
			'ANUBIS', 'RA', 'HORUS', 'THOTH', 'MUT'];

// Main function to run game

function main () {
	pick();
	blanks();
	userGuess();
	check();
	console.log(answer);
	console.log(blank);
	console.log(guess);
	console.log(characters);
}

// Function for random guessable word and array for blank spaces 

function pick() {
	// equation to generate random word from gods array
	answer = gods[Math.floor(Math.random() * gods.length)];
	// split into individual characters to compare to user input
	characters = answer.split("");
	// return answer;
}

// Function to create blank spaces for each character in word

function blanks() {
	// array for length of answer to get appropriate blank spaces
	var answerBlanks = new Array(answer.length);
	// add _ for each character of answer
	blank = "_" + answerBlanks.join(' _');
	// return blank;
}

// Function for user guesses

function userGuess () {
	// detect which key is pressed
	var k = event.key;
	// turn input into uppercase
	guess = k.toUpperCase(); 
	return guess;
}

// Check that user entered a valid letter

function check () {
	for (var i in alphabet) {
		letter = alphabet[i];
			if (letter === guess) {
				check2();
				break;
			}
			else
				console.log("Please choose a letter A-Z");
				userGuess();
		}
}

// Check if user input matches a letter in answer

function check2 () {
	for (var i in characters) {
		character = characters[i];
		if (character === guess) {
			console.log("BINGO");
			
			userGuess();
			break;
		}
		else
			if (i = characters) {
				console.log(guessesLeft - 1);
			}
			else 
				check2();
	}
}
// Event to start
function start () {
	document.body.addEventListener('keypress', main);
}

start();

// // 1 function = 1 task

// boolean to true or false




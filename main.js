const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('sc');
const result_p = document.querySelector('rs > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

// USER & COMPUTER Choice

function getComputerChoice() {
	var Choices = ['r', 'p', 's'];
	var randomChoice = '';
	for ( var i = 0; i < 5; i++ ) {
		randomChoice += Choices.charAt(Math.floor(Math.random() * Choices.length));
	}
	return randomChoice
}
console.log(getComputerChoice());

function game(userChoice) {
	// console.log("👍 👍 👍  " + userChoice)
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
		case "rp":
		case "ps":
		case "sr":
			loose(userChoice, computerChoice);
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

// Score Functions

function convertToText(letter) {
	if (letter == "r") return "rock";
	if (letter == "p") return "paper";
	return "scissor";
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "computer".fontsize(3).sup();
	result_p.innerHTML = '${(convertToText(smallUserWord)} beats ${convertToText(smallCompWord)},  [✔] YOU WIN!)';
	console.log("USER WINS! 👍")
}

function loose() {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "computer".fontsize(3).sup();
	result_p.innerHTML = '${(convertToText(userChoice)}(smallCompWord) beats ${convertToText(computerChoice)}(smallUserWord),  YOU LOOSE)';
	console.log("USER LOOSES ! 😭");
}

function draw() {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "computer".fontsize(3).sup();
	result_p.innerHTML = '${(convertToText(userChoice)}(smallUserWord) draws ${convertToText(computerChoice)}(smallCompWord),  YOU DRAW)';
	console.log("USER DRAW ! 😐");
}

// Main Functions

function main() {
	rock_div.addEventListener('click', function() {
	// console.log("clicked on ROCK")
	game('r');
	})

	paper_div.addEventListener('click', function() {
	// console.log("clicked on PAPER")
	game('p');
	})

	scissor_div.addEventListener('click', function() {
	// console.log("clicked on SCISSORS")
	game('s');
	})
}

main();
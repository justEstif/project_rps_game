function computerPlay() {
	const gameChoices = ["rock", "paper", "scissors"]
	const randomGameChoiceIndex = Math.floor(Math.random() * gameChoices.length);
	const computerSelection = gameChoices[randomGameChoiceIndex];
	return computerSelection
}

function playRound(playerSelection, computerSelection) {
	let result = "";
	playerSelection = playerSelection.toLowerCase();
	if (playerSelection === computerSelection) {
		result = `You tied. Both chose ${playerSelection}`;
	} else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			result = "You won! Paper beats Rock";
		} else if (computerSelection === "scissors") {
			result = "You lost! Scissors beat Rock";
		}
	} else if (playerSelection === "rock") {
		if (computerSelection === "paper") {
			result = "You lost! Paper beats Rock";
		} else if (computerSelection === "scissors") {
			result = "You won! Rock beats Scissors";
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			result = "You lost. Rock beats Scissors";
		} else if (computerSelection === "paper") {
			result = "You won. Scissors beats Paper.";
		}
	} else {
		result = "Illegal move. You lost.";
	}
	return result;
}

function game() {
	let keepGoing = true;
	let gamesPlayed = 0;
	let userWinCount = 0;
	let computerWinCount = 0;
	while (keepGoing) {
		gamesPlayed += 1;
		if (gamesPlayed > 4) {
			keepGoing = false;
		}
		let userInput = prompt("Rock, Paper, Scissors?");
		userInput = userInput.toLowerCase();
		let computerSelection = computerPlay();
		let resultOfRound = playRound(userInput, computerSelection);
		console.log(resultOfRound);
		if (resultOfRound.includes("won")) {
			userWinCount += 1;
		} else if (resultOfRound.includes("lost")) {
			computerWinCount += 1;
		}
	}
	let finalResult = (userWinCount > computerWinCount) ? "You won" : "You lost"
	console.log(finalResult);
}

game()
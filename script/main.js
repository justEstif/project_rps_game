function computerPlay() {
  const gameChoices = ["rock", "paper", "scissors"];
  const randomGameChoiceIndex = Math.floor(Math.random() * gameChoices.length);
  const computerSelection = gameChoices[randomGameChoiceIndex];
  return computerSelection;
}
let userWinCount = 0;
let computerWinCount = 0;
let gamesPlayed = 0;
function playRound(playerSelection, computerSelection, keepCount) {
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
  contentResult.textContent = result;
  gamesPlayed += 1;
  if (result.includes("won")) {
    userWinCount += 1;
  } else if (result.includes("lost")) {
    computerWinCount += 1;
  }
  let currentCount = `${userWinCount} to ${computerWinCount}`;
  contentCurrentCount.textContent = currentCount;
  if (gamesPlayed === 5) {
    let finalResult =
      userWinCount > computerWinCount
        ? `You won this round of 5.\nNew Game Started`
        : `You lost this round of 5.\nNew Game Started`;
    contentResultFive.textContent = finalResult;
    userWinCount = 0;
    computerWinCount = 0;
    gamesPlayed = 0;
  }
}

const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");

const contentResult = document.createElement("div");
contentResult.classList.add("content");

contentCurrentCount = document.createElement("div");
contentCurrentCount.classList.add("content");

const contentResultFive = document.createElement("div");
contentResultFive.classList.add("content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id.toString(), computerPlay());
  });
});

container.appendChild(contentResult);
container.appendChild(contentCurrentCount);
container.appendChild(contentResultFive);
//  ${userWinCount} to ${computerWinCount}`

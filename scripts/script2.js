const myModule = (function () {
  let [totalPlayerPoints, totalComputerPoints, gamesPlayed] = [0, 0, 0];
  const gameChoices = [
    { choice: "Rock", loss: "Paper", win: "Scissors" },
    { choice: "Paper", loss: "Scissors", win: "Rock" },
    { choice: "Scissors", loss: "Rock", win: "Paper" },
  ];
  const computerPlay = () => {
    const randomGameChoiceIndex = Math.floor(
      Math.random() * gameChoices.length
    );
    const computerSelection = gameChoices[randomGameChoiceIndex];
    return computerSelection;
  };
  const userPlay = (value) => {
    switch (value) {
      case "Rock":
        return gameChoices[0];
      case "Paper":
        return gameChoices[1];
      case "Scissors":
        return gameChoices[2];
    }
  };
  const playRound = (computerSelection, playerSelection) => {
    const round = {
      playerPoint: 0,
      computerPoint: 0,
    };
    switch (playerSelection.choice) {
      case computerSelection.choice:
        round["playerPoint"] = 0;
        round["computerPoint"] = 0;
        break;
      case computerSelection.loss:
        round["playerPoint"] = 1;
        round["computerPoint"] = 0;
        break;
      case computerSelection.win:
        round["playerPoint"] = 0;
        round["computerPoint"] = 1;
        break;
    }
    counter(round);
    return round;
  };
  const counter = (round) => {
    pointCounter(round);
    gamesPlayedCounter(round);
  };
  const pointCounter = (round) => {
    totalPlayerPoints += round["playerPoint"];
    totalComputerPoints += round["computerPoint"];
    console.log(`player ${totalPlayerPoints}`);
    console.log(`computer ${totalComputerPoints}`);
  };
  const gamesPlayedCounter = () => {
    gamesPlayed++;
    if (gamesPlayed >= 5) {
      endGameScene(); // declare winner and then
    }
  };
  const endGameScene = () => {
    if (totalPlayerPoints > totalComputerPoints) {
      declare("Player");
    } else if (totalComputerPoints > totalPlayerPoints) {
      declare("Computer");
    } else {
      declare("Tie");
    }
    reset();
  };
  const declare = (winner) => {
    switch (winner) {
      case "Player":
        console.log("Winner Player");
        break;
      case "Computer":
        console.log("Winner Player");
        break;
      case "Tie":
        console.log("Winner Player");
        break;
      default:
        reset();
    }
  };
  const reset = () => {
    totalPlayerPoints = 0;
    totalComputerPoints = 0;
    gamesPlayed = 0;
  };
  const click = (btn) => playRound(computerPlay(), userPlay(btn.id));

  return { click };
})();
function TicTacToe5Game() {
  let [totalPlayerPoints, totalComputerPoints, gamesPlayed] = [0, 0, 0];
  const gameChoices = [
    { choice: "Rock", loss: "Paper", win: "Scissors" },
    { choice: "Paper", loss: "Scissors", win: "Rock" },
    { choice: "Scissors", loss: "Rock", win: "Paper" },
  ];
  const computerPlay = () => {
    const randomGameChoiceIndex = Math.floor(
      Math.random() * gameChoices.length
    );
    const computerSelection = gameChoices[randomGameChoiceIndex];
    return computerSelection;
  };
  const userPlay = (value) => {
    switch (value) {
      case "Rock":
        return gameChoices[0];
      case "Paper":
        return gameChoices[1];
      case "Scissors":
        return gameChoices[2];
    }
  };
  const playRound = (computerSelection, playerSelection) => {
    const round = {
      playerPoint: 0,
      computerPoint: 0,
    };
    switch (playerSelection.choice) {
      case computerSelection.choice:
        round["playerPoint"] = 0;
        round["computerPoint"] = 0;
        break;
      case computerSelection.loss:
        round["playerPoint"] = 1;
        round["computerPoint"] = 0;
        break;
      case computerSelection.win:
        round["playerPoint"] = 0;
        round["computerPoint"] = 1;
        break;
    }
    counter(round);
    return round;
  };
  const counter = (round) => {
    pointCounter(round);
    gamesPlayedCounter(round);
  };
  const pointCounter = (round) => {
    totalPlayerPoints += round["playerPoint"];
    totalComputerPoints += round["computerPoint"];
    console.log(`player ${totalPlayerPoints}`);
    console.log(`computer ${totalComputerPoints}`);
  };
  const gamesPlayedCounter = () => {
    gamesPlayed++;
    if (gamesPlayed >= 5) {
      endGameScene(); // declare winner and then
    }
  };
  const endGameScene = () => {
    if (totalPlayerPoints > totalComputerPoints) {
      declare("Player");
    } else if (totalComputerPoints > totalPlayerPoints) {
      declare("Computer");
    } else {
      declare("Tie");
    }
    reset();
  };
  const declare = (winner) => {
    switch (winner) {
      case "Player":
        console.log("Winner Player");
        break;
      case "Computer":
        console.log("Winner Player");
        break;
      case "Tie":
        console.log("Winner Player");
        break;
      default:
        reset();
    }
  };
  const reset = () => {
    totalPlayerPoints = 0;
    totalComputerPoints = 0;
    gamesPlayed = 0;
  };
  const click = (btn) => playRound(computerPlay(), userPlay(btn.id));

  return { click };
}
const buttons = document.querySelectorAll(".choice");
const begin = document.querySelector(".game");
begin.addEventListener("click", () => {});
buttons.forEach((button) => {
  button.addEventListener("click", game.click(button));
});

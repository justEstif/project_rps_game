(function () {
  // default game options
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
    // TODO: use array restructuring instead
    const round = {
      statement: "",
      point: 0,
    };
    switch (playerSelection.choice) {
      case computerSelection.choice:
        round[
          "statement"
        ] = `You draw. Both players chose ${playerSelection.choice}`;
        round["point"] = 0;
        break;
      case computerSelection.loss:
        round[
          "statement"
        ] = `You win. ${playerSelection.choice} beats ${computerSelection.choice}.`;
        round["point"] = 1;
        break;
      case computerSelection.win:
        round[
          "statement"
        ] = `You loss. ${computerSelection.choice} beats ${playerSelection.choice}.`;
        round["point"] = 0;

        break;
    }
    return round;
  };
})();

/**
 * Solving a Problem**
 * Understand and explain the problem to a duck
 * Plan
 * Pseudocode and research applicable functions
 * Divide and conquer



 I have to create a function that plays 5 rounds, keeps score, shows score and ends game and reset scores
 - play 5 rounds: using a for loop that when 5 will say game over (calls end game)
 - keep score: 

 - as long as the button is pressed, it will start the game
 - as long as the game choice buttons are pressed it will play the round
 */

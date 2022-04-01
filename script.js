const buttons = document.querySelectorAll('.choice');
const begin = document.querySelector('.game');

const gameChoices = [
  { choice: 'Rock', loss: 'Paper', win: 'Scissors' },
  { choice: 'Paper', loss: 'Scissors', win: 'Rock' },
  { choice: 'Scissors', loss: 'Rock', win: 'Paper' },
];
// returns a gameChoice object based on user button
function userPlay(value) {
  switch (value) {
    case 'Rock':
      return gameChoices[0];
    case 'Paper':
      return gameChoices[1];
    case 'Scissors':
      return gameChoices[2];
  }
}
// return a gameChoice object
function computerPlay() {
  const randomGameChoiceIndex = Math.floor(Math.random() * gameChoices.length);
  const computerSelection = gameChoices[randomGameChoiceIndex];
  return computerSelection;
}
// returns a round element which has a statement and point
function playRound(computerSelection, playerSelection) {
  const round = {
    statement: '',
    point: 0,
  };
  switch (playerSelection.choice) {
    case computerSelection.choice:
      round[
        'statement'
      ] = `You draw. Both players chose ${playerSelection.choice}`;
      round['point'] = 0;
      break;
    case computerSelection.loss:
      round[
        'statement'
      ] = `You win. ${playerSelection.choice} beats ${computerSelection.choice}.`;
      round['point'] = 1;
      break;
    case computerSelection.win:
      round[
        'statement'
      ] = `You loss. ${computerSelection.choice} beats ${playerSelection.choice}.`;
      round['point'] = 0;

      break;
  }
  return round;
}
// 5 round rock, paper, scissors
// roundObject, playerScore, numberOfRounds
let gameArray = [{}, 0, 0];
function game() {
  console.log('Click a button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      gameArray[0] = playRound(computerPlay(), userPlay(button.innerText));
      gameArray[1] += gameArray[0]['point'];
      console.log(gameArray[0]['statement']);
      console.log(`${gameArray[1]}`);
      gameArray[2]++;
      if (gameArray[2] >= 5) {
        console.log(`${gameArray[1]} / 5`);
        gameArray = [{}, 0, 0];
        return;
      }
    });
  });
}
begin.addEventListener('click', game);

// bugs: the game is called multiple time
// soln: create stop button which exits the game

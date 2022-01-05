/*
function called computerPlay that will randomly return either Rock, Paper or Scissors
create gameChoices list with the three options
create a variable called computerChoice that will hold a random choice
return computerChoice
*/

function computerPlay(){
    const gameChoices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * gameChoices.length);
    const computerSelection = gameChoices[randomIndex];
    return computerSelection
}


/*
function called gamePlay:
that takes in two parameters and plays a single round of the game:
    playerSelection
        playerSelection = playerSelection.toLowerCase()
    computerSelection
it returns a string that declares the winner of the round:
create a variable called result that holds the return value
    use if-else to check
    }
    like: "You Lose! Paper beats Rock"
*/
function playRound(playerSelection, computerSelection){
    let result = "";
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        result = `You tied. Both chose ${playerSelection}`;
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            result = "You won! Paper beats Rock";
        }
        else if(computerSelection === "scissors"){
            result = "You lost! Scissors beat Rock";
        }
    }
    else if (playerSelection === "rock"){
        if(computerSelection === "paper"){
            result = "You lost! Paper beats Rock";
        }
        else if(computerSelection === "scissors"){
            result = "You won! Rock beats Scissors";
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            result = "You lost. Rock beats Scissors";
        }
        else if(computerSelection === "paper"){
            result = "You won. Scissors beats Paper.";
        }
    }
    else{
        result = "Illegal move. You lost.";
    }
    return result;
}
/**Reword
 * function called game()
 * play a 5 round game
 * keeps the score and reports the winner or loser at the end
 */
/**Plan
 * function calls playRound 5 times, use while loop
 * need to add score count
 * check if won in return: userCount+ 1
 * else if loss in return: computerCount + 1
 * create variable called userCount, computerCount = 0
 * create variable if in return "won" userCount + 1, else if "lost" computerCount + 1
 * create variable to take in userInput
 */
/**Pseudo-code
 function game(){
     keepGoing = True
     played = 0
     while keepGoing
     {
        played += 1
        if played > 4{
            keepGoing = false //end game
        }
        let userInput = prompt("Rock, Paper, Scissors?");
        userInput = userInput.toLowerCase();
        let computerSelection = computerPlay();
        let resultOfRound = playRound(playerSelection, computerSelection);
        console.log(resultOfRound);
        if resultOfRound.includes("won"){

        }
        elif resultOfRound.includes("lost"){

        }
        elif resultOfRound.includes("tie"){

        }


     }
     let finalResult = if (userCount > computerCount) ? "You won":"You lost"
 }
 */
function game(){
    let keepGoing = true;
    let played = 0;
    let userCount = 0;
    let computerCount = 0;
    while (keepGoing){
        played += 1;
        if(played > 4){
            keepGoing = false;
        }
        let userInput = prompt("Rock, Paper, Scissors?");
        userInput = userInput.toLowerCase();
        let computerSelection = computerPlay();
        let resultOfRound = playRound(userInput, computerSelection);
        console.log(resultOfRound);
        if(resultOfRound.includes("won")){
            userCount += 1;
        }
        else if(resultOfRound.includes("lost")){
            computerCount += 1;
        }
    }
    let finalResult = (userCount > computerCount) ? "You won":"You lost"
    console.log(finalResult);
}

game()


/**
 * Imporvement:
 * the if-else statments in plaRound() can be made into another function
 *      call it choiceChecker and which choice won
 *          it should call the choices by index rather than by name
 * the if-else in game can also be put into a different funcition that check who won the rund based on the return statment and keeps count
 *      keepCount()
 * 
 */
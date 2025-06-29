/* 
Rock Paper Scissors Game
*/

let computerScore = 0;
let humanScore = 0;


function getComputerChoice(){
    /* 
    Generates random number from 0 to 100 that will determine computer choice.

    Args: None
    Return: computer choice (e.g: "Paper", "Scissor", or "Rock")
    */
    const randN = Math.round(Math.random()*100);
    let computerChoice = "";
    if (randN < 34){
        return computerChoice = "rock";
    } else if (randN >= 34 && randN < 67){
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

function getHumanChoice(){
    /*
    Prompts user to enter an answer.

    Args: None
    Return: human choice (e.g: "Paper", "Scissor", or "Rock")
    */
    const message = "Rock, Paper, Scissors?";
    let answer = prompt(message);
    return answer.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    /*
    Plays game round
     */
    switch(humanChoice){
        case "rock":
            if (computerChoice === "rock"){
                console.log("Your Score: "+humanScore);
                console.log("Computer Score: "+computerScore);
                return "It is a draw!";
            } else if (computerChoice === "scissors"){
                humanScore += 1;
                console.log("Your Score: "+humanScore);
                console.log("Computer Score: "+computerScore);
                return "You win! Rock beats Scissors!";
            } else {
                computerScore += 1;
                console.log("Your Score: "+humanScore);
                console.log("Computer Score: "+computerScore);
                return "You lose! Paper beats Rocks!";
            }
        case "scissors":
            if (computerChoice === "scissors"){
                console.log("Your Score: "+humanScore);
                console.log("Computer Score: "+computerScore);
                return "It is a draw!";
            } else if (computerChoice === "rock"){
                computerScore += 1;
                console.log("Your Score: "+humanScore);
                console.log("Computer Score: "+computerScore);
                return "You lose! Rock beats Scissors!";
            } else {
                humanScore += 1;
                console.log("Your Score: "+humanScore);
                console.log("Computer Score: "+computerScore);
                return "You win! Scissors beat Paper!";
            }
        case "paper":
            if (computerChoice === "paper"){
                console.log("Your Score: "+humanScore);
                console.log("Computer Score: "+computerScore);
                return "It is a draw!";
            } else if (computerChoice === "scissors"){
                computerScore += 1;
                console.log("Your Score: "+humanScore);
                console.log("Computer Score: "+computerScore);
                return "You lose! Scissors beats Rocks!";
            } else {
                humanScore += 1;
                console.log("Your Score: "+humanScore);
                console.log("Computer Score: "+computerScore);
                return "You win! Paper beats Rocks!";
            }
    }
}
function playGame(){
    /**
     * Main game driver. 
     * 
     * args: none.
     * return: results of the game.
     */
    for(let i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice));
    }
    console.log("Your Final Score " + humanScore);
    console.log("Final Computer Score "+computerScore);
    if(humanScore > computerScore){
        return "You Win!";
    }else {
        return "You Lose!";
    }
}
console.log(playGame());

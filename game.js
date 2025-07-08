/* 
Rock Paper Scissors Game
*/


let computerScore = 0;
let humanScore = 0;

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const resultScoreDiv = document.getElementById("result-score-div")
resultScoreDiv.style.padding ="20px 0px 20px 0px"
const gameDiv = document.getElementById("game");
gameDiv.style.display = "flex";
gameDiv.style.justifyContent ="center";
resultScoreDiv.style.border ="2px solid";
resultScoreDiv.style.marginTop ="10px";
resultScoreDiv.style.flexDirection="column";
resultScoreDiv.style.alignItems ="center";
resultScoreDiv.style.display = "flex";
resultScoreDiv.style.gap = "10px";
resultScoreDiv.style.justifyContent ="center";

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

function playRound(humanChoice){
    /*
    Plays game round
     */
    const computerChoice = getComputerChoice();
    let roundResults = '';

    if(computerScore >= 5 || humanScore >= 5) return;
    if(computerChoice === humanChoice){
        roundResults = `It is a draw! You selected ${humanChoice}.`;
    }else if((humanChoice === 'rock' && computerChoice ==='scissors')||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ){
        humanScore++;
        roundResults = `You win! ${humanChoice} beats ${computerChoice}.`;
    }else {
        computerScore++;
        roundResults = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    resultDiv.textContent = roundResults;
    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}.`;

    if (humanScore === 5){
        resultDiv.textContent += "\n🎉 You won the game! 🎉";
    } else if (computerScore === 5){
        resultDiv.textContent += "\n😢 You lose! 😢";
    }
}

const rockBtn = document.getElementById('rock').addEventListener("click", () => playRound('rock'));
const paperBtn = document.getElementById('paper').addEventListener("click", () => playRound('paper'));
const scissorsBtn = document.getElementById('scissors').addEventListener("click", () => playRound('scissors'));

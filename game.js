/* 
Rock Paper Scissors Game
*/

function getComputerChoice(){
    /* 
    Generates random number from 0 to 100 that will determine computer choice

    Args: None
    Return: computer choice (e.g: "Paper", "Scissor", or "Rock")
    */
    const randN = Math.round(Math.random()*100);
    let computerChoice = "";
    if (randN < 34){
        return computerChoice = "Rock";
    } else if (randN >= 34 && randN < 67){
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissors";
    }
}
console.log(getComputerChoice());
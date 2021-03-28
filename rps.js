const div = document.getElementById('div1');

/**
 * This function plays a turn for the computer. 
 * @return {string} picks a random string from rock, paper, and scissors
*/

function computerPlay(){

    //creates a random int between 0-2
    let getRandomInt = () => Math.floor(Math.random() * Math.floor(3)); 

    let rand = getRandomInt();

    if (rand === 0){
        return "Rock";
    }
    else if (rand === 1){
        return "Paper";
    }
    else if (rand === 2){
        return "Scissors";
    }
}

/** 
* Brief description of the function here.
* @param {string} playerSelection - player's choice; one of rock, paper, or scissors
* @param {string} computerSelection - computer's choice; one of rock, paper, or scissors
* @return {string} Returns a string explaining the outcome of the game.
*/
function playRound(playerSelection, computerSelection){

    //make the input lowercase
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    //print the output to the DOM
    let playerPara = document.createElement("p");
    let playerNode = document.createTextNode(`You picked: ${playerSelection}.`);
    playerPara.appendChild(playerNode);
    div.appendChild(playerPara);

    let computerPara = document.createElement("p");
    let computerNode = document.createTextNode(`You picked: ${computerSelection}.`);
    computerPara.appendChild(computerNode);
    div.appendChild(computerPara);

    //if chain to find the outcome
    if (player == "rock"){
        if (computer == "paper"){
            return "You lose! Paper beats Rock.";
        }
        else if (computer == "scissors"){
            return "You win! Rock beats Scissors.";
        }
        else {
            return "Draw! You both picked Rock.";
        }
    }
    else if (player == "paper"){
        if (computer == "scissors"){
            return "You lose! Scissors beats Paper.";
        }
        else if (computer == "rock"){
            return "You win! Paper beats Rock.";
        }
        else {
            return "Draw! You both picked paper.";
        }
    }
    else {
        if (computer == "rock"){
            return "You lose! Rock beats Scissors.";
        }
        else if (computer == "paper"){
            return "You win! Scissors beats Paper.";
        }
        else {
            return "Draw! You both picked Scissors.";
        }
    }
}

/**
 * This function plays 5 rounds and updates the DOM with the output.
 */
function game(){

    for(i=0; i<5; i++){
        let playerSelection = prompt("Enter your choice! Must be Rock, Paper, or Scissors, case insensitve.");
        let computerSelection = computerPlay();

        let para = document.createElement("p");
        let node = document.createTextNode(playRound(playerSelection, computerSelection));
        para.appendChild(node);
        div.appendChild(para);
    }
}

game();
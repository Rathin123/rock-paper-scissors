const buttons = document.getElementById('buttons');
const rock_button = document.getElementById('Rock');
const paper_button = document.getElementById('Paper');
const scissors_button = document.getElementById('Scissors');
const computer_score_ele = document.getElementById('computer_score').firstChild;
const player_score_ele = document.getElementById('player_score').firstChild;
const player_choice_ele = document.getElementById('player_choice');
const computer_choice_ele = document.getElementById('computer_choice');
const round_result_ele = document.getElementById('round_result');

let computer_score = 0;
let player_score = 0;


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

    //if chain to find the outcome
    if (player == "rock"){
        if (computer == "paper"){
            computer_score += 1;
            return ["You lose! Paper beats Rock.","🪨","🗞️"];
        }
        else if (computer == "scissors"){
            player_score += 1;
            return ["You win! Rock beats Scissors.","🪨","✂️"];
        }
        else {
            return ["Draw! You both picked Rock.","🪨", "🪨"];
        }
    }
    else if (player == "paper"){
        if (computer == "scissors"){
            computer_score += 1;
            return ["You lose! Scissors beats Paper.","🗞️","✂️"];
        }
        else if (computer == "rock"){
            player_score += 1;
            return ["You win! Paper beats Rock.","🗞️", "🪨"];
        }
        else {
            return ["Draw! You both picked Paper.","🗞️","🗞️"];
        }
    }
    else {
        if (computer == "rock"){
            computer_score += 1;
            return ["You lose! Rock beats Scissors.","✂️", "🪨"];
        }
        else if (computer == "paper"){
            player_score += 1;
            return ["You win! Scissors beats Paper.","✂️", "🗞️"];
        }
        else {
            return ["Draw! You both picked Scissors.","✂️", "✂️"];
        }
    }
}
/** 
* Callback function for the onclick
* @summary Callback function used when the player makes their choice
* @param {Event} event - event object
*/

function playerSelectCallback(event){

    let playerSelection = event.target.id
    let computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection)

    //print choices + round results
    player_choice_ele.firstChild.nodeValue = result[1];
    computer_choice_ele.firstChild.nodeValue = result[2];
    round_result_ele.textContent = result[0];

    player_score_ele.nodeValue = `Player Score: ${player_score}`
    computer_score_ele.nodeValue = `Computer Score: ${computer_score}`

    
    //catches if anyone gets to 5
    if (computer_score == 5 || player_score == 5){
        let head2 = document.getElementById("subtitle");
        head2.firstChild.nodeValue = (computer_score == 5) ? "You lost!" : "You won!";
        
        buttons.style.opacity = '0';
        setTimeout(() => buttons.remove(), 1000);
    }
}

rock_button.addEventListener("click", playerSelectCallback)
paper_button.addEventListener("click", playerSelectCallback)
scissors_button.addEventListener("click", playerSelectCallback)

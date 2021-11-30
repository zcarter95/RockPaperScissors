const choices = ['Rock', 'Paper', 'Scissors'];
function computerPlay(){
    let min = 0;
    let max = choices.length - 1;
    let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return choices[randomInt];
}

// function getPlayerInput() {
//     let playerInput = window.prompt("Enter 'Rock, Paper, or Scissors': ");
//     let firstLetter = playerInput[0];
//     let firstLetterCap = firstLetter.toUpperCase();
//     let restOfInput = playerInput.slice(1);
//     let restOfInputLower = restOfInput.toLowerCase();
//     let inputCap = firstLetterCap + restOfInputLower;
//     console.log(inputCap);
//     return inputCap;
// }

function getPlayerInput() {
    let selection;
    if(document.getElementsByClassName('Rock').clicked == true){
        selection = 'Rock';
        console.log('Rock');
    }
    else if(document.getElementsByClassName('Paper').clicked == true){
        selection = 'Paper';
        alert(selection);
    }
    else if(document.getElementsByClassName('Scissors').clicked == true){
        selection = 'Scissors';
        alert(selection);
    }
}

function playRound () {
    let playerSelection = getPlayerInput();
    let computerSelection = computerPlay();
    let result;
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log('You picked: ' + playerSelection);
        console.log('Computer picked: ' + computerSelection);
        console.log('You both picked Rock, its a tie.');
        result = "Tie";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        console.log('You picked: ' + playerSelection);
        console.log('Computer picked: ' + computerSelection);
        console.log('You lose! Paper beats Rock');
        result = "Lose";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log('You picked: ' + playerSelection);
        console.log('Computer picked: ' + computerSelection);
        console.log('You win! Rock beats Scissors!');
        result = "Win";
    }

    else if (playerSelection === "Paper" && computerSelection === "Paper"){
        console.log('You picked: ' + playerSelection);
        console.log('Computer picked: ' + computerSelection);
        console.log('You both picked Paper, its a tie.');  
        result = "Tie";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        console.log('You picked: ' + playerSelection);
        console.log('Computer picked: ' + computerSelection);
        console.log('You lose! Scissors beats Paper');
        result = "Lose";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        console.log('You picked: ' + playerSelection);
        console.log('Computer picked: ' + computerSelection);
        console.log('You win!, Paper beats Rock!');  
        result = "Win";
    }

    else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        console.log('You picked: ' + playerSelection);
        console.log('Computer picked: ' + computerSelection);
        console.log('Its a tie, you both picked Scissors');
        result = "Tie"; 
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        console.log('You picked: ' + playerSelection);
        console.log('Computer picked: ' + computerSelection);
        console.log('You lose! Rock beats Scissors!'); 
        result = "Lose";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log('You picked: ' + playerSelection);
        console.log('Computer picked: ' + computerSelection);
        console.log('You win! Scissors beats Paper!'); 
        result = "Win";
    }
    return result; 
}

function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let game;
    for (let i = 0; i < 5; i++){
        game = playRound();
        if (game === "Win"){
            wins++;
        }
        else if (game === "Lose"){
            losses++;
        }
        else if (game === "Tie"){
            ties++;
            if (i == 4){
                i--;
            }
        }
    }
    if (wins >= 3){
        console.log("You won the game with " + wins + " wins, " + losses + " losses, and " + ties + " ties!");
    }
    else if (losses >= 3){
        console.log("You lost the game with " + wins + " wins, " + losses + " losses, and " + ties + " ties :(");
    }
    else {
        console.log("You tied the game with " + wins + " wins, " + losses + " losses, and " + ties + " ties :/");
    }
}
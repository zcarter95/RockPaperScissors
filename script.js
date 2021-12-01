const choices = ['Rock', 'Paper', 'Scissors'];
const results = document.querySelector('#Results');
const winsText = document.querySelector('#Wins');
const lossesText = document.querySelector('#Losses');
const tiesText = document.querySelector('#Ties');

let wins = 0;
let losses = 0;
let ties = 0;
let gameOver = false;
let gameWon = false;
let gameLost = false;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
tiesText.textContent = "Ties: " + ties;

results.textContent = "Can you beat the computer??";
function computerPlay(){
    let min = 0;
    let max = choices.length - 1;
    let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return choices[randomInt];
}

function playRound (selection) {
    let playerSelection = selection;
    let computerSelection = computerPlay();
    let result;
    if (wins === 5){
        results.textContent = "You win the game! Refresh to play again.";
    }
    else if (losses === 5){
        results.textContent = "You lost! Better luck next time! (Refresh the page to play again)";
    }
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        results.textContent = 'You both picked Rock, its a tie.';
        result = "Tie";
        game(result);
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        results.textContent = 'You lose! Paper beats Rock';
        result = "Lose";
        game(result);
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        results.textContent = 'You win! Rock beats Scissors!';
        result = "Win";
        game(result);
    }

    else if (playerSelection === "Paper" && computerSelection === "Paper"){
        results.textContent = 'You both picked Paper, its a tie.';  
        result = "Tie";
        game(result);
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        results.textContent = 'You lose! Scissors beats Paper';
        result = "Lose";
        game(result);
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        results.textContent = 'You win!, Paper beats Rock!';  
        result = "Win";
        game(result);
    }

    else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        results.textContent = 'Its a tie, you both picked Scissors';
        result = "Tie"; 
        game(result);
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        results.textContent = 'You lose! Rock beats Scissors!'; 
        result = "Lose";
        game(result);
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        results.textContent = 'You win! Scissors beats Paper!'; 
        result = "Win";
        game(result);
    }
    return result; 
}

function game(result) {
    
    if (result === "Win"){
        wins++;
        winsText.textContent = "Wins: " + wins;
    }
    else if (result === "Lose"){
        losses++;
        lossesText.textContent = "Losses: " + losses;
    }
    else if (result === "Tie"){
        ties++;
        tiesText.textContent = "Ties: " + ties;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!gameOver){
            playRound(button.className);
            if (wins === 5 || losses === 5){
                gameOver = true;
                if (wins === 5){
                    gameWon = true;
                }
                else if (losses === 5){
                    gameLost = true;
                }
            }
        }
        else if (gameOver){
            if (gameWon){
                results.textContent = "Game Over! You Won!";
            }
            else if (gameLost){
                results.textContent = "Game Over! You Lost!";
            }
        }
    })
})

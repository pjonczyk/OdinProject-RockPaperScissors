const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function computerPlay() {

    let random = getRandomInt(3);
    switch (random) {
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return scissors;
        default:
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeFirstLetter(playerSelection);

    if ((playerSelection == rock && computerSelection == scissors)
        || (playerSelection == paper && computerSelection == rock)
        || (playerSelection == scissors && computerSelection == paper)) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if ((playerSelection == scissors && computerSelection == rock)
        || (playerSelection == rock && computerSelection == paper)
        || (playerSelection == paper && computerSelection == scissors)) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    return "Draw!"
}

function game() {
    playerWins = 0;
    computerWins = 0;
    draws = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your selection?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let playerName = "";

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

function playerAction(playerSelection) {
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    const resultDisplay = document.querySelector('.resultDisplay');
    resultDisplay.textContent = result;
    const resultTable = document.querySelector('.resultTable');
    const tr = document.createElement('tr');
    const leftTh = document.createElement('th');
    leftTh.textContent = playerSelection;
    const centerTh = document.createElement('th');
    const rightTh = document.createElement('th');
    rightTh.textContent = computerSelection;

    tr.appendChild(leftTh);
    tr.appendChild(centerTh);
    tr.appendChild(rightTh);

    resultTable.appendChild(tr);

}
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
        return 'You Win!';
    }

    if ((playerSelection == scissors && computerSelection == rock)
        || (playerSelection == rock && computerSelection == paper)
        || (playerSelection == paper && computerSelection == scissors)) {
        return 'You Lose!';
    }

    return "Draw!"
}

function playerAction(playerSelection) {
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    let resultTable = document.querySelector('.resultTable');
    let row = resultTable.insertRow();
    insertCell(row, -1, playerSelection);
    insertCell(row, -1, result);
    insertCell(row, -1, computerSelection);
}

function insertCell(row, position, content) {
    let cell = row.insertCell(position);
    let newText = document.createTextNode(content);
    cell.appendChild(newText);
}
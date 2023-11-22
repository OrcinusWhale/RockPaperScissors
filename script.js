function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `It's a draw! You both chose ${computerSelection}`
    }
    else if (playerSelection.toLowerCase() == "rock"){
        if (computerSelection == "Paper") {
            return `You lose! Paper beats Rock`
        }
        else {
            return `You win! Rock beats Scissors`
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            return `You win! Paper beats Rock`
        }
        else {
            return `You lose! Scissors beat paper`
        }
    }
    else {
        if (computerSelection == "Rock") {
            return `You lose! Rock beats Scissors`
        }
        else {
            return `You win! Scissors beat Paper`
        }
    }
}

function game() {
    let playerSelection;
    for (let i=0; i<5; ++i) {
        playerSelection = prompt("Please enter your selection (Rock, Paper, Scissors): ")
        console.log(playRound(playerSelection, getComputerChoice()))
    }
    console.log("Game Over")
}
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
            cpuScore++;
            return `You lose! Paper beats Rock`
        }
        else {
            playerScore++;
            return `You win! Rock beats Scissors`
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            playerScore++;
            return `You win! Paper beats Rock`
        }
        else {
            cpuScore++;
            return `You lose! Scissors beat paper`
        }
    }
    else {
        if (computerSelection == "Rock") {
            cpuScore++;
            return `You lose! Rock beats Scissors`
        }
        else {
            playerScore++;
            return `You win! Scissors beat Paper`
        }
    }
}

function displayWinner(message) {
    msg = document.querySelector("#message");
    if (playerScore == 5) {
        msg.innerText = "YOU WIN!"
    }
    else if(cpuScore == 5) {
        msg.innerText = "YOU LOSE!"
    }
    if (playerScore == 5 || cpuScore == 5) {
        selectionBtns.forEach(button => { 
            button.removeEventListener("click", calls[button.alt]);
            button.style.opacity = 0.5;
        })
    }
    else {
        msg.innerText = message;
    }
    document.querySelector("#player-score").innerText = `You: ${playerScore}`;
    document.querySelector("#cpu-score").innerText = `CPU: ${cpuScore}`;
}

let playerScore = 0;
let cpuScore = 0;
const calls = {
    "rock" : undefined,
    "paper" : undefined,
    "scissors" : undefined
};
const selectionBtns = document.querySelectorAll(".selection");
selectionBtns.forEach(button => {
    calls[button.alt] = () => displayWinner(playRound(button.alt, getComputerChoice()));
    button.addEventListener("click", calls[button.alt]);
});
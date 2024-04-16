function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    }
    switch (playerSelection.toLowerCase()) {
        case "rock":
            if (computerSelection === "paper") {
                return "You lose! Paper beats Rock";
            }
            return "You win! Rock beats Scissors";
        case "paper":
            if (computerSelection === "scissors") {
                return "You lose! Scissors beats Paper";
            }
            return "You win! Paper beats Rock"
        case "scissors":
            if (computerSelection === "rock") {
                return "You lose! Rock beats Scissors";
            }
            return "You win! Scissor beats Paper";
    }
}

function playGame() {
    let score = 0;
    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = "";
        do {
            playerSelection = prompt(`Round ${i} - Enter your choice of Rock, Paper or Scissors:`);
        } while (!["rock", "paper", "scissors"].includes(playerSelection.toLocaleLowerCase()));

        const result = playRound(playerSelection, computerSelection);
        console.log(playerSelection, computerSelection, result);

        if (result.includes("You win!")) {
            score++;
        } else if (result.includes("You lose!")) {
            score--;
        }
    }
    if (score > 0) {
        console.log("Victory!");
    } else if (score < 0) {
        console.log("Defeat!");
    } else {
        console.log("Match Draw!");
    }
}

playGame();
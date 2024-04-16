const weapons = document.querySelectorAll(".weapons > div");

const title = document.querySelector(".title");
const detail = document.querySelector(".detail");

const humanSelected = document.querySelector("#human .selected");
const computerSelected = document.querySelector("#computer .selected");
const humanScore = document.querySelector("#human .score");
const computerScore = document.querySelector("#computer .score");

weapons.forEach(function (weapon) {
    weapon.addEventListener("click", playGame);
});

const weaponIcons = new Map([["Rock", "👊"], ["Paper", "🖐️"], ["Scissors", "✌️"]]);
let player1Score = 0;
let player2Score = 0;

function playGame(e) {
    const playerSelection = e.target.dataset.weapon;
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);

    if (result.title.includes("You won!")) {
        player1Score++;
    } else if (result.title.includes("You lost!")) {
        player2Score++;
    }

    title.textContent = result.title;
    detail.textContent = result.detail;

    humanSelected.textContent = weaponIcons.get(playerSelection);
    computerSelected.textContent = weaponIcons.get(computerSelection);

    humanScore.textContent = player1Score;
    computerScore.textContent = player2Score;

    if (player1Score >= 5) {
        gameOver("Yow won!");
    } else if (player2Score >= 5) {
        gameOver("You lost...");
    }
}

function gameOver(result) {
    const overlay = document.querySelector(".overlay");
    const resultDisplay = document.querySelector('.result');
    const btnAgain = document.querySelector('.play-again');

    resultDisplay.textContent = result;
    overlay.classList.add("active");

    btnAgain.addEventListener("click", () => {
        overlay.classList.remove("active");
    });

    reset();
}

function reset() {
    title.textContent = "Choose your weapon";
    detail.textContent = "First to score 5 points wins the game";

    humanSelected.textContent = "?";
    computerSelected.textContent = "?";

    humanScore.textContent = "0";
    computerScore.textContent = "0";

    player1Score = 0;
    player2Score = 0;
}

function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {
            title: "It's a tie!",
            detail: `${playerSelection} ties with ${computerSelection}`
        };
    }
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Paper") {
                return {
                    title: "You lost!",
                    detail: `${playerSelection} is beaten by ${computerSelection}`
                }
            }
            return {
                title: "You won!",
                detail: `${playerSelection} beats ${computerSelection}`
            }
        case "Paper":
            if (computerSelection === "Scissors") {
                return {
                    title: "You lost!",
                    detail: `${playerSelection} is beaten by ${computerSelection}`
                }
            }
            return {
                title: "You won!",
                detail: `${playerSelection} beats ${computerSelection}`
            }
        case "Scissors":
            if (computerSelection === "Rock") {
                return {
                    title: "You lost!",
                    detail: `${playerSelection} is beaten by ${computerSelection}`
                }
            }
            return {
                title: "You won!",
                detail: `${playerSelection} beats ${computerSelection}`
            }
    }
}
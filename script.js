// Define your array of strings
const gameOptions = ["rock", "paper", "scissors"];

// Function to capitalize the first letter of a string
const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

// Function to determine the winner of a round
const winnerOfRound = (computer, player) => {
    return (
        (computer === "rock" && player === "paper") ? "player" :
        (computer === "rock" && player === "scissors") ? "computer" :

        (computer === "paper" && player === "rock") ? "computer" :
        (computer === "paper" && player === "scissors") ? "player" :

        (computer === "scissors" && player === "rock") ? "player" :
        (computer === "scissors" && player === "paper") ? "computer" :
        (computer ===  player) ? "tie" :

        "Invalid input. Please choose from Rock, Paper, or Scissors."
    );
};

// Function to play a single round
const playRound = () => {
    // Select a random item from the array
    const computerChoice = capitalize(gameOptions[Math.floor(Math.random() * gameOptions.length)]);
    // Let the player choose
    const playerChoice = capitalize(prompt("What will you play this turn?"));
    // Determine the winner of the round
    const result = winnerOfRound(computerChoice.toLowerCase(), playerChoice.toLowerCase());
    // Return a string describing the result of the round
    switch(result) {
        case "player":
            return "You Win! " + playerChoice + " beats " + computerChoice;
        case "computer":
            return "You Lose! " + computerChoice + " beats " + playerChoice;
        case "tie":
            return "It's a Tie! Both chose " + playerChoice;
        default:
            return "Invalid input. Please choose from Rock, Paper, or Scissors.";
    }
};

// Function to play a game with multiple rounds
const playGame = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const result = playRound();
        console.log("Round " + (i + 1) + ": " + result);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    // Determine the winner of the game
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
};

// Play the game
playGame();

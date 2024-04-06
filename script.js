// Define your array of strings
const gameOptions = ["rock", "paper", "scissors"];

// Function to determine the winner of a round
const winnerOfRound = (computer, player) => {
    const computerChoice = computer.toLowerCase();
    const playerChoice = player.toLowerCase();

    if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
    ) {
        return "player";
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        return "computer";
    } else if (computerChoice === playerChoice) {
        return "tie";
    } else {
        return "Invalid input. Please choose from Rock, Paper, or Scissors.";
    }
};

// Function to play a single round
const playRound = () => {
    // Select a random item from the array
    const computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    // Let the player choose
    const playerChoice = prompt("What will you play this turn?").toLowerCase();
    // Determine the winner of the round
    const result = winnerOfRound(computerChoice, playerChoice);
    // Return a string describing the result of the round
    switch(result) {
        case "player":
            return "You Win! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + " beats " + computerChoice;
        case "computer":
            return "You Lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + playerChoice;
        case "tie":
            return "It's a Tie! Both chose " + playerChoice;
        default:
            return result; // Just return the error message
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

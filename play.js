function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  // Choose randomly between rock, paper and scissors
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  // Draw:
  if (playerSelection === computerSelection) {
    return `Draw! ${playerSelection} draws against ${computerSelection}`;
  }
  // Player win:
  else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `You Win! ${playerSelection} wins against ${computerSelection}`;
  }
  // Player loss:
  else {
    computerScore++;
    return `You Lose! ${playerSelection} loses against ${computerSelection}`;
  }
}

function playGame() {
  // Play a five round game
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose between rock, paper and scissors.").toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    console.log(`Current score: Player - ${playerScore}, Computer - ${computerScore}`);
  }

  // Compare final scores
  if (playerScore > computerScore) {
    return console.log(`Player wins! Final score: Player - ${playerScore}, Computer - ${computerScore}`);
  }
  else if (playerScore === computerScore) {
    return console.log(`Draw! Final score: Player - ${playerScore}, Computer - ${computerScore}`);
  }
  else {
    return console.log(`Computer wins! Final score: Player - ${playerScore}, Computer - ${computerScore}`);
  }
}

let playerScore = 0;
let computerScore = 0;

playGame();






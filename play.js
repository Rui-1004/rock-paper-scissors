function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  // Choose randomly between rock, paper and scissors
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  // Draw:
  if (playerSelection === computerSelection) {
    roundResult.textContent = `Draw! ${playerSelection} draws against ${computerSelection}`;
  }
  // Player win:
  else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    roundResult.textContent = `You Win! ${playerSelection} wins against ${computerSelection}`;
  }
  // Player loss:
  else {
    computerScore++;
    roundResult.textContent = `You Lose! ${playerSelection} loses against ${computerSelection}`;
  }

  roundScore.textContent = `Current score: Player - ${playerScore}, Computer - ${computerScore}`;

  return; 
}

function endGame() {
  if (playerScore > computerScore) {
    roundScore.textContent = `Player wins! Final score: Player - ${playerScore}, Computer - ${computerScore}`;  
    alert(`Player wins! Final score: Player - ${playerScore}, Computer - ${computerScore}`);
  }
  else if (playerScore === computerScore) {
    roundScore.textContent = `Draw! Final score: Player - ${playerScore}, Computer - ${computerScore}`;
    alert(`Draw! Final score: Player - ${playerScore}, Computer - ${computerScore}`);
  }
  else {
    roundScore.textContent = `Computer wins! Final score: Player - ${playerScore}, Computer - ${computerScore}`;
    alert(`Computer wins! Final score: Player - ${playerScore}, Computer - ${computerScore}`);
  }

  playerScore = 0;
  computerScore = 0;

  return;
}

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const div = document.querySelector(".score");

const roundResult = document.createElement("p");
roundResult.textContent = "";

const roundScore = document.createElement("p");
roundScore.textContent = "";

div.appendChild(roundResult);
div.appendChild(roundScore);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    if (playerScore == 5 || computerScore == 5) {
      endGame();
    }
  })
})








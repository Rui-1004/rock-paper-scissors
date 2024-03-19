function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  // Choose randomly between rock, paper and scissors
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  // Draw:
  if (playerSelection === computerSelection) {
    return console.log(`Draw! ${playerSelection} draws against ${computerSelection}`);
  }
  // Player win:
  else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
    return console.log(`You Win! ${playerSelection} wins against ${computerSelection}`);
  }
  // Player loss:
  else {
    return console.log(`You Lose! ${playerSelection} loses against ${computerSelection}`);
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

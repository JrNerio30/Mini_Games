// VARIABLES
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const results = document.getElementById("result");

// Event Listeners for the buttons
rockButton.addEventListener("click", () => handleButtonClick("rock"));
paperButton.addEventListener("click", () => handleButtonClick("paper"));
scissorsButton.addEventListener("click", () => handleButtonClick("scissors"));

function handleButtonClick(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  results.textContent = `You Chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return `It's a tie!`
  }else if(
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You Win';
  }else{
    return 'You Lose'
  }
}













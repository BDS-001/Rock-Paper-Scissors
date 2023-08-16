function getComputerChoice() {
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    return CHOICES[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
    const player = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    if (player === computerSelection) {
        return `Tie! You both picked ${player}`
    } else if ((player === 'Rock' && computerSelection === 'Paper') || (player === 'Paper' && computerSelection === 'Scissors') || (player === 'Scissors' && computerSelection === 'Rock')) {
        return `You Lose! ${computerSelection} beats ${player}`
    } else {
        return `You Win! ${player} beats ${computerSelection}`
    }
}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
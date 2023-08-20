const CHOICES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return [`Tie! You both picked ${playerSelection}`, 0]
    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        return [`You Lose! ${computerSelection} beats ${playerSelection}`, -1]
    } else {
        return [`You Win! ${playerSelection} beats ${computerSelection}`, 1]
    }
}


function game() {
    const buttons = document.querySelectorAll('button');
    const results = document.querySelector('#results');
    const scoreBoard = document.querySelector('#score')
    let playerScore = 0
    let computerScore = 0

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let roundResults = playRound(button.dataset.choice, getComputerChoice())
            results.innerHTML = roundResults[0]
            if (roundResults[1] === 1) {
                playerScore ++;
                results.style.color = 'lightgreen'
            } else if (roundResults[1] === -1) {
                computerScore ++;
                results.style.color = 'red'
            } else {
                results.style.color = 'white'
            };

            scoreBoard.innerHTML = `Player ${playerScore}/${computerScore} Computer`

            if (playerScore === 3 || computerScore === 3) {
                if (playerScore === 3) {
                    setTimeout(function () { alert("You Win!"); }, 1);
                } else {
                    setTimeout(function () { alert("You Lose!"); }, 1);
                }
                playerScore = 0;
                computerScore = 0;
                scoreBoard.innerHTML = `Player ${playerScore}/${computerScore} Computer`
                results.innerHTML = "Select Rock, Paper, or Scissors to play! First to 3 points Wins!";
                results.style.color = 'white'
            }

        })
    })    
}

game();
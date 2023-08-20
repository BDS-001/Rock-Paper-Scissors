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
    let score = 0
    let total = 0

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let roundResults = playRound(button.dataset.choice, getComputerChoice())
            results.innerHTML = roundResults[0]
            if (roundResults[1] === 1) {
                score ++;
                total ++;
            } else if (roundResults[1] === -1) {
                total ++;
            };

            scoreBoard.innerHTML = `${score}/${total}`

            if (total === 5) {
                if (score >= 3) {
                    alert('You Win!')
                } else {
                    alert('You Lose!')
                }
            }

        })
    })    
}

game();
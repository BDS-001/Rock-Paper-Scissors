const CHOICES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Tie! You both picked ${playerSelection}`)
        return 0;
    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return -1;
    } else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return 1;
    }
}



function game() {

    let score = 0
    for (i = 0; i < 5; i++) {
        let player = prompt('Select "Rock", "Paper","Scissors":')
        player = player[0].toUpperCase() + player.slice(1).toLowerCase()

        let round = playRound(player, getComputerChoice())
        if (round === 1) {
            score ++;
        }
    }
    console.log(`Score:${score}`)
}

game();
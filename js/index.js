let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
// playGame();
let btns = document.querySelectorAll('.selection')
console.log(btns)
btns.forEach(btn => {

    btn.addEventListener('click', () => {
        getComputerChoice();
        getPlayerChoice(btn.dataset.selection);
        let roundResult = playRound(computerChoice, playerChoice);
        showResult(computerChoice, playerChoice, roundResult);
        computeScore(roundResult);
    })
})

function getComputerChoice () {
    const computerNum = Math.floor(Math.random() * 3 + 1);
    computerChoice = (computerNum === 1) ? 'Rock' : (computerNum === 2) ? 'Paper' : 'Scissors';
}
function getPlayerChoice (choice) {
    playerChoice = choice;
    if(playerChoice.toLowerCase() == 'rock' || playerChoice.toLowerCase() == 'paper' || playerChoice.toLowerCase() == 'scissors'){
        playerChoice = playerChoice.toLowerCase();
        playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    } else{
        alert('Choice invalid')
    }
}
function playRound(computerSelection, playerSelection) {
    if(computerSelection === playerSelection){
        return 'Draw'
    } else if(playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
            return 'Player'
        } else {
            return 'Computer'
        }
    } else if (playerSelection === 'Rock') {
        if(computerSelection === 'Scissors') {
            return 'Player'
        } else {
            return 'Computer'
        }
    } else if (playerSelection === 'Scissors') {
        if(computerSelection === 'Paper') {
            return 'Player'
        } else {
            return 'Computer'
        }
    }
}
function showResult(computerChoice, playerChoice, roundResult){
    const playerParagraph = document.querySelector('.player');
    const computerParagraph = document.querySelector('.computer');
    const winnerParagraph = document.querySelector('.round-result');
    playerParagraph.textContent = `Player chooses: ${playerChoice}`;
    computerParagraph.textContent = `Computer chooses ${computerChoice}`;
    winnerParagraph.textContent = roundResult === 'Player' ? `Congrats, you won!` : roundResult === 'Computer' ? 'What a shame, you lose.' : 'The round is a drawn'; 
}
function computeScore(roundResult){
    switch (roundResult) {
        case 'Player':
            ++playerScore;
            document.querySelector('.player-score').textContent = `Player: ${playerScore}`
            break;
        case 'Computer':
            computerScore++;
            document.querySelector('.computer-score').textContent = `Computer: ${computerScore}`
            break;
    }
    if(playerScore === 5 || computerScore === 5){
        const winnerIs = playerScore == 5 ? 'Player has won the game!' : 'Computer has won the game!';
        playerScore = 0
        computerScore = 0
        alert(`${winnerIs} Starting new game`);
        document.querySelector('.player-score').textContent = `Player: ${playerScore}`
        document.querySelector('.computer-score').textContent = `Computer: ${computerScore}`
    }
}
// function playGame () {
//     let playerScore = 0;
//     let computerScore = 0;
//     while(playerScore < 3 && computerScore < 3){
//         getPlayerChoice();
//         getComputerChoice();
//         console.log(`You chose ${playerChoice}`);
//         console.log(`Computer chooses ${computerChoice}`);
//         const roundResult = playRound(computerChoice, playerChoice);
//         switch (roundResult) {
//             case 'Player':
//                 ++playerScore;
//                 console.log('You win the round. Congrats!')
//                 break;
//             case 'Computer':
//                 ++computerScore;
//                 console.log('Computer wins the round.')
//                 break;
//             default: 
//                 console.log('Round is a draw')
//         }
//         console.log(`Score is: Player ${playerScore} x ${computerScore} Computer`)
//         if(playerScore === 3){
//             console.log('You won the game. Well Done!!')
//         } else if(computerScore === 3) {
//             console.log('You lost the game. Better luck next time.')
//         }
//     }
// }
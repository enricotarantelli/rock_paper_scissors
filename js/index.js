let computerChoice;
let playerChoice;

playGame();



function getComputerChoice () {
    const computerNum = Math.floor(Math.random() * 3 + 1);
    computerChoice = (computerNum === 1) ? 'Rock' : (computerNum === 2) ? 'Paper' : 'Scissors';
}
function getPlayerChoice () {
    playerChoice = prompt('Do you chose Rock, Paper or Scissors?', '');
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
function playGame () {
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 3 && computerScore < 3){
        getPlayerChoice();
        getComputerChoice();
        console.log(`You chose ${playerChoice}`);
        console.log(`Computer chooses ${computerChoice}`);
        const roundResult = playRound(computerChoice, playerChoice);
        switch (roundResult) {
            case 'Player':
                ++playerScore;
                console.log('You win the round. Congrats!')
                break;
            case 'Computer':
                ++computerScore;
                console.log('Computer wins the round.')
                break;
            default: 
                console.log('Round is a draw')
        }
        console.log(`Score is: Player: ${playerScore} x Computer: ${computerScore}`)
        if(playerScore === 3){
            console.log('You won the game. Well Done!!')
        } else if(computerScore === 3) {
            console.log('You lost the game. Better luck next time.')
        }
    }
}
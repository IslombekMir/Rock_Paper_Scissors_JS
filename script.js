//Scores
let computerScore = 0;
let userScore = 0;
let a = 0;
let b = 0;
let round = 0;


function getComputerChoice() {
    let computerChoice = ''
    let random = Math.floor(Math.random() * 3 + 1)
    
    //I will use this to make the comparison easier
    a = random;
    switch(random) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        default:
            computerChoice = 'Scissors';
    }
    return computerChoice;
}

function getUserChoice() {
    let userChoice = 0;
    let promptAns = +prompt(`Make a move
        1 - Rock
        2 - Paper
        3 - Scissors`)

    b = promptAns;

    switch(promptAns) {
        case 1:
            userChoice = 'Rock';
            break;
        case 2:
            userChoice = 'Paper';
            break;
        default:
            userChoice = 'Scissors';
    }
    return userChoice;
    
}

function playGround() {
    let comp = getComputerChoice();
    let user = getUserChoice();
    console.log(`
Computer: ${comp}
You: ${user}`)

    switch(a){
        case 1:
            switch(b) {
                case 1:
                    console.log('Draw')
                    break;
                case 2:
                    console.log('You WIN!')
                     userScore++;
                    break;
                case 3:
                    console.log('You LOSE!');
                     computerScore++;   
                     break;   
            }
            break;
        case 2:
            switch(b) {
                case 1:
                    console.log('You LOSE!');
                    computerScore++;
                    break;
                case 2:
                    console.log('Draw')
                    break;
                case 3:
                    console.log('You WIN!')
                    userScore++;
                    break;
            }
            break;
        case 3:
            switch(b) {
                case 1:
                    console.log('You WIN!');
                     userScore++;
                    break;
                case 2:
                    console.log('You LOSE!')
                    computerScore++;
                    break;
                case 3:
                    console.log('Draw'); 
                    break;
            }
            break;
    }

    console.log(`
You: ${userScore}
Computer: ${computerScore}`)
}

function playGame() {
    round++;
    console.log('Round: ' + round);
    playGround();

    if(round === 5) {
        console.log('The game is over')
        if(userScore === computerScore) {
            console.log('It was a draw')
        }
        console.log(userScore > computerScore ? 'You won the tournament!' : 'You lost to a damn computer');

    }
}


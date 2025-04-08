function getcomputerChoice() {
    const choices = ['Rock, Paper, Scissors'];
    const randomindex = Math.floor(Math.random() * choices.length);
    return choices[randomindex];
}

function getHumanChoice() {
    const humanInput = prompt('Enter either rock, paper, or scissors').toLowerCase(); 
    if (humanInput === 'rock' || humanInput === 'paper' || humanInput === 'scissors') {
        return humanInput; 
    } else {
        alert("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
        return null; 
    }
}



function playGame() {
    
let humanScore = 0;

let computerScore = 0;

for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);

    const humanChoice = getHumanChoice();
    if (!humanChoice) return; 


    const computerChoice = getcomputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    const roundWinner = playRound(humanChoice, computerChoice);
    if (roundWinner === 'human') {
        humanScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
    }
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); 
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a bloody tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') 
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer"
    }
}
}


         





let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
   
    let computerMove;

   let choice = Math.floor((Math.random() * 3) + 1);

   if (choice == 1) {
    computerMove = "rock"
   }
   else if (choice == 2) {
    computerMove = "paper"
   }
   else {
    computerMove = "scissors"
   }
     return computerMove;
}

function getPlayerChoice() {  

    let correct = 0;
    let choice = "";
    
    do {
    choice = prompt("Please enter rock, paper, or scissors").toLowerCase();
    switch (choice) {
        case "rock":
            correct = correct++;
            return choice;
            break;
        case "paper":
            correct = correct++;
            return choice;
            break;
        case "scissors":
            correct = correct++;
            return choice;
            break;
        default:
            alert("You have not entered a correct option");
            break;
    }

    } while (correct < 1);
    
}

function gameRound() {

let computerChoice = getComputerChoice();
let userChoice = getPlayerChoice();
;

    if (userChoice == computerChoice) {
        alert("The game is a draw");
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        alert(`You win! ${userChoice} beats ${computerChoice}`);
        playerWins++;
    }
    else if (userChoice == "paper" && computerChoice == "rock") {
        alert(`You win! ${userChoice} beats ${computerChoice}`);
        playerWins++;
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        alert(`You win! ${userChoice} beats ${computerChoice}`);
        playerWins++;
    }
    else {
        alert(`You lose! ${computerChoice} beats ${userChoice}`);
        computerWins++;
    }
    return playerWins && computerWins;
}

function game() {

    let gameRoundPlayed = 1;

    for (gameRoundPlayed = 1; gameRoundPlayed <= 5; gameRoundPlayed++) {
        gameRound();
        console.log(gameRoundPlayed);
        console.log(`player wins is ${playerWins}`);
        if (gameRoundPlayed == 5 && playerWins > computerWins) {
        alert(`You win by ${playerWins} to ${computerWins}`);
    }
    else if (gameRoundPlayed == 5 && playerWins < computerWins) {
        alert(`You lose by ${computerWins} to ${playerWins}`);
    }
    else if (gameRoundPlayed == 5 && playerWins == computerWins) {
        alert("The game has ended in a draw");
    }
    }
    
    
}

game();
    

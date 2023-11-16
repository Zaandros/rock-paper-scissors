
let playerWins = 0;
let computerWins = 0;
let choice = "";
let gameRoundPlayed = 0;



function startGame() {
    console.log(gameRoundPlayed);
    const ROCK = document.querySelector(".rock");
    const PAPER = document.querySelector(".paper");
    const SCISSORS = document.querySelector(".scissors");


    ROCK.addEventListener("click", getRock);
    PAPER.addEventListener("click", getPaper);
    SCISSORS.addEventListener("click", getScissors);
}

function getRock() {
        choice = "rock";
        game();
       
}
    
function getPaper() {
        choice = "paper";
        game();
        
}
    
function getScissors() {
        choice = "scissors";
        game();
        
}

function game() {


    do {
        gameRound();
        console.log("The rounds played is " + gameRoundPlayed);
        console.log(`player wins is ${playerWins}`);
        if (gameRoundPlayed == 5 && playerWins > computerWins) {
        alert(`You win by ${playerWins} to ${computerWins}`);
        break;
    }
    else if (gameRoundPlayed == 5 && playerWins < computerWins) {
        alert(`You lose by ${computerWins} to ${playerWins}`);
        break;
    }
    else if (gameRoundPlayed == 5 && playerWins == computerWins) {
        alert("The game has ended in a draw");
        break;
    }
    else if (gameRoundPlayed < 5) {
        startGame();
        break;
    }

    } while (gameRoundPlayed <= 5)
    
}

function gameRound() {

let computerChoice = getComputerChoice();
let userChoice = getPlayerChoice();


    if (userChoice == computerChoice) {
        alert("The game is a draw");
        gameRoundPlayed++
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        alert(`You win! ${userChoice} beats ${computerChoice}`);
        gameRoundPlayed++
        playerWins++;
    }
    else if (userChoice == "paper" && computerChoice == "rock") {
        alert(`You win! ${userChoice} beats ${computerChoice}`);
        gameRoundPlayed++
        playerWins++;
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        alert(`You win! ${userChoice} beats ${computerChoice}`);
        gameRoundPlayed++
        playerWins++;
    }
    else {
        alert(`You lose! ${computerChoice} beats ${userChoice}`);
        gameRoundPlayed++
        computerWins++;
    }
   
    return playerWins && computerWins;
}

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

    do {

        switch (choice) {
            case "rock":
                correct++
                return choice;
                break;
            case "paper":
                correct++
                return choice;
                break;
            case "scissors":
                correct++
                return choice;
                break;
            default:
                alert("You have not pressed a button");
                break;
        }

    
    } while (correct < 1)

        
}


startGame();





 




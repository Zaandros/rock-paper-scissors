
let playerWins = 0;
let computerWins = 0;
let choice = "";
let gameRoundPlayed = 0;
let runningScoreDiv = document.querySelector(".running-score");
const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
const computerChoice = document.querySelector(".computer-choice")
const playerChoice = document.querySelector(".player-choice");

computerChoice.style.visibility = "hidden";
playerChoice.style.visibility = "hidden";


function startGame() {

    console.log(gameRoundPlayed);
    
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
        //runningScoreDiv.style.visibility = "visible";
        runningScoreDiv.textContent = `Player score ${playerWins} ${computerWins} Computer score`;
        console.log(`player wins is ${playerWins}`);
        if (playerWins == 5) {
            runningScoreDiv.textContent = `Player wins by ${playerWins} to ${computerWins}`;
        endGame();
        break;
    }
    else if (computerWins == 5) {
        runningScoreDiv.textContent = `Computer wins by ${computerWins} to ${playerWins}`;
        endGame();
        break;
    }
    else if (playerWins < 5 || computerWins < 5) {
        startGame();
        break;
    }

    } while (gameRoundPlayed <= 5)
    
}

function gameRound() {

let computerChoice = getComputerChoice();
let userChoice = getPlayerChoice();


    if (userChoice == computerChoice) {
        gameRoundPlayed++
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        gameRoundPlayed++
        playerWins++;
    }
    else if (userChoice == "paper" && computerChoice == "rock") {
        gameRoundPlayed++
        playerWins++;
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        gameRoundPlayed++
        playerWins++;
    }
    else {
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
    computerChoice.style.visibility = "visible";
    computerChoice.textContent = "Rock";
   }
   else if (choice == 2) {
    computerMove = "paper"
    computerChoice.style.visibility = "visible";
    computerChoice.textContent = "Paper";
   }
   else {
    computerMove = "scissors"
    computerChoice.style.visibility = "visible";
    computerChoice.textContent = "Scissors";
   }
     return computerMove;
}

function getPlayerChoice() {  

    
    let correct = 0;   

    do {

        switch (choice) {
            case "rock":
                correct++
                playerChoice.style.visibility = "visible";
                playerChoice.textContent = "Rock";
                return choice;
                break;
            case "paper":
                correct++
                playerChoice.style.visibility = "visible";
                playerChoice.textContent = "Paper";
                return choice;
                break;
            case "scissors":
                correct++
                playerChoice.style.visibility = "visible";
                playerChoice.textContent = "Scissors";
                return choice;
                break;
            default:
                alert("You have not pressed a button");
                break;
        }

    
    } while (correct < 1)

        
}

function endGame() {

    ROCK.style.visibility = "hidden";
    SCISSORS.style.visibility = "hidden";
    PAPER.textContent = "Restart";
    PAPER.addEventListener("click", restartGame);
}

function restartGame() {
    playerWins = 0;
    computerWins = 0;
    computerChoice.style.visibility = "hidden";
    playerChoice.style.visibility = "hidden";
    runningScoreDiv.textContent = `Player score ${playerWins} ${computerWins} Computer score`;
    location.reload();
}

startGame();





 




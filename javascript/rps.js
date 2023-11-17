
let playerWins = 0;
let computerWins = 0;
let choice = "";
let gameRoundPlayed = 0;
let runningScoreDiv = document.querySelector(".running-score");
const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");



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
        runningScoreDiv.textContent = `Player score ${playerWins} ${computerWins} Computer score`
        console.log(`player wins is ${playerWins}`);
        if (playerWins == 5) {
            alert("Player wins");
        endGame();
        break;
    }
    else if (computerWins == 5) {
        alert("Computer wins");
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

function endGame() {
    

    ROCK.setAttribute("disabled", "disabled");
    PAPER.setAttribute("disabled", "disabled");
    SCISSORS.setAttribute("disabled", "disabled");
    
    
}

function restartGame() {
    const BODY = document.getElementsByClassName("running-score");
    let restartGame = document.createElement('div');
    restartGame.textContent = "Restart";
    BODY.appendchild(restartGame);
}

startGame();





 




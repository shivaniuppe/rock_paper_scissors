const result = document.getElementById('result');
let computerWins = 0;
let playerWins = 0;
let compPlay = ["rock", "raper", "scissors"];


const divCount = document.getElementById('divCount');
const divPlayerCount = document.createElement('div');
const divComputerCount = document.createElement('div');
divCount.appendChild(divPlayerCount);
divCount.appendChild(divComputerCount);
divCount.setAttribute('id', 'divCount');
divPlayerCount.setAttribute('id', 'divPlayerCount');
divComputerCount.setAttribute('id', 'divComputerCount');
function displayCount(){
    divPlayerCount.textContent = "player: " + playerWins;
    divComputerCount.textContent = "computer: " + computerWins;   
}



const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => {
    playRound("rock", computerSelection);

});

paperButton.addEventListener('click', () => {
    playRound("paper", computerSelection);

});
scissorsButton.addEventListener('click', () => {
    playRound("scissors", computerSelection);

})

function computerPlay(plays){
    let res = plays[Math.floor(Math.random() * compPlay.length)];
    return res;
}

let computerSelection = computerPlay(compPlay);
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            result.textContent = `you lose :(( ${computerSelection} beats ${playerSelection}`;
            computerWins++;
            displayCount();
            if(computerWins == 5){
                restartGame();
            }
        }
        else if(computerSelection == "scissors"){
            result.textContent = `you win :D ${playerSelection} beats ${computerSelection}`;
            playerWins++;
            displayCount();
            if(playerWins == 5){
                restartGame();
            }       
        }
        else{
            result.textContent = `it's a draw :v`;
            displayCount();    
        }
    }
    if(playerSelection == "paper"){    
        if(computerSelection == "scissors"){
            result.textContent = `you lose :(( ${computerSelection} beats ${playerSelection}`;
            computerWins++;
            displayCount();
            if(computerWins == 5){
                restartGame();
            }       
        }
        else if(computerSelection == "rock"){
            result.textContent = `you win :D ${playerSelection} beats ${computerSelection}`;
            playerWins++;
            displayCount();
            if(playerWins == 5){
                restartGame();
            }
        }
        else{
            result.textContent = `it's a draw :v`;
            displayCount();   
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            result.textContent = `you lose :(( ${computerSelection} beats ${playerSelection}`;
            computerWins++;
            displayCount();
            if(computerWins == 5){
                restartGame();
            }                   
        }
        else if(computerSelection == "paper"){
            result.textContent = `you win :D ${playerSelection} beats ${computerSelection}`;
            playerWins++;
            displayCount();
            if(playerWins == 5){
                restartGame();
            }                    
        }
        else{
            result.textContent = `it's a draw :v`;
            displayCount();                  
        }  
    }
}


function restartGame(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    result.value = '';
    const finalResult = document.getElementById('final-result-modal');
    finalResult.style.display = "flex";
    finalResult.style.flexDirection = "column";
    finalResult.style.alignItems = "center";
    const textResult = document.createElement('p');
    textResult.setAttribute('id', 'textResult');
    if(computerWins > playerWins){
        textResult.textContent = "you lose :((";
    }
    else{
        textResult.textContent = "you win :D";
    }
    const restartButton = document.createElement('button');
    restartButton.textContent = "restart";
    restartButton.setAttribute('id', 'restartButton');
    finalResult.appendChild(textResult);
    finalResult.appendChild(restartButton);
    restartButton.addEventListener('click', () => reload());

    computerWins = 0;
    playerWins = 0;
}


function reload(){
    location.reload();
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}
    


function game(){
    let computerWins = 0;
    let playerWins = 0;
    let i;
    for(i = 0; i <= 5; i++){
        let pchoice = prompt("Enter your choice : ");
        let firstChar = pchoice.charAt(0).toUpperCase();
        let rest = pchoice.slice(1);
        let playerSelection = firstChar + rest;
        let compPlay = ["Rock", "Paper", "Scissors"];
        function computerPlay(plays){
            let result = plays[Math.floor(Math.random() * compPlay.length)];
            return result;
            alert(result);
        }
        let computerSelection = computerPlay(compPlay);
        function playRound(playerSelection, computerSelection){
            if(playerSelection == "Rock"){
                if(computerSelection == "Paper"){
                    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
                    computerWins++;
                }
                else if(computerSelection == "Scissors"){
                    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
                    playerWins++;
                }
                else{
                    alert(`Draw`);
                }
            }
            else if(playerSelection == "Paper"){    
                if(computerSelection == "Scissors"){
                    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
                    computerWins++;
                }
                else if(computerSelection == "Rock"){
                    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
                    playerWins++;
                }
                else{
                    alert(`Draw`);
                }
            }
            else if(playerSelection == "Scissors"){
                if(computerSelection == "Rock"){
                    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
                    computerWins++;
                }
                else if(computerSelection == "Paper"){
                    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
                    playerWins++;
                }
                else{
                    alert(`Draw`);
                }  
            }
            else{
                alert("Enter a valid choice");
                i--;
            }
        }
        playRound(playerSelection, computerSelection);
        alert(`Player : ${playerWins}; Computer : ${computerWins}`);
    }
    if(playerWins > computerWins){
        alert("You win");
    }
    else if(playerWins < computerWins){
        alert("You lose");
    }
    else{
        alert("It's a draw");
    }
}

game();
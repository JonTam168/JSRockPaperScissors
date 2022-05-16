let win = 0;
let lose = 0;
let playerChoice = '';
let result = '';

function computerPlay(){
    const comp = ['rock', 'paper', 'scissors']

    return comp[Math.floor(Math.random()*comp.length)]
}

function playRound(playerSelect, computerSelect){
    if(playerSelect === 'rock' && computerSelect === 'rock'){
            return "It's a tie! Rock and Rock!"
    }
    else if (playerSelect === 'rock' && computerSelect === 'paper'){
        ++lose
        if(win === 5 || lose === 5){
            win = 0;
            lose = 0;
            return totalresults.textContent = 'You lose! Try again';
        }
        totalresults.textContent = `Wins: ${win} Loses: ${lose}`;
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelect === 'rock' && computerSelect === 'scissors'){
        ++win
        if(win === 5 || lose === 5){
            win = 0;
            lose = 0;
            return totalresults.textContent = 'You Win! Try again';
        }
        totalresults.textContent = `Wins: ${win} Loses: ${lose}`;
        return "You Win! Rock beats Paper"
    }
    else if (playerSelect === 'paper' && computerSelect === 'rock'){
        ++win
        if(win === 5 || lose === 5){
            win = 0;
            lose = 0;
            return totalresults.textContent = 'You Win! Game Over';
        }
        totalresults.textContent = `Wins: ${win} Loses: ${lose}`;
        return "You Win! Paper beats Rock"
    }
    else if(playerSelect === 'paper' && computerSelect === 'paper'){
        return "It's a tie! Paper and Paper"
    }
    else if(playerSelect === 'paper' && computerSelect === 'scissors'){
        ++lose
        if(win === 5 || lose === 5){
            win = 0;
            lose = 0;
            return totalresults.textContent = 'You lose! Try again';
        }
        totalresults.textContent = `Wins: ${win} Loses: ${lose}`;
        return "You Lose! Paper loses to Scissors"
    }
    else if(playerSelect === 'scissors' && computerSelect === 'rock'){
        ++lose
        if(win === 5 || lose === 5){
            win = 0;
            lose = 0;
            return totalresults.textContent = 'You lose! Try again';
        }
        totalresults.textContent = `Wins: ${win} Loses: ${lose}`;
        return "You Lose! Scissors loses to rock"
    }
    else if (playerSelect === 'scissors' && computerSelect === 'paper'){
        ++win
        if(win === 5 || lose === 5){
            win = 0;
            lose = 0;
            return totalresults.textContent = 'You Win! Game Over';
        }
        totalresults.textContent = `Wins: ${win} Loses: ${lose}`;
        return "You Win! Scissors beats paper"
    }
    else if(playerSelect === 'scissors' && computerSelect === 'scissors'){
        return "It's a tie! Scissors and Scissors"
    }
}
/*function validate(playerChoice){
    if(playerChoice === 'rock'){
        return playerChoice
    }
    else if(playerChoice === 'paper'){
        return playerChoice
    }
    else if(playerchoice === 'scissors'){
        return playerChoice
    }
    else{
        playerChoice = prompt("Please try again!")
        validate(playerChoice.toLowerCase())
    }
}*/

/*function game(){
    /*for (let i=0; i<5;i++){ 
        let condition = ''
        /*let playerChoice = prompt("Pick Rock, Paper or Scissors:")*/
        /*validate(playerChoice)
        console.log(playerChoice)
        condition = playRound(playerChoice.toLowerCase(), computerPlay()) 
        console.log(condition)
        if (condition.match("Win")){
            win++;
        }
        else if(condition.match("Lose")){
            lose++
        }
        console.log("Wins: " + win + " Loses: " + lose)
    }
/*}*/

const rock = document.getElementById('rock');
rock.addEventListener('click', () => (divresults.textContent = playRound('rock', computerPlay())));

const paper = document.getElementById('paper');
paper.addEventListener('click', () => (divresults.textContent = playRound('paper', computerPlay())));

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => (divresults.textContent = playRound('scissors', computerPlay()))); 

const divresults = document.getElementById('results');
divresults.textContent = 'Get Ready!'
divresults.setAttribute('style', 'margin-top: 20px;');

const totalresults = document.getElementById('total');
totalresults.textContent = `Wins: ${win} Loses: ${lose}`;

function computerPlay(){
    const comp = ['rock', 'paper', 'scissors']

    return comp[Math.floor(Math.random()*comp.length)]
}
let win = 0;
let lose = 0;

function playRound(playerSelect, computerSelect){
    if(playerSelect === 'rock' && computerSelect ==='rock'){
            return "It's a tie! Rock and Rock!"
    }
    else if (playerSelect === 'rock' && computerSelect === 'paper'){
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelect === 'rock' && computerSelect === 'scissors'){
        return "You Win! Rock beats Paper"
    }
    else if (playerSelect === 'paper' && computerSelect === 'rock'){
        return "You Win! Paper beats Rock"
    }
    else if(playerSelect === 'paper' && computerSelect === 'paper'){
        return "It's a tie! Paper and Paper"
    }
    else if(playerSelect === 'paper' && computerSelect === 'scissors'){
        return "You Lose! Paper loses to Scissors"
    }
    else if(playerSelect === 'scissors' && computerSelect === 'rock'){
        return "You Lose! Scissors loses to rock"
    }
    else if (playerSelect === 'scissors' && computerSelect === 'paper'){
        return "You Win! Scissors beats paper"
    }
    else if(playerSelect === 'scissors' && computerSelect === 'scissors'){
        return "It's a tie! Scissors and Scissors"
    }
}

function game(){
    for (let i=0; i<5;i++){

        let play = prompt("Pick Rock, Paper or Scissors:")
        playRound(play.toLowerCase(), computerPlay()) 
    }
}

console.log(game());
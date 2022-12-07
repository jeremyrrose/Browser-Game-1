let playerBet= document.getElementById("playerBet")
let playerBetButton=document.getElementById("playerBetButton");
playerBetButton.addEventListener('click',betOnPlayer)

let bankerBet = document.getElementById("bankerBet");
let bankerBetButton=document.getElementById("bankerBetButton");
bankerBetButton.addEventListener('click',betOnBanker)

let tieBet= document.getElementById("tieBet");
let tieBetButton=document.getElementById("tieBetButton");
tieBetButton.addEventListener('click',betOnTie)

// let clearAllButton=document.getElementById("clearAll");
// clearAllButton.addEventListener('click',resetBets)

var betAmount=document.getElementById("amountWagered")

function betOnBanker(){
    resetBets();    
    bankerBet.innerText=amountwagered.value;
}



function betOnPlayer(){
    resetBets();
playerBet.innerText=amountwagered.value;
}


function betOnTie(){
resetBets();
    tieBet.innerText=amountwagered.value;

}

function resetBets(){
tieBet.innerText=""
playerBet.innerText=""
bankerBet.innerText=""
}

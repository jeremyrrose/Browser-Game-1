var playerBet= document.getElementById("playerBet")

var bankerBet= document.getElementById("bankerBet")

var tieBet= document.getElementById("tieBet")


var betAmount=document.getElementById("amountwagered")

function betOnBanker(){
bankerBet.innerText=amountwagered.value
}



function betOnPlayer(){
playerBet.innerText=amountwagered.value
}


function betOnTie(){
tieBet.innerText=amountwagered.value
}

function resetBets(){
betAmount.value=0
}


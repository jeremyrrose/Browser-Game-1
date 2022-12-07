// consistent DOM elements
const gameResults=document.getElementById("scoreComparison")
const dealbtn = document.getElementById("deal");
const payoutDiv = document.getElementById('payout')

// Game state
const gameState = {
    hands: {
        player: [],
        dealer: []
    },
    bank: 5000
}

// Card class
class Card{
	constructor(cardval,suit){
    	this.cardval=cardval;

        if (cardval <= 10){
            this.value=this.cardval;// sets val of card based on param
        }else{
            this.value=0;
        }

        if (suit == 1){
            this.suit = "hearts";
            }else if(suit == 2){
                this.suit = "spades";
            }else if(suit == 3){
                this.suit = "clubs";
            }else if(suit == 4){
                this.suit = "diamonds";
            }

        // condtions for random number param from 1-13
        if (cardval <= 10 && cardval !=1){
            this.src = `./Assets/Cards/${this.cardval}_${this.suit}.png`;
        } else if(cardval == 11){
            this.src = `./Assets/Cards/jack_${this.suit}.png`;
        } else if(cardval == 12){
            this.src = `./Assets/Cards/queen_${this.suit}.png`;
        } else if(cardval == 13){
            this.src = `./Assets/Cards/king_${this.suit}.png`;
        } else if(cardval == 1) {
            this.src = `./Assets/Cards/ace_${this.suit}.png`;
        }
    }
}

// given an arrayOfCards of any length, calculate its baccarat score
// parameters:
// arrayOfCards - an array of Card objects
function calculateScore (arrayOfCards) {
    let score = 0
    for (let i=0; i < arrayOfCards.length; i++) {
        score += arrayOfCards[i].value
    }
    console.log(score%10)
    return score%10
}

// draw some cards and store them in gameState
// parameters:
// target - "player" or "dealer" (this must match one of the keys in gameState.hands)
function drawCards (target) {
    // clear the hand in gameState and establish a reference to it as "targetHand" for use in this function
    gameState.hands[target] = []
    let targetHand = gameState.hands[target]

    // put two cards in the hand
    targetHand.push(new Card(randomRange(1,13),randomRange(1,4)))
    targetHand.push(new Card(randomRange(1,13),randomRange(1,4)))

    // get score for the first two cards
    let score = calculateScore(targetHand)

    // as long as the score is below 5, keep drawing cards
    // (i may be misunderstanding baccarat here -- you could also set this to stop at a certain number of cards )
    while (score <= 5) {
        targetHand.push(new Card(randomRange(1,13),randomRange(1,4)))
        score = calculateScore(targetHand)
    }
}

// render a hand from gameState to the DOM
// parameters:
// target - "player" or "dealer" (this must match one of the keys in gameState.hands)
function renderCards (target) {
    // get the cards to render from gameState
    const cardsToRender = gameState.hands[target]

    // get the elements from the DOM 
    // this will be either "playerCard" or "bankerCard" based on the target)
    const handDiv = document.getElementById(target+"Card")
    handDiv.innerHTML = "" // clear out any cards from the previous hand -- this _could_ be a separate function
    // this will be either "playerValueIndicator" or "bankerValueIndicator" based on the target)
    const indicatorDiv = document.getElementById(target+"ValueIndicator")

    // render as many cards as there are in the hand
    cardsToRender.forEach(card => {
        const cardElement = document.createElement('img')
        cardElement.src = card.src
        handDiv.append(cardElement)
    })

    // add text information about hand score
    indicatorDiv.innerHTML = `${target.toUpperCase()} has ${calculateScore(cardsToRender)}.`
}

function determineWinner() {
    const playerScore = calculateScore(gameState.hands.player)
    const bankerScore = calculateScore(gameState.hands.banker)

    // these conditions just print a simple message
    // but you could invoke other functions in this code block...
    // to reset the bets, add other messages, anything!
    // (you'd just have to write those functions)

    if (playerScore > bankerScore) {
        gameResults.innerHTML = "Player wins!"
        return "player"
    } else if (bankerScore > playerScore) {
        gameResults.innerHTML = "Banker wins!"
        return "banker"
    } else {
        gameResults.innerHTML = "It's a tie."
        return "tie"
    }
}

// distribute winnings based on a 'winner' string
// parameters:
// winner - either "player", "banker" or "tie", returned from determineWinner function
function distribute (winner) {
    if (winner === "player") {
        gameState.bank += Number(playerBet.innerText)
        gameState.bank -= bankerBet.innerText
        gameState.bank -= tieBet.innerText
    } else if (winner === "banker") {
        gameState.bank -= playerBet.innerText
        gameState.bank += Number(bankerBet.innerText)
        gameState.bank -= tieBet.innerText
    } else {
        gameState.bank -= playerBet.innerText
        gameState.bank -= bankerBet.innerText
        gameState.bank += Number(tieBet.innerText)
    }
    payoutDiv.innerHTML = `Bank: ${gameState.bank}`
}

function playRound() {

    // this almost looks like pseudocode, right?
    // this is one reason to turns individual tasks into functions -- helps it make sense!
    drawCards('player')
    renderCards('player')
    
    drawCards('banker')
    renderCards('banker')
    
    // pass the return value of determineWinner into distribute as an argument
    distribute(determineWinner())

}

dealbtn.addEventListener("click", playRound)

//////////////////////
//////////////////////
// END REFACTOR
//////////////////////
//////////////////////

function randomRange(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}

// function totalTheHands() {
//   playerTotal = (playercard1.value + playercard2.value) % 10;
//   bankerTotal = (bankercard1.value + bankercard2.value) % 10;
//   compareHandsForNaturals();
// }

// function totalTheHands2() {
//   playerTotal = (playercard1.value + playercard2.value + pnewcardel.value) % 10;
//   bankerTotal = (bankercard1.value + bankercard2.value + bnewcardel.value) % 10;
//   compareHandsFinal();
// }
function playerNatural(){
    if (playerTotal == 8 || playerTotal == 9)
playercardel.innerHTML = `Player has a natural! ${playerTotal}`
}

function bankerNatural(){
    if (bankerTotal == 8 || bankerTotal == 9)
bankercardel.innerHTML = `Banker has a natural! ${bankerTotal}`
}
function compareHandsForNaturals(){

}
// function payOut(){
//     betAmount()+=
// }


function compareHandsFinal(){

}
// let dealbtn = document.getElementById("deal");
let okprompt = document.createElement("p");
okprompt.id = "okprompt";

okprompt.addEventListener("click",function () {
    if(playerTotal%10 <= 5){
        playercardel.append(pnewcardel);
    }
    else{
    bankercardel.innerHTML = "";
    playercardel.innerHTML = "";
    okprompt.remove();
    dealbtn.disabled = false;
    }
});

// changing this to doubleclick to disable
dealbtn.addEventListener("doubleclick",function(){
    dealbtn.removeAttribute('disabled');
    let bankercard1 = document.createElement("img");
    let bankercard2 = document.createElement("img");
    let playercard1 = document.createElement("img");
    let playercard2 = document.createElement("img");

    bcard1=new Card(randomRange(1,13),randomRange(1,4));
    bcard2=new Card(randomRange(1,13),randomRange(1,4));
    pcard1=new Card(randomRange(1,13),randomRange(1,4));
    pcard2=new Card(randomRange(1,13),randomRange(1,4));

    bankercard1.src = bcard1.src;
    bankercard2.src = bcard2.src;

    playercard1.src = pcard1.src;
    playercard2.src = pcard2.src;

    bankercardel.append(bankercard1);
    bankercardel.append(bankercard2);

    playercardel.append(playercard1);
    playercardel.append(playercard2);

    let playerTotal = (pcard1.value + pcard2.value)%10;
    let playerValue = document.getElementById("playerValueIndicator");
    playerValue.innerHTML=`The player has a ${playerTotal}`;
    
    let bankerTotal = (bcard1.value + bcard2.value)%10;
    let bankerValue = document.getElementById("bankerValueIndicator");
    bankerValue.innerHTML=`The banker has a ${bankerTotal}`; 


    let gameResults=document.getElementById("scoreComparison")
    z = document.createElement("p");
    z.innerHTML=`Player total: ${playerTotal} Banker total: ${bankerTotal}`;
    // gameResults.append(z);

    // playerTotal = (pcard1.value + pcard2.value+ pnewcard.value)%10;
    // playerValue.innerHTML=`The player has a ${playerTotal}`;

    
    // bankerTotal = (bcard1.value + bcard2.value+ bnewcard.value)%10;
    // bankerValue.innerHTML=`The banker has a ${bankerTotal}`;

//     // document.createElement()
//     let bankerTotal = bcard1.value + bcard2.value + bnewcard.value;
    
    // playerTotal > bankerTotal|| bankerTotal < 8 
    // =================================================
    // let playerTotal = pcard1.value + pcard2.value+ pnewcard.value;

    
    // // document.createElement()
    // let bankerTotal = bcard1.value + bcard2.value + bnewcard.value;
    // return bankerTotal;
    // return playerTotal;
    // ===============================================
    if(playerTotal == 8 || playerTotal == 9 ){
        console.log("player wins: "+ playerTotal + "vs"+ bankerTotal);
        okprompt.innerHTML = "Player Wins";
        winner = "Player";
        midel.append(okprompt);
        dealbtn.disabled = true;        
        gameResults.append(z);
        playerNatural();
// end of game because the player wins!
    }
    else if(bankerTotal == 8 || bankerTotal == 9){
        console.log("banker wins: "+ playerTotal + "vs"+ bankerTotal);
        okprompt.innerHTML = "Banker Wins";
        winner = "Banker";
        midel.append(okprompt);
        dealbtn.disabled = true;
        gameResults.append(z);
        bankerNatural();
    }
    else if(bankerTotal == playerTotal){
        console.log("tie");
        okprompt.innerHTML = "Tie!";
        winner = "Tie";
        midel.append(okprompt);
        dealbtn.disabled = true;
        gameResults.append(z);
    }
    else if(playerTotal%10 <= 5){
        pnewcard=new Card(randomRange(1,13),randomRange(1,4));
        let pnewcardel = document.createElement('img');
        pnewcardel.src = pnewcard.src;
        console.log("player pick new card");
        playercardel.append(pnewcardel);
        okprompt.innerHTML = "Player picked new card";
        midel.append(okprompt);
        dealbtn.disabled = true;
        playerTotal = (pcard1.value + pcard2.value+ pnewcard.value)%10;
        playerValue.innerHTML=`The player has a ${playerTotal}`;
        // okprompt.innerHTML = "?";
        midel.append(okprompt);
        gameResults.append(z);
    }    
    
        else if(bankerTotal%10 <= 5|| playerTotal<= 5){
        bnewcard=new Card(randomRange(1,13),randomRange(1,4));
        let bnewcardel = document.createElement('img');
        bnewcardel.src = bnewcard.src;
        console.log("Banker pick new card");
        playercardel.append(pnewcardel);
        okprompt.innerHTML = "Banker picked new card";
        midel.append(okprompt);
        dealbtn.disabled = true;
        bankerTotal = (bcard1.value + bcard2.value+ bnewcard.value)%10;
        bankerValue.innerHTML=`The banker has a ${bankerTotal}`;
        // okprompt.innerHTML = "?";
        midel.append(okprompt);
        gameResults.append(z);
    }
    // else if(playerTotal%10 <= 5){
    //     bnewcard=new card(randomRange(1,13),randomRange(1,4));
    //     console.log("?");
    //     winner = "?";
    //     okprompt.innerHTML = "?";
    //     midel.append(okprompt);
    //     dealbtn.disabled = true;
        
    // }
    
    // score is 8 or 9
    // higher score than opponent
    

    //not third pick aplicable 

    // if(playerTotal == 8 || playerTotal == 9){

    // }



});

let winnerDisplay=document.getElementById("winner");


var resultsFromHand ="Player Score: ${playerTotal} VS Banker Score: ${bankerTotal}"
function addScoreDisplay(){
    let scoreDisplay=document.getElementById("scoreComparison");
    scoreDisplay.createElement.innerHTML.append=("Player Score: ${playerTotal} VS Banker Score: ${bankerTotal}")
    console.log(scoreDisplay);
    return(resultsFromHand);
    scoreDisplay.addEventListener("click", function () {
        this.addEventListener(dealbtn(),)
    });
};


// function computeHands(){
// }    

class card{
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
        this.src = `./Assets/${this.cardval}_${this.suit}.png`;
        }else if(cardval == 11){
            this.src = `./Assets/jack_${this.suit}.png`;
        }
        else if(cardval == 12){
    this.src = `./Assets/queen_${this.suit}.png`;
    }
    else if(cardval == 13){
        this.src = `./Assets/king_${this.suit}.png`;
        }
        else if(cardval == 1) {
            this.src = `./Assets/ace_${this.suit}.png`;
            }



}
    
  	displayInfo(){
        
    }
}





function randomRange(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}

let bankercardel = document.getElementById("bankerCard");
let playercardel = document.getElementById("playerCard");
let midel = document.getElementById("mid");

let bcard1 = null;
let bcard2 = null;
let pcard1 = null;
let pcard2 = null;
let playertotal = null;
let bankertotal = null;
let winner = null;

let dealbtn = document.getElementById("deal");
let okprompt = document.createElement("button");
okprompt.id = "okprompt";

okprompt.addEventListener("click",function () {
    if(playertotal%10 <= 5){

        playercardel.append(playercardel);
    }
    else{
    bankercardel.innerHTML = "";
    playercardel.innerHTML = "";
    okprompt.remove();
    dealbtn.disabled = false;}
});

dealbtn.addEventListener("click",function () {
    dealbtn.removeAttribute('disabled');
    let bankercard1 = document.createElement("img");
    let bankercard2 = document.createElement("img");
    let playercard1 = document.createElement("img");
    let playercard2 = document.createElement("img");

    bcard1=new card(randomRange(1,13),randomRange(1,4));
    bcard2=new card(randomRange(1,13),randomRange(1,4));
    pcard1=new card(randomRange(1,13),randomRange(1,4));
    pcard2=new card(randomRange(1,13),randomRange(1,4));
//    let playertotal = pcard1.value + pcard2.value+ pnewcard.value;

    
//     // document.createElement()
//     let bankertotal = bcard1.value + bcard2.value + bnewcard.value;
    bankercard1.src = bcard1.src;
    bankercard2.src = bcard2.src;

    playercard1.src = pcard1.src;
    playercard2.src = pcard2.src;

    bankercardel.append(bankercard1);
    bankercardel.append(bankercard2);

    playercardel.append(playercard1);
    playercardel.append(playercard2);

    
    // playertotal > bankertotal|| bankertotal < 8 
    // =================================================
    // let playertotal = pcard1.value + pcard2.value+ pnewcard.value;

    
    // // document.createElement()
    // let bankertotal = bcard1.value + bcard2.value + bnewcard.value;
    // return bankertotal;
    // return playertotal;
    // ===============================================
    if(playertotal == 8 || playertotal == 9 ){
        console.log("player wins: "+ playertotal + "vs"+ bankertotal);
        okprompt.innerHTML = "Player Wins";
        winner = "player";
        midel.append(okprompt);
        dealbtn.disabled = true;
// end of game because the player wins!
    }
    else if(bankertotal == 8 || bankertotal == 9){
        console.log("banker wins: "+ playertotal + "vs"+ bankertotal);
        okprompt.innerHTML = "Banker Wins";
        winner = "banker";
        midel.append(okprompt);
        dealbtn.disabled = true;
    }
    else if(bankertotal == playertotal){
        console.log("tie");
        okprompt.innerHTML = "Tie!";
        winner = "Tie";
        midel.append(okprompt);
        dealbtn.disabled = true;
    }
    else if(playertotal%10 <= 5){
        pnewcard=new card(randomRange(1,13),randomRange(1,4));
        let pnewcardel = document.createElement('img');
        pnewcardel.src = pnewcard.src;
        console.log("player pick new card");
        winner = "null";
        playercardel.append(pnewcardel);
        okprompt.innerHTML = "Player picked new card";
        midel.append(okprompt);
        dealbtn.disabled = true;
        // okprompt.innerHTML = "?";
        // midel.append(okprompt);
    }    else if(bankerTotal%10 <= 5|| playertotal<= 5){
        bnewcard=new card(randomRange(1,13),randomRange(1,4));
        let bnewcardel = document.createElement('img');
        bnewcardel.src = bnewcard.src;
        console.log("Banker pick new card");
        winner = "null";
        playercardel.append(pnewcardel);
        okprompt.innerHTML = "Banker picked new card";
        midel.append(okprompt);
        dealbtn.disabled = true;
        // okprompt.innerHTML = "?";
        // midel.append(okprompt);
    }
    // else if(playertotal%10 <= 5){
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

    // if(playertotal == 8 || playertotal == 9){

    // }



});

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

// let bankerTotal=""
// bankerValueIndicator


// let gameResults=document.getElementById("scoreComparison")
// let z = document.createElement("p");
// let string =`Player total: ${playertotal} Banker total: ${bankertotal}`;
// z.innerHTML=string;
// gameResults.append(z);

// function computeHands(){
// }    
// }

// let x = document.getElementById("bankerCard");
// let bankercardimg = document.createElement("img");
// bankercardimg.src = demo.src;
// x.append(bankercardimg);


// let dealbtn = document.getElementById("deal");


// dealbtn.addEventListener("click",function () {

//     let bankercard1 = document.createElement("img");
//     let bankercard2 = document.createElement("img");
//     let playercard1 = document.createElement("img");
//     let playercard2 = document.createElement("img");


//     bankercard1.src = new card((Math.floor(Math.random() * (13 - 1 + 1)) + 1),"spades",1).src;
//     bankercard2.src = new card((Math.floor(Math.random() * (13 - 1 + 1)) + 1),"hearts",1).src;

//     playercard1.src = new card((Math.floor(Math.random() * (13 - 1 + 1)) + 1),"hearts",1).src;
//     playercard2.src = new card((Math.floor(Math.random() * (13 - 1 + 1)) + 1),"hearts",1).src;

//     bankercardel.append(bankercard1);
//     bankercardel.append(bankercard2);

//     playercardel.append(playercard1);
//     playercardel.append(playercard2);

    



// });

// // let x = document.getElementById("bankerCard");
// // let bankercardimg = document.createElement("img");
// // bankercardimg.src = demo.src;
// // x.append(bankercardimg);
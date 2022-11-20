
// //Build initial Class 
// class cards{
// 	constructor(name,age){
//     	this.name=name;
//       	this.age=age;
//     }
//   	displayInfo(){
//     	return this.name + "is " + this.age + " years old!";
//     }
// }

// let classmate = new ClassMates("Mike Will",15);
// classmate.displayInfo();  // result: Mike Will is 15 years old!


// let deck = [card { value: 1, name: '1', suit: 'Hearts' },
// card { value: 2, name: '2', suit: 'Hearts' },
// card { value: 3, name: '3', suit: 'Hearts' },
// card { value: 4, name: '4', suit: 'Hearts' },
// card { value: 5, name: '5', suit: 'Hearts' },
// card { value: 6, name: '6', suit: 'Hearts' },
// card { value: 7, name: '7', suit: 'Hearts' },
// card { value: 8, name: '8', suit: 'Hearts' },
// card { value: 9, name: '9', suit: 'Hearts' },
// card { value: 10, name: '10', suit: 'Hearts' },
// card { value: 11, name: 'J', suit: 'Hearts' },
// card { value: 12, name: 'Q', suit: 'Hearts' },
// card { value: 13, name: 'K', suit: 'Hearts' },
// card { value: 1, name: '1', suit: 'Diamonds' },
// card { value: 2, name: '2', suit: 'Diamonds' },
// card { value: 3, name: '3', suit: 'Diamonds' },
// card { value: 4, name: '4', suit: 'Diamonds' },
// card { value: 5, name: '5', suit: 'Diamonds' },
// card { value: 6, name: '6', suit: 'Diamonds' },
// card { value: 7, name: '7', suit: 'Diamonds' },
// card { value: 8, name: '8', suit: 'Diamonds' },
// card { value: 9, name: '9', suit: 'Diamonds' },
// card { value: 10, name: '10', suit: 'Diamonds' },
// card { value: 11, name: 'J', suit: 'Diamonds' },
// card { value: 12, name: 'Q', suit: 'Diamonds' },
// card { value: 13, name: 'K', suit: 'Diamonds' },
// card { value: 1, name: '1', suit: 'Spades' },
// card { value: 2, name: '2', suit: 'Spades' },
// card { value: 3, name: '3', suit: 'Spades' },
// card { value: 4, name: '4', suit: 'Spades' },
// card { value: 5, name: '5', suit: 'Spades' },
// card { value: 6, name: '6', suit: 'Spades' },
// card { value: 7, name: '7', suit: 'Spades' },
// card { value: 8, name: '8', suit: 'Spades' },
// card { value: 9, name: '9', suit: 'Spades' },
// card { value: 10, name: '10', suit: 'Spades' },
// card { value: 11, name: 'J', suit: 'Spades' },
// card { value: 12, name: 'Q', suit: 'Spades' },
// card { value: 13, name: 'K', suit: 'Spades' },
// card { value: 1, name: '1', suit: 'Clubs' },
// card { value: 2, name: '2', suit: 'Clubs' },
// card { value: 3, name: '3', suit: 'Clubs' },
// card { value: 4, name: '4', suit: 'Clubs' },
// card { value: 5, name: '5', suit: 'Clubs' },
// card { value: 6, name: '6', suit: 'Clubs' },
// card { value: 7, name: '7', suit: 'Clubs' },
// card { value: 8, name: '8', suit: 'Clubs' },
// card { value: 9, name: '9', suit: 'Clubs' },
// card { value: 10, name: '10', suit: 'Clubs' },
// card { value: 11, name: 'J', suit: 'Clubs' },
// card { value: 12, name: 'Q', suit: 'Clubs' },
// card { value: 13, name: 'K', suit: 'Clubs' }
// ]
// function card(value, name, suit){
// // 	this.value = value;
// // 	this.name = name;
// // 	this.suit = suit;
// // }
// // let deck = function deck(){
// // 	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// // 	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
// // 	var cards = [];
    
// //     for( var s = 0; s < this.suits.length; s++ ) {
// //         for( var n = 0; n < this.names.length; n++ ) {
// //             cards.push( new card( n+1, this.names[n], this.suits[s] ) );
// // 			// if (card.Name = 10, 11, 12, 13) then return this.card.Value = 0

// //         }
		
// //     }

// //     return cards;
// // }
// // var myDeck = new deck();
// // console.log(myDeck);

// // https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

// // function shuffle(deck)
// // {
// // 	// for 1000 turns
// // 	// switch the values of two random cards
// // 	for (let i = 0; i < 1000; i++)
// // 	{
// // 		let location1 = Math.floor((Math.random() * deck.length));
// // 		let location2 = Math.floor((Math.random() * deck.length));
// // 		let tmp = deck[location1];

// // 		deck[location1] = deck[location2];
// // 		deck[location2] = tmp;
// // 	}
// // }
// // shuffle(deck);
// // ========================================================================
// // function getDeck()
// // {
// // 	let deck = new Array();

// // 	for(let i = 0; i < suits.length; i++)
// // 	// (let i = 0; i < 3; i++)
// // 	{
// // 		for(let x = 0; x < values.length; x++)
// // // for(let x = 0; x < 14; x++)
// // 		{
// // 			let card = {Value: values[x], Suit: suits[i]};
// // 			deck.push(card);
// // 		}
// // 	}
// // 	return deck;
// // }
// // console.log(deck);
// // // https://www.youtube.com/watch?v=LxXWTXOny3A
// // function shuffleDeck(deck){
// // 	// for 1000 turns
// // 	// switch the values of two random cards
// // 	for (let i = 0; i < 1000; i++)
// // 	{
// // 		let location1 = Math.floor((Math.random() * deck.length));
// // 		let location2 = Math.floor((Math.random() * deck.length));
// // 		let tmp = deck[location1];

// // 		deck[location1] = deck[location2];
// // 		deck[location2] = tmp;
// // 	}
// // }

// // https://www.youtube.com/watch?v=seApG3uwjAs











// // function card(value, name, suit){
// // 	this.value = value;
// // 	this.name = name;
// // 	this.suit = suit;
// // }


// // function deck(){
// // 	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// // 	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
// // 	var cards = [];
    
// //     for( var s = 0; s < this.suits.length; s++ ) {
// //         for( var n = 0; n < this.names.length; n++ ) {
// //             cards.push( new card( n+1, this.names[n], this.suits[s] ) );
// //         }
// //     }

// //     return cards;
// // }
// // var myDeck = new deck();
// // console.log(myDeck);



// // function shuffle(o) {
	
// // 	return o;
// // };

// // myDeck = shuffle(myDeck);
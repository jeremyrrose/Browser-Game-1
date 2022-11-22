

// Psuedocode Deal Function 

// Deal one card to player side
// Deal one card to banker side 

// Deal another card to player side
// Deal another card to banker side

// Find out there are any naturals (8,9)

// If neither the player nor the banker is dealt a total of 8 or 9 in the first two cards (known as a "natural"), the tableau is consulted, first for the player's rules, then the banker's.

// Player's rule
// If the player has an initial total of 5 or less, they draw a third card. If the player has an initial total of 6 or 7, they stand.
// Banker's rule
// If the player stood pat (i.e. has only two cards), the banker regards only their own hand and acts according to the same rule as the player, i.e. the banker draws a third card with hands 5 or less and stands with 6 or 7.
// If the player drew a third card, the banker acts according to the following more complex rules:
// If the banker total is 2 or less, they draw a third card regardless of what the player's third card is.
// If the banker total is 3, they draw a third card unless the player's third card is an 8.
// If the banker total is 4, they draw a third card if the player's third card is 2, 3, 4, 5, 6, or 7.
// If the banker total is 5, they draw a third card if the player's third card is 4, 5, 6, or 7.
// If the banker total is 6, they draw a third card if the player's third card is a 6 or 7.
// If the banker total is 7, they stand."
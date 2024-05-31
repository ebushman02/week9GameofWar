// First I need to create the deck based on the 13
// cards in each of the four suits.
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2','3','4','5','6','7','8','9',
'10','Jack','Queen','King','Ace'];

const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push(`${value} of ${suit}`);
    }
}

//Next I need to shuffle  the deck into a random order
//using the funtion below
function shuffle (deck) {
    let shuffled =[...deck];
    for (let i = shuffled.length - 1; i > 0; i--){
    const randomIndex = Math.floor(Math.random() * (i+1));
  //this allows the randomIndex to take the place of 
  //the current index and complete the randomization  
    [shuffled[i], shuffled[randomIndex]] = 
    [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled;
}
const shuffledDeck = shuffle(deck);

//Next we need to deal the deck, I did this by seperating
//the even and odd positioned cards into player 1 and 2's
//hands to ensure it was a more realistic deal.
let playerOneHand = shuffledDeck.filter ((v,i)=> i % 2)
let playerTwoHand = shuffledDeck.filter ((v,i)=> !(i % 2))

let playerOneScore = 0;
let playerTwoScore = 0;

//here I set variables for player one and player two's cards being played
//and allowing it to play one of each at a time
for (let i = 0; i < 26; i++) {
    const playerOneCard = playerOneHand[i];
    const playerTwoCard = playerTwoHand[i];

//I then set card value equal to numbers 2-14 to allow the higher card to win
const cardValue = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10':10,
    'Jack': 11,
    'Queen': 12,
    'King': 13,
    'Ace': 14
}
//I then needed to set the players card equal to its value
const playerOneCardValue = 
cardValue[playerOneCard.split(" ")[0]];
const playerTwoCardValue = 
cardValue[playerTwoCard.split(" ")[0]];

//Next was scoring based on whose card was higher, no need to add an else stating no
//points are added as it automatically doesn't change score without input
if (playerOneCardValue > playerTwoCardValue) {
    playerOneScore++
}
else if (playerOneCardValue < playerTwoCardValue) {
    playerTwoScore++
}
//Adding text to the console showing the cards played on scre following each hand.
console.log(`Round ${i + 1}: ${playerOneCard} vs ${playerTwoCard}  Score ${playerOneScore}:${playerTwoScore}`);
}
//Ended with messages stating the winner and or a tie.
if (playerOneScore > playerTwoScore) {
    console.log(`Player One wins ${playerOneScore}:${playerTwoScore}`)
}
else if (playerOneScore < playerTwoScore) {
    console.log(`Player Two wins ${playerTwoScore}:${playerOneScore}`)
}
else {
    console.log(`Player One and Player Two tied ${playerOneScore}:${playerTwoScore}`)
}

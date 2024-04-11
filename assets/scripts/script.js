// Global variables
const cards = [
    'ac.png', 
    '2c.png', 
    '3c.png', 
    '4c.png', 
    '5c.png', 
    '6c.png', 
    '7c.png', 
    '8c.png', 
    '9c.png', 
    '10c.png', 
    'jc.png', 
    'qc.png',
    'kc.png'
];
let sequenceLength;
let cardsToPlay;

// This shuffling algorithm was made with help from stack overflow and Bro Code on YouTube, see README.md for links
/**
 * Fischer Yates Algorithm for shuffling 
 */
function shuffle(array) {
    // Loop through elements of array from end to beginning
    // array.lenth - 1 because the last item is the index of length -1
    // continue whilst i > 0
    // i decreases by 1 each time
    for (let i = array.length - 1; i > 0; i--) {
        // Make a random number 1-array.length
        const random = Math.floor(Math.random() * (i + 1));
        // Shuffle the values
        [array[i], array[random]] = [array[random], array[i]];
      }
    return array;
    }

/**
 *  Cycles through n times, making divs housing the card images and appending them to the game area
*/ 
function makeDivs(n) {
    for (let i = 0; i < n; i++) {
        var newDiv = document.createElement("div");
        // Assign CSS class
        $(newDiv).addClass("col-6 col-sm-4 col-lg-2 card-div");
        // Assign an id of box + whatever number box it is-----------------NEEDED?
        $(newDiv).attr("id","cardimage"+i);
        // Add image to the div
        $(newDiv).html("<img src='assets/images/cards/"+cardsToPlay[i]+"' class = 'card-image'>")
        // Apend it
        $("#game-area").append(newDiv);
    }
}
// Button event listeners

// Apply length button chooses how many cards to show, shuffles the cards, displays the play button
$("#sequence-length").click(function() {
    // save the number as length
    sequenceLength = $("#quantity").val();
    // shuffle the cards
    shuffle(cards);
});

// Play button 
$("#play").click(function() {
    // Selects a portion of the shuffled cards to play
    cardsToPlay = cards.slice(0, sequenceLength);
    // Make separate divs
    makeDivs(sequenceLength);
})


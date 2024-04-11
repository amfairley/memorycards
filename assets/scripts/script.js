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
    '0c.png', 
    'jc.png', 
    'qc.png',
    'kc.png'
];
let sequenceLength;
let cardsToPlay;

const cardObject = {
    'ac': "Ace of Clubs",
    '2c': "Two of Clubs",
    '3c': "Three of Clubs",
    '4c': "Four of Clubs",
    '5c': "Five of Clubs",
    '6c': "Six of Clubs",
    '7c': "Seven of Clubs",
    '8c': "Eight of Clubs",
    '9c': "Nine of Clubs",
    '0c': "Ten of Clubs",
    'jc': "Jack of Clubs",
    'qc': "Queen of Clubs",
    'kc': "King of Clubs"    
};

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

/**
 * Builds a the guessing table with n rows
 */
function tableBuild(n) {
    for (let i = 0; i < n; i++) {
        // Create a table row
        let tr1 = document.createElement("tr");
        // Create column 1 value: Order number
        let td1 = document.createElement("td");
        td1.innerHTML = parseInt(i) +1;
        // Create column 2: Guessing section
        let td2 = document.createElement("td");
        // Create column 2 Select section 1
        let select1 = document.createElement("select");
        select1.innerHTML = 
            "<option value= 'disabled'>Card Value</option>" +
            "<option value='a'>Ace</option>" +
            "<option value='2'>2</option>" +
            "<option value='3'>3</option>" +
            "<option value='4'>4</option>" +
            "<option value='5'>5</option>" +
            "<option value='6'>6</option>" +
            "<option value='7'>7</option>" +
            "<option value='8'>8</option>" +
            "<option value='9'>9</option>" +
            "<option value='0'>10</option>" +
            "<option value='j'>Jack</option>" +
            "<option value='q'>Queen</option>" +
            "<option value='k'>King</option>";
        // Append select1 to td2
        td2.append(select1);
        // Creat column 2 Select section 2
        let select2 = document.createElement("select");
        select2.innerHTML =
            "<option value= 'disabled'>Suit</option>" +
            "<option value='c'>Clubs</option>" +
            "<option value='d'>Diamonds</option>" +
            "<option value='h'>Hearts</option>" +
            "<option value='s'>Spades</option>";
        // append Select 2 to td2
        td2.append(select2);
        // Create column 2 submit button
        let submitButton = document.createElement("button");
        // Add class and content
        submitButton.classList.add("submit-guess");
        submitButton.innerHTML = "Submit";
        // Append submit button to td2
        td2.append(submitButton);
        // Create column 3: Actual Answer
        let td3 = document.createElement("td");
        let currentCard = cardsToPlay[i].slice(0,2);
        td3.innerHTML = cardObject[currentCard];
        // Correct column 4: Result
        let td4 = document.createElement("td");
        // Append all columns to table row
        tr1.append(td1);
        tr1.append(td2);
        tr1.append(td3);
        tr1.append(td4);

        // Append table row to table
        document.getElementById("table-body").append(tr1);
    }
    // Update the page
    let appendScript = "<script id='guessing-script' src='assets/scripts/script2.js'></script>"
    $("body").append(appendScript);
}



// Button event listeners

// Apply length button chooses how many cards to show, shuffles the cards, displays the play button
$("#sequence-length").click(function() {
    // Save the number as length
    // Math.floor is used in case the user enters a float value
    sequenceLength = Math.floor($("#quantity").val());
    // Allow the play button to appear
    $("#play").removeClass("hidden");

});

// Play button 
$("#play").click(function() {
    // shuffle the cards
    shuffle(cards);
    // Selects a portion of the shuffled cards to play
    cardsToPlay = cards.slice(0, sequenceLength);
    // Make separate divs
    makeDivs(sequenceLength);
})

// Guess button
$("#guess").click(function() {
    // Show the guessing table
    $("#guessing-table").removeClass("hidden");
    tableBuild(sequenceLength);
    
})


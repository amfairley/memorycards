/* jshint esversion: 8, jquery: true, scripturl: true */

// GLOBAL VARIABLES
// (var is used for variables that need to be accesed by separate scripts)
const cards = [
    "ac.png",
    "2c.png",
    "3c.png",
    "4c.png",
    "5c.png",
    "6c.png",
    "7c.png",
    "8c.png",
    "9c.png",
    "0c.png",
    "jc.png",
    "qc.png",
    "kc.png",
    "ad.png",
    "2d.png",
    "3d.png",
    "4d.png",
    "5d.png",
    "6d.png",
    "7d.png",
    "8d.png",
    "9d.png",
    "0d.png",
    "jd.png",
    "qd.png",
    "kd.png",
    "ah.png",
    "2h.png",
    "3h.png",
    "4h.png",
    "5h.png",
    "6h.png",
    "7h.png",
    "8h.png",
    "9h.png",
    "0h.png",
    "jh.png",
    "qh.png",
    "kh.png",
    "as.png",
    "2s.png",
    "3s.png",
    "4s.png",
    "5s.png",
    "6s.png",
    "7s.png",
    "8s.png",
    "9s.png",
    "0s.png",
    "js.png",
    "qs.png",
    "ks.png"
];
let cardsToPlay;
var sequenceLength;
let lengthCheck;
var cardObject = {
    "ac": "Ace of Clubs",
    "2c": "Two of Clubs",
    "3c": "Three of Clubs",
    "4c": "Four of Clubs",
    "5c": "Five of Clubs",
    "6c": "Six of Clubs",
    "7c": "Seven of Clubs",
    "8c": "Eight of Clubs",
    "9c": "Nine of Clubs",
    "0c": "Ten of Clubs",
    "jc": "Jack of Clubs",
    "qc": "Queen of Clubs",
    "kc": "King of Clubs",
    "ad": "Ace of Diamonds",
    "2d": "Two of Diamonds",
    "3d": "Three of Diamonds",
    "4d": "Four of Diamonds",
    "5d": "Five of Diamonds",
    "6d": "Six of Diamonds",
    "7d": "Seven of Diamonds",
    "8d": "Eight of Diamonds",
    "9d": "Nine of Diamonds",
    "0d": "Ten of Diamonds",
    "jd": "Jack of Diamonds",
    "qd": "Queen of Diamonds",
    "kd": "King of Diamonds",
    "ah": "Ace of Hearts",
    "2h": "Two of Hearts",
    "3h": "Three of Hearts",
    "4h": "Four of Hearts",
    "5h": "Five of Hearts",
    "6h": "Six of Hearts",
    "7h": "Seven of Hearts",
    "8h": "Eight of Hearts",
    "9h": "Nine of Hearts",
    "0h": "Ten of Hearts",
    "jh": "Jack of Hearts",
    "qh": "Queen of Hearts",
    "kh": "King of Hearts",
    "as": "Ace of Spades",
    "2s": "Two of Spades",
    "3s": "Three of Spades",
    "4s": "Four of Spades",
    "5s": "Five of Spades",
    "6s": "Six of Spades",
    "7s": "Seven of Spades",
    "8s": "Eight of Spades",
    "9s": "Nine of Spades",
    "0s": "Ten of Spades",
    "js": "Jack of Spades",
    "qs": "Queen of Spades",
    "ks": "King of Spades"
};

// FUNCTIONS
// This shuffling algorithm was made with help from stack overflow
// and Bro Code on YouTube, see README.md for links
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

// Function to make divs to hold the card card images
/**
 *  Cycles through n times
 *  makes divs housing the card images
 * and appending them to the game area
*/
function makeDivs(n) {
    for (let i = 0; i < n; i++) {
        var newDiv = document.createElement("div");
        // Assign CSS class
        $(newDiv).addClass("col-6 col-sm-4 col-lg-2 card-div");
        // Add image to the div
        $(newDiv).html(
            "<img src='assets/images/cards/"+cardsToPlay[i]+
            "' class = 'card-image' alt='The card " +
            cardObject[cardsToPlay[i].slice(0,2)] +"'>"
        );
        // Apend it
        $("#card-mat").append(newDiv);
    }
}

/**
 * Builds a the guessing table with n rows
 */
function tableBuild(n) {
    for (let i = 0; i < n; i++) {
        // Create a table row
        let tr1 = document.createElement("tr");
        tr1.classList.add("table-row");
        // Create column 1 value: Order number
        let td1 = document.createElement("td");
        td1.classList.add("order-column");
        td1.innerHTML = parseInt(i) +1;
        // Create column 2: Guessing section
        let td2 = document.createElement("td");
        td2.classList.add("guess-column");
        // Create column 2 Select section 1
        let select1 = document.createElement("select");
        select1.innerHTML =
            "<option value= 'disabled'>Value</option>" +
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
            "<option value='c'>&#9827</option>" +
            "<option value='d'>&#9830</option>" +
            "<option value='h'>&#9829</option>" +
            "<option value='s'>&#9824</option>";
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
        td3.classList.add("answer-column");
        let currentCard = cardsToPlay[i].slice(0,2);
        td3.innerHTML = cardObject[currentCard];
        td3.classList.add("hidden");
        // Correct column 4: Result
        let td4 = document.createElement("td");
        td4.classList.add("result");
        td1.classList.add("correct-column");
        // Append all columns to table row
        tr1.append(td1);
        tr1.append(td2);
        tr1.append(td3);
        tr1.append(td4);
        // Append table row to table
        document.getElementById("table-body").append(tr1);
    }
    // Update the page
    let appendScript = (
        "<script id='guessing-script'"+
        "src='assets/scripts/score.js'></script>"
    );
    $("body").append(appendScript);
}



// Button event listeners

// Apply length button chooses how many cards to show
// shuffles the cards, displays the play button
$("#play").click(function() {
    // Save the number as length
    // Math.floor is used in case the user enters a float value
    lengthCheck = Math.floor($("#quantity").val());
    // Testing that the input is within limits
    if ((lengthCheck > 0) && (lengthCheck <= 52)) {
        sequenceLength = lengthCheck;
        // Display the sequence length box
        $("#length-box").css("display", "block");
        $(".sequence-length-display").text(sequenceLength);
        // Hide the play button
        $(this).addClass("hidden");
        // Hide the choosing length select
        $("#quantity").addClass("hidden");
        $("#quantity-label").addClass("hidden");
        // shuffle the cards
        shuffle(cards);
        // Selects a portion of the shuffled cards to play
        cardsToPlay = cards.slice(0, sequenceLength);
        // Make separate divs
        makeDivs(sequenceLength);
        // Show the guess button
        $("#guess").removeClass("hidden");
        // Hide spacers on small screens
        $(".spacer").remove();
    } else {
        $("#sequence-error-modal").css("display", "block");
        $("#modal-background").css("display", "block");
    }
});

// Guess button
$("#guess").click(function() {
    // Hide the guess button
    $("#guess").addClass("hidden");
    $("#table-container").addClass("table-container-style");
    // Show the guessing table
    $("#guessing-table").removeClass("hidden");
    tableBuild(sequenceLength);
    // Remove the card images from the screen
    $(".card-image").remove();
    // Remove spacers on small screen
    $(".spacer").css("display", "none");
});

// Reset button
$(".reset-game").click(function() {
    // Remove table container class for page styling
    $("#table-container").removeClass("table-container-style");
    // Reset the sequence length
    sequenceLength = undefined;
    // Show the length selector if hidden
    if ($("#quantity").hasClass("hidden")) {
        $("#quantity").removeClass("hidden");
        $("#quantity-label").removeClass("hidden");
    }
    // Reset the length select element
    $("#quantity").prop("value", "");
    // Hide the sequence length display
    $("#length-box").css("display", "none");
    // Show the play button if hidden
    if (($("#play").hasClass("hidden"))) {
        $("#play").removeClass("hidden");
    }
    // Hide the guess button if not hidden
    if (!($("#guess").hasClass("hidden"))) {
        $("#guess").addClass("hidden");
    }
    // Remove any cards on screen
    $(".card-div").each(function(){
        $(this).remove();
    });
    // Hide the guessing table if not hidden
    if (!($("#guessing-table").hasClass("hidden"))) {
        $("#guessing-table").addClass("hidden");
    }
    // Remove any rows added to the table if there are any
    $(".table-row").each(function(){
        $(this).remove();
    });
    // Remove the JavaScript script link to the guessing functions
    $("#guessing-script").each(function(){
        $(this).remove();
    });
    // Add spacers back in for small screens
    if ($("#button-section").children().length === 5) {
        let x = "<br class='spacer'>";
        $(x).insertAfter($("#quantity"));
        $("#button-section").prepend(x);
        $("#button-section").prepend(x);
    }
});
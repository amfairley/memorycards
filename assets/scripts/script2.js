// Global variables //
const cardObject2 = {
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

/**
 * Returns the key of an object assigned to a specific value
 */
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }



// Event listener for class submit-guess
$(".submit-guess").click(function() {
    // Takes the sibling elements that are select elements in an array
    let siblings = $(this).siblings();
    // takes value 1 + value 2 = submitted answer
    let submittedAnswerInitial = siblings[0].value +siblings[1].value;
    console.log(submittedAnswerInitial);
    // Get the key from this value in the cardObject2
    let submittedAnswer = cardObject2[String(submittedAnswerInitial)];
    // checks this answer against parent's next sibling
    let pSiblings = $(this).parent().siblings();
    // Show the answer column
    pSiblings[1].classList.remove("hidden");
    let correctAnswer = pSiblings[1].innerHTML;
    let results = pSiblings[2];
    console.log(correctAnswer);
    // Compare the two values
    if (submittedAnswer === correctAnswer) {
        $(results).html("Y");
    } else {
        $(results).html("N");
    }
})
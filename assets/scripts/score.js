// Button event listeners
// Submit guess button
$(".submit-guess").click(function() {
    // Takes the sibling elements that are select elements in an array
    let siblings = $(this).siblings();
    // Check for valid input 
    if ((siblings[0].value === 'disabled') || (siblings[1].value === 'disabled')) {
        $("#guess-error-modal").css("display", "block");
        $("#modal-background").css("display", "block");
    } else {
        // Takes value 1 + value 2 = submitted answer
        let submittedAnswerInitial = siblings[0].value +siblings[1].value;
        // Get the key from this value in the cardObject
        let submittedAnswer = cardObject[String(submittedAnswerInitial)];
        // Checks this answer against parent's next sibling
        let pSiblings = $(this).parent().siblings();
        // Show the answer column
        pSiblings[1].classList.remove("hidden");
        let correctAnswer = pSiblings[1].innerHTML;
        let results = pSiblings[2];
        // Compare the two values
        if (submittedAnswer === correctAnswer) {
            $(results).html("Y");
        } else {
            $(results).html("N");
        }
        // Disable the select and submit fields
        $(this).prop("disabled", true);
        $(siblings[0]).prop("disabled", true);
        $(siblings[1]).prop("disabled", true);
        // Add a class to the submit button to track submissions
        $(this).addClass("submitted");
        // Check score
        // Array of the result cell
        let resultsArray = $(".result");
        // Score counter starts at 0
        let counter = 0;
        // If an answer is correct, add 1 to counter
        for (let i = 0; i < sequenceLength; i++) {
            if (resultsArray[i].textContent==="Y") {
                counter++;
            }
        }
        let finalScore = Math.floor(100* counter / sequenceLength);
        // An alert to show when the game is finished
        if ($(".submitted").length === sequenceLength) {
            $("#results-modal").css("display", "block");
            $("#modal-background").css("display", "block");
            $("#total-correct").html(counter);
            $("#total-answers").html(sequenceLength);
            $("#total-percent").html(finalScore);
        }
        if (finalScore >= 75) {
            $("#modal-results-header").html("Amazing!");
        } else if (finalScore >= 50) {
            $("#modal-results-header").html("Good Job!");
        } else if (finalScore >= 25) {
            $("#modal-results-header").html("Nice try!");
        } else {
            $("#modal-results-header").html("Try again...");
        }
    } 
});


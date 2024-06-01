/* jshint esversion: 8, jquery: true, scripturl: true */
$(document).ready(function() {

    // ---------- GLOBAL VARIABLES ----------
    const cards = [
        "ac.webp",
        "2c.webp",
        "3c.webp",
        "4c.webp",
        "5c.webp",
        "6c.webp",
        "7c.webp",
        "8c.webp",
        "9c.webp",
        "0c.webp",
        "jc.webp",
        "qc.webp",
        "kc.webp",
        "ad.webp",
        "2d.webp",
        "3d.webp",
        "4d.webp",
        "5d.webp",
        "6d.webp",
        "7d.webp",
        "8d.webp",
        "9d.webp",
        "0d.webp",
        "jd.webp",
        "qd.webp",
        "kd.webp",
        "ah.webp",
        "2h.webp",
        "3h.webp",
        "4h.webp",
        "5h.webp",
        "6h.webp",
        "7h.webp",
        "8h.webp",
        "9h.webp",
        "0h.webp",
        "jh.webp",
        "qh.webp",
        "kh.webp",
        "as.webp",
        "2s.webp",
        "3s.webp",
        "4s.webp",
        "5s.webp",
        "6s.webp",
        "7s.webp",
        "8s.webp",
        "9s.webp",
        "0s.webp",
        "js.webp",
        "qs.webp",
        "ks.webp"
    ];
    const cardObject = {
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
    let cardsToPlay;
    let sequenceLength;
    let lengthCheck;

    // ---------- FUNCTIONS ----------
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
    function makeDivs(n, array) {
        /* DEFINE A DIV ARRAY OUTSIDE OF THE LOOP FOR TESTING */
        const newDivArray = [];
        for (let i = 0; i < n; i++) {
            let newDiv = document.createElement("div");
            // Assign CSS class
            $(newDiv).addClass("col-6 col-sm-4 col-lg-2 card-div");
            // Add image to the div
            $(newDiv).html(
                "<img src='assets/images/cards/"+array[i]+
                "' class = 'card-image' alt='The card " +
                cardObject[array[i].slice(0,2)] +"'>"
            );
            // Append it
            $("#card-mat").append(newDiv);
            /* APPEND TO DIV ARRAY */
            newDivArray.push(newDiv);
        }
        /* RETURN DIV ARRAY FOR TESTING */
        return newDivArray;
    }

    // Table building functions
    /**
     * Creates a new row for the guessing table
     */
    function tableRow() {
        let tableRow = document.createElement("tr");
        tableRow.classList.add("table-row");
        return tableRow;
    }
    /**
     * Creates the first column data for the guessing table
     */
    function tableColumn1() {
        let column1 = document.createElement("td");
        column1.classList.add("order-column");
        return column1;
    }
    /**
     * Creates the second column data for the guessing table
     */
    function tableColumn2() {
        let column2 = document.createElement("td");
        let cardValueSelect = tableSelect1();
        let suitValueSelect = tableSelect2();
        let valueSubmit = tableSubmit();
        column2.classList.add("guess-column");
        $(".submit-guess").click(submitGuess);
        column2.append(cardValueSelect, suitValueSelect, valueSubmit);
        return column2;
    }
    /**
     * Creates the third column data for the guessing table
     */
    function tableColumn3() {
        let column3 = document.createElement("td");
        column3.classList.add("answer-column", "hidden");
        return column3;
    }
    /**
     * Creates the fourth column data for the guessing table
     */
    function tableColumn4() {
        let column4 = document.createElement("td");
        column4.classList.add("result", "correct-column");
        return column4;
    }
    /**
     * Creates card value select drop down menu
     */
    function tableSelect1() {
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
        return select1;
    }
    /**
     * Creates the suit value drop down menu
     */
    function tableSelect2() {
        let select2 = document.createElement("select");
        select2.innerHTML =
            "<option value='disabled'>Suit</option>" +
            "<option value='c'>&#9827</option>" +
            "<option value='d'>&#9830</option>" +
            "<option value='h'>&#9829</option>" +
            "<option value='s'>&#9824</option>";
        return select2;
    }

    /**
     * Creates the guessing table submit button
     */
    function tableSubmit() {
        let submitButton = document.createElement("button");
        submitButton.classList.add("submit-guess");
        submitButton.innerHTML = "Submit";
        return submitButton;
    }
    
    /**
     * Builds a the guessing table with n rows
     */
    function tableBuild(n, array) {
        for (let i = 0; i < n; i++) {
            // Create a table row
            let tr1 = tableRow();
            // Create column 1 value: Order number
            let td1 = tableColumn1();
            td1.innerHTML = parseInt(i) +1;
            // Create column 2: Guessing section
            let td2 = tableColumn2();
            // Create column 3: Actual Answer
            let td3 = tableColumn3();
            let currentCard = array[i].slice(0,2);
            td3.innerHTML = cardObject[currentCard];
            // Correct column 4: Result
            let td4 = tableColumn4();
            // Append all columns to table row
            tr1.append(td1);
            tr1.append(td2);
            tr1.append(td3);
            tr1.append(td4);
            // Append table row to table
            document.getElementById("table-body").append(tr1);
        }
    }
    /**
     * Checks whether two arguments are identical.
     * Used to check the user answer against the correct answer.
     * Returns a Y if correct or N if incorrect.
     */
    function checkAnswer(a, b) {
        let answerCheck;
        if (a === b) {
            answerCheck = "Y";
        } else {
            answerCheck = "N";
        }
        return answerCheck;
    }
    /**
     * Gives the user an appropriate message
     * based on their final score.
     */
    function result(score) {
        if (score >= 75) {
            $("#modal-results-header").html("Amazing!");
        } else if (score >= 50) {
            $("#modal-results-header").html("Good Job!");
        } else if (score >= 25) {
            $("#modal-results-header").html("Nice Try!");
        } else {
            $("#modal-results-header").html("Try again...");
        }
    }
    // ---------- BUTTON EVENT LISTENERS ----------
    // Accessibility feature to submit length with "enter"
    $("#quantity").on("keydown", function(event) {
        if (event.key === "Enter") {
            console.log("Enter pressed");
            document.getElementById("play").click();
        }
    });
    // Shuffles the cards, displays the play button
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
            makeDivs(sequenceLength, cardsToPlay);
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
        $("#table-container").removeClass("hidden");
        tableBuild(sequenceLength, cardsToPlay);
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
        if (!($("#table-container").hasClass("hidden"))) {
            $("#table-container").addClass("hidden");
        }
        // Remove any rows added to the table if there are any
        $(".table-row").each(function(){
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
    // Submit guess:
    function submitGuess(event){
        // Takes the sibling elements that are select elements in an array
        let siblings = $(this).siblings();
        // Check for valid input
        if (
            (siblings[0].value === "disabled") ||
            (siblings[1].value === "disabled")
        ) {
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
            $(results).html(checkAnswer(submittedAnswer, correctAnswer));
            // Disable the select and submit fields
            $(this).prop("disabled", true);
            $(siblings[0]).prop("disabled", true);
            $(siblings[1]).prop("disabled", true);
            console.log($(results).innerHTML)
            // Change submit field value to correct or incorrect
            if ($(results).text() === "Y"){
                $(this).addClass("correct-transition submit-guess-pressed");
                $(this).removeClass("submit-guess")
                void $(this)[0].offsetWidth;
                $(this).text("Correct");
                $(this).addClass("correct");
            } else {
                $(this).addClass("incorrect-transition submit-guess-pressed")
                $(this).removeClass("submit-guess")
                void $(this)[0].offsetWidth;
                $(this).text("Incorrect");
                $(this).addClass("incorrect");
            }
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
            result(finalScore);
        }
    }
    // Adding the event listener function to the submit guess buttons
    $("body").on("click", ".submit-guess", submitGuess);
});
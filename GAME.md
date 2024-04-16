# Memory Cards Game Area

## Required components
**Game area**: The game requires a game area to take place in <br>
**A button to start the game**: A play now button is required so that the user may start the game when they decide <br>
**A reset button**: A reset button will be needed so that the game can be reset without refreshing the page, improving the user experience <br>
**A way to select the length of the sequence**: Allowing the user to select the length of the sequence will allow the game to be tailored to the users needs and provide difficulty scaling; with shorter sequences being easier and longer sequences being more difficult <br>
**A way for the user to see the selected length of the sequence**: Once selected there should be an on screen indication of the sequence length for good user experience so that they can remind themselves / confirm the length at a glance <br>
**A way to hide the cards and start guessing**: A button that will advance the game play from the memorisation stage to the guessing stage <br>
**A way to submit guesses**: This is the key way of scoring the game; there will be a table with options for the user to select to submit their guess at the order of the shuffled cards <br>
**Feedback to the user upon game completion**: When all guesses are submitted, an alert will inform the user of how well they have performed in the game <br>

## Game logic

### Possible errors to keep in mind
- If an unavailable value is selected e.g. none, negative, greater than 52 or a decimal
- Each play through concatenating arrays and adding to the previous playthrough


### JavaScript functionality
#### Functions:
- **shuffle(array):** The shuffle function takes an array as a parameter and shuffles the indexes of the elements in the array. It is used in this game to shuffle a deck of cards.
- **makeDivs(n):** The makeDivs function takes an integer parameter and uses it to produce a grid of that many playing cards in the game area. It loops through a range of i from 0 up to 1 less than n. On each iteration it: 
    - Creates a div
    - Assigns it classes for css styling and later manipulation
    - Sets the div innerHTML to be an img element with the source being the i<sup>th</sup> card in the current cardsToPlay array
    - Appends the div it to the game area

- **tableBuild(n):** The tableBuild() takes an integer parameter and uses it to create that many rows to populate the guessing table. After the loop, it appends a script element to the body, linking the guessing function JavaScript file. During the loop, it iterates through a range of i from 0 up to 1 less than n. On each iteration it:
    - Creates a table row and adds a class to it
    - Creates the first table data cell element and sets its inner HTML to equal the current iteration (i+1)
    - Creates the second table data cell element
    - Creates the first select element with options and appends it to the second table data cell element 
    - Creates the second select element with options and appends it to the second table data cell element
    - Create a submit button, give it a class and inner HTML value, and append it to the second table data cell element
    - Create the third table data cell element
    - Define the currentCard in the sequence as the i<sup>th</sup> element of the cardsToPlay array will removing ".png" from it
    - Set the third table data cell inner HTML to the value of the currentCard key in the cardObject object
    - Add the hidden class to the third table data cell element
    - Create the fourth table data cell element and add a class to it
    - Append all four table date cell elements to the table row in order
    - Append the table row to the table body in the DOM

#### Event Listeners:
- **sequence-length click**: This event triggers when the sequence length submit button is clicked and it:
    - Stores the entered length as a the lengthCheck variable after using Math.floor() to make it an integer
    - If this value is between 1 and 52 inclusive it continues, otherwise it displays an error informing the user to use a number between 1 and 52
    - It assigns the value of lengthCheck to sequenceLength, now it has passed the comparator
    - It removes the hidden class from the play now button, making it appear in the game area
    - It populates the number of cards display with the sequenceLength
- **play click**: This event triggers when the play button is clicked and it:
    - Hides the play button to prevent multiple presses
    - Hides the length selector and length submission elements to prevent new starting values to be entered
    - Calls the shuffle() function to shuffle the cards array
    - Selects the first n cards, where n = sequenceLength, as the cardsToPlay array
    - Calls the makeDivs() function on the sequenceLength to populate the game area with that many card images
    - Removes the hidden class from the guess button
- **guess click**: This button will move the game from the memorisation stage to the guessing stage. It will:
    - Hide the guess button to prevent it being pressed twice
    - Show the guessing table in the game area
    - Populate the guessing table using the tableBuild() function
    - Remove the card images from the game area
    - Link the score.js script to the HTML
- **submit guess click**: This button submits the individual guesses. It:
    - Gets the siblings to the submit button; these are the two select elements
    - Creates a user answer (submittedAnswerInitial) by combining the value of the first select element (card value) and second select element (card suit)
    - If the answer given is valid, it will continue, otherwise it will show an alert and ask the user to submit a valid answer
    - Uses this answer to get the associated value from the cardObject object and saves it to a variable submittedAnswer
    - Gets the parent of the button's siblings; the other table data cells in the row
    - Sets the correctAnswer to the hidden inner HTML of the answer column table data cell
    - Sets the results to the result table data cell
    - If the submittedAnswer is equal to the correctAnswer, populate the inner HTML of the result table data cell with a Y, otherwise populate it with an N
    - Disable that rows two select options and submit button to prevent additional guesses
    - Add a class of submitted to the submit button
    - Calculate the game score by counting the amount of Y results, dividing it by the total results, multiplying it by 100, and using Math.floor() to round it down to an integer
    - Check if the game is over by seeing if the length of the array containing elements with the submitted class is equal to the sequenceLength and display the score if they are
- **reset click**: The reset button will reset the game area. It will :
    - Set the sequenceLength back to undefined
    - Show the sequence length selection box by checking if it has the hidden class and removing it if so
    - Show the sequence length submit button by checking if it has the hidden class and removing it if so
    - Hide the play button by checking if it has the hidden class and adding it if not
    - Hide the guess button by checking if it has the hidden class and adding it if not
    - Hide the guessing table by checking if it has the hidden class and adding it if not
    - Reset the guessing table by removing any rows by looking for elements with the table-row class and removing them
    - Remove any cards in the game area by looking for elements with the card-div class and removing them
    - Remove the script element produced by tableBuild() function by targetting its ID
    - Delete the text content of the sequence length display
    - It should be noted that this reset button does not unshuffle the cards, but as the cards are shuffled each time the play button is pressed, this does not affect gameplay 
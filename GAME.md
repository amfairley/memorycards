# Memory Cards Game Area

## Required components
**Game area**: The game requires a game area to take place in
**A button to start the game**: A play now button is required so that the user may start the game when they decide
**A reset button**: A reset button will be needed so that the game can be reset without refreshing the page, improving the user experience.
**A way to select the length of the sequence**: Allowing the user to select the length of the sequence will allow the game to be tailored to the users needs and provide difficulty scaling; with shorter sequences being easier and longer sequences being more difficult.
**A way for the user to see the selected length of the sequence**: Once selected there should be an on screen indication of the sequence length for good user experience so that they can remind themselves / confirm the length at a glance.
**A way to hide the cards and start guessing**: A button that will advance the game play from the memorisation stage to the guessing stage.
**A way to submit guesses**: This is the key way of scoring the game; there will be a table with options for the user to select to submit their guess at the order of the shuffled cards.
**Feedback to the user upon game completion**: When all guesses are submitted, an alert will inform the user of how well they have performed in the game.

## Game logic
**Reset button**: The reset button will always be available to the user. Clicking it will:
- Hide all game elements except the reset button and the selected length display
- Reset the selected length display
- Display the length selection section

**Select Length**: The select length will be a drop down providing sequence lengths for the user to select and a submit button locking in their choice. Selecting and submitting a length will:
- Show the selected length in a display box on screen
- Shuffle the cards array
- Display a Play Now button

**Play Now**: Clicking the play now button will:
- Disable the select length drop down box and submit buttons, preventing the user from changing the starting values during the game
- Hide the Play Now button
- Show the cards on screen equal to the number selected by the user
- Display a button advancing the user to the guessing stage
- IF POSSIBLE start an internal timer

**Guess Button**: This button advances the game from the memorisation stage to the guessing stage. Clicking the button will:
- Hide all the cards
- Hide the Guess Button
- Display the Guessing Table where the user will enter their guesses

**Guessing table**: This table will be generated to have the number of rows equal to the sequence of card. Each row will allow the user to individually enter their guess for that card in the order. Submitting these individual guesses will:
- Disable the current row guessing functionality
- Check if the answer is correct
- Display the correct answer
- Display a visual response to the guess such as a tick or cross
- If there are no more submissions available in the table; calculate and display the final score
- IF POSSIBLE stop the timer when no more submissions are available and display the time taken


## Possible errors
- If an unavailable value is selected e.g. none or greater than 52



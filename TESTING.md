# Testing

## Table Of Contents
1. [HTML Validation](#HTML-validation)
2. [CSS Validation](#css-validation)
3. [JavaScript Validation](#javascript-validation)
4. [Accessibility](#accessibility)
5. [Performance](#performance)
6. [Performance tests of various devices](#performance-tests-of-various-devices)
7. [Browser Compatability](#browser-compatability)
8. [Testing User Stories](#testing-user-stories)
9. [Manual Testing](#manual-testing)
10. [Manual Testing: JavaScript](#manual-testing-javascript)
    - [shuffle() Function](#shuffle-function)
    - [makeDivs() Function](#makedivs-function)
    - [tableBuild() Function](#tablebuild-function)
    - [Sequence-Length click event](#sequence-length-click-event)
    - [Play click event](#play-click-event)
    - [Guess click event](#guess-click-event)
    - [Submit guess click event](#submit-guess-click-event)
    - [Reset click event](#reset-click-event)

## HTML Validation

## CSS Validation

## Javascript Validation

## Accessibility

## Performance

## Performance tests of various devices

## Browser Compatability

## Testing User Stories

## Manual Testing

## Manual Testing: JavaScript

### shuffle() Function:
| Test Step |  Expected | Outcome |
| --------- | ------------- | ----------------- |
| The cards array was logged to the console | The array of cards will appear unshuffled | As expected |
| Call the shuffle function on the cards array | The order of the cards will be shuffled | As expected |
| Log the cards array again | The array will now be shuffled | As expected | 

### makeDivs() Function:
| Test Step |  Expected | Outcome |
| --------- | ------------- | ----------------- |
| Assign the value of cards to cardsToPlay | cardsToPlay now has the value of an array of cards | As expected |
| Call makeDivs() function on a number | That number of card images will appear in the game area. The card images will match that number of values in the cardsToPlay array | As expected |

### tableBuild() Function:
| Test Step |  Expected | Outcome |
| --------- | ------------- | ----------------- |
| Remove the hidden class from the table | The table will show in the game area from the start | As expected |
| Assign the value of cards to cardsToPlay | cardsToPlay now has the value of an array of cards | As expected |
| Call tableBuild() function on a number | That many rows will be added to the table including contents | As expected |
| Same as above | The script linking the guessing functionality JavaScript file will be appened to the body | As expected |
| Check all select elements | The first on each row will list values and the second on each row will list suits | As expected |
| Add ```console.log("The current order number is " + (parseInt(i)+1));``` after setting td1 inner HTML| The console will log the current order number ranging from 1 up to the number of rows | As expected |
| Comment out adding the hidden class to td3 and add ```console.log("The current card is "+cardObject[currentCard]);``` after defining the current card | The current card logged each time will be shown in the console | As expected |
| Reapply the hidden class to td3 | The third column will be hidden | As expected |
| Reapply the hidden class to the table | The table will be hidden from the start | As expected |

### Sequence-Length click event:
| Test Step |  Expected | Outcome |
| --------- | ------------- | ----------------- |
| Add ```console.log("The sequence length button has been pressed");``` as the first action of the function to check it is connected properly | "The sequence length button has been pressed" will appear in the console when the button is clicked | As expected |
| Add ```console.log("The sequence length is: "+sequenceLength);``` after defining the sequenceLength | The correct sequenceLength will be displayed in the console when the button is clicked  | As expected |
| Try to enter 0 as the sequence length | An alert will show, informing the user to enter a number between 1 and 52 when the button is clicked | An alert shows but the sequenceLength is set to 0 and the game can continue. FIX: move the sequenceLength assignment inside the conditional and set the original check to a new variable |
| Add ```console.log("The length check is: "+lengthCheck);``` below the lengthCheck assignment | The entered value will appear in the console even if outside the range of 1-52 when the button is clicked | As expected |
| Try to enter 0 as the sequence length | The lengthCheck will be displayed in the console, as zero, an alert will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | As expected |
| Try to enter a negative number as the sequence length | The lengthCheck will be displayed in the console, as the negative number, an alert will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | As expected |
| Try to enter an integer larger than 52 in as the sequence length | The lengthCheck will be displayed in the console, as the integer, an alert will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | As expected |
| Try to enter e as the sequence length | The lengthCheck will be displayed in the console, as zero, an alert will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | As expected |
| Try to enter a decimal number 0-1 as the sequence length | The lengthCheck will be displayed in the console, as zero, an alert will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | As expected |
| Try to enter a decimal number greater than 1 and less than 53 as the sequence length | The lengthCheck will be displayed in the console, as a rounded down integer, the sequenceLength will be assigned the same value and logged to the console, the Play Now button will appear, the sequenceLength value will be displayed in the display box when the button is clicked | As expected |
| Enter an integer number from 1-52 and click the button | The lengthCheck will be displayed in the console as the integer, the sequenceLength will be assigned the same value and logged to the console, the Play Now button will appear, the sequenceLength value will be displayed in the display box | As expected |

### Play click event:
| Test Step |  Expected | Outcome |
| --------- | ------------- | ----------------- |
| Add ```console.log("The play button has been pressed");``` as the first action of the function to check it is connected properly and click the play button | "The play button has been pressed" will appear in the console | As expected |
| Click the play button | The play button will be assigned the class of hidden and disappear from the game area | As expected |
| Click the play button | The sequence length picker and submit buttons will be assigned the class of hidden and disappear from the game area | As expected |
| Add code to log the cards array before and after shuffling, then click the play button | The console will log the cards array twice, with the second being a shuffled version of the first array | As expected |
| Add ```console.log(cardsToPlay);``` and ```console.log(cardsToPlay.length === sequenceLength);``` after defining the cards to play and click the button | The console will log the first n cards from the cards array where n is the sequenceLength, it will then log true showing that the cardsToPlay array length is the same as the chosen sequenceLength | As expected |
| Click the play button | A number of shuffled cards equal to the chosen sequenceLength will appear in the game area | As expected |
| Click the play button | The guess button will appear in the game area with the hidden class removed | As expected |

### Guess click event:
| Test Step |  Expected | Outcome |
| --------- | ------------- | ----------------- |
| Add ```console.log("The guess button has been pressed");``` as the first action of the function to check it is connected properly and click the guess button | The console will log "The guess button has been pressed" | As expected |
| Click the guess button | The guess button will be hidden and the hidden class will be attached to the html element | As expected |
| Click the guess button | The guessing table will have the hidden class removed and will appear in the game area | As expected |
| Click the guess button | The guessing table will have the sequenceLength number of rows attached with correct values | As expected |
| Click the guess button | The card image divs will be removed from the html file and disappear from the game area | As expected |

### Submit guess click event:
| Test Step |  Expected | Outcome |
| --------- | ------------- | ----------------- |
| Add ```console.log(siblings);``` below assigning the siblings variable to the select elements and click the submit button | The console will log an object containing the two select elements | As expected |
| Add ```console.log(submittedAnswerInitial);``` below reading the submittedInitialAnswer and click the submit button | The submittedInitialAnswer will appear in the console log | Works as expected but will display "disableddisabled" if no card value or suit are selected. This is **bug 4**. |
| Fix bug 4 and submit a selection of "Card Value" and "Suit" | An alert will appear informing the user to choose a valid card value and suit and allow the user to resubmit | As expected |
| Submit a valid card value selection and "Suit" | An alert will appear informing the user to choose a valid card value and suit and allow the user to resubmit | As expected |
| Submit a valid suit selection and "Card Value" | An alert will appear informing the user to choose a valid card value and suit and allow the user to resubmit | As expected |
| Submit two valid options | The submittedInitialAnswer will appear in the console log | As expected |
| Add ```console.log(submittedAnswer);``` below assigning the submittedAnswer to the associated value of the submittedAnswerInitial in the cardObject object | The cardObject value associated to the submitted guess will be logged to the console | As expected |
| Add ```console.log(pSiblings);``` after assigning the parent siblings to a variable | The console will log an object consisting of three table data cell elements, the first having the order value in, the second having the answer value in and the third being the empty result | As expected |
| Add ```console.log(correctAnswer);``` after accessing the correct answer from the DOM | The console will log the contents of the answer column for that row | As expected |
| Add ```console.log(pSiblings[2]);``` after accessing the result table data cell from the DOM |The console will log the contents of the results column for that row | As expected |
| Submit a valid incorrect answer | That row's guess select and submission buttons will be disabled, the answer column will be revealed and the result column will show an N | As expected |
| Submit the correct answer | That row's guess select and submission buttons will be disabled, the answer column will be revealed and the result column will show a Y | As expected |
| Submit all answers | An alert will appear informing the user that the game is over and their score | As expected |

### Reset click event:
| Test Step |  Expected | Outcome |
| --------- | ------------- | ----------------- |
| Play a game, log the value of sequenceLength to the console, click reset and log the value again | The value will be reset to undefined | As expected |
| Refresh the page and click the reset button | No change to the game area | As expected |
| Submit a valid sequence length and press reset (1)| The play button will have the hidden class reattached (for a total of 1) and disappear | As expected |
| Submit a valid sequence length and press reset (2)| The sequenceLength will be removed from the display area | As expected |
| Submit a valid sequence length, press the play button, then press reset (1) | The guess button will have the hidden class reattached (for a total of 1) and disappear | As expected |
| Submit a valid sequence length, press the play button, then press reset (2) | The sequence length select and submission button will have the hidden class removed and reappear | As expected |
| Submit a valid sequence length, press the play button, then press reset (3) | The card image divs with a class of card-div will be removed from the html code and the images will disappear from the game area | As expected |
| Submit a valid sequence length, press the play button, then press reset (4) | The sequenceLength will be removed from the display area | As expected |
| Submit a valid sequence length, press the play button, press guess, then press reset (1) | The sequence length select and submission button will have the hidden class removed and reappear | As expected |
| Submit a valid sequence length, press the play button, press guess, then press reset (2) | The guessing table will have the hidden class reattached and disappear from the game area | As expected |
| Submit a valid sequence length, press the play button, press guess, then press reset (3) | The guessing table will have the rows removed from the HTML file | As expected |
| Submit a valid sequence length, press the play button, press guess, then press reset (4) | The script element linking the second JavaScript file will be removed from the body | As expected |
| Submit a valid sequence length, press the play button, press guess, then press reset (5) | The sequenceLength will be removed from the display area | As expected |
| Resetting the game during the guessing stage after submitting multiple guesses | Same as the above 5 | As expected |
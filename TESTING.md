# Testing

Manual testing (often called user testing) is where the site is manually tested by clicking buttons, filling out forms, and testing all the logic. Automatic testing involves using scripts and a testing framework such as Jest. Automated testing can be quick, thorough, and allow the developer to pick up errors early on but rely on the developer asking the right questions and do not test the user experience. For this project, I have concentrated on manual testing, as automated testing was not required and this left me with more time to concentrate on the game logic and user experience.

## Table Of Contents
1. [HTML Validation](#HTML-validation)
2. [CSS Validation](#css-validation)
3. [JavaScript Validation](#javascript-validation)
4. [Accessibility](#accessibility)
    -[Game page](#game-page)
    -[404 page](#404-page)
5. [Performance](#performance)
6. [Performance tests of various devices](#performance-tests-of-various-devices)
7. [Browser Compatibility](#browser-compatability)
8. [Testing User Stories](#testing-user-stories)
9. [Manual Testing](#manual-testing)
10. [Manual Testing: JavaScript](#manual-testing-javascript)
    - [shuffle() Function](#shuffle-function)
    - [makeDivs() Function](#makedivs-function)
    - [tableBuild() Function](#tablebuild-function)
    - [Play click event](#play-click-event)
    - [Guess click event](#guess-click-event)
    - [Reset click event](#reset-click-event)
    - [Submit guess click event](#submit-guess-click-event)
    - [JavaScript hover transitions](#javascript-hover-transitions)
    - [EmailJS](#emailjs)

## HTML Validation
HTML validation was completed using the [W3C HTML validation service](https://validator.w3.org/) for the homepage and 404 page.
Each page passed with no errors or warnings to show. Screenshots of the results are shown below:
<details><summary>Homepage</summary>
<img src="/documentation/testing/validation-html-homepage.png">
</details>
<details><summary>404</summary>
<img src="/documentation/testing/validation-html-404.png">
</details>

## CSS Validation
CSS validation was completed using the [W3C Jigsaw CSS Validation Service](https://jigsaw.w3.org/css-validator/). The results can be seen [here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Famfairley.github.io%2Fmemorycards%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) or as a screenshot below. The 435 warnings that are flagged come from using the webkit rule to hide the scroll bar in the contact me modal as it is a vendor extended pseudo element and the other 434 from Bootstrap.
<details><summary>CSS Validation</summary>
<img src="/documentation/testing/validation-css.png">
</details>

## Javascript Validation
The JavaScript validation was done by copying the JavaScript code into [JSHint](https://jshint.com/). The scripts were combined into one file for validation, as the score.js script accesses variables defined within game.js so would cause an error otherwise. The only error highlighted was an undefined variable of emailjs in the emailjs.js script. This is acceptable, as this portion of code is taken directly from the emailjs documentation and the initialised at the bottom of the body element in the html pages.
<details><summary>JavaScript Validation</summary>
<img src="/documentation/testing/validation-js.png">
</details>

## Accessibility
The accessibility testing was performed using the [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/).
However this does not test the HTML elements added to the page using the JavaScript scripts. To accommodate these, the card images all have unique identifying alt attributes so there are no accessibility issues with them; and the options in the select elements in the guessing table are self-explanatory, so no labels were deemed necessary for those.

### Game Page
6 alerts are shown for the game page. The reasons that these are deemed acceptable are:
- **Alert 1 Redundant Link:** This occurs because the site logo in the header and the site logo in the footer both link back to the game page. It is my determination that this is not redundant and is part of the functionality of the site, therefore this alert may be ignored.
- **Alerts 2-6 Justified Text:** These errors appeared because the how-to-play instructions are set to text-align: justify. This is acceptable in this instance because the text appears in no more than 4 lines so does not cause the same accessibility issues as large blocks of justified text (varying word/letter spacing and 'rivers of white' in the text).

<details><summary>Accessibility Results: Homepage</summary>
<img src="/documentation/testing/wave-results-homepage.png">
</details>

### 404 Page
9 alerts are shown for the 404 page. The reasons that these are deemed acceptable are:
- **Error 1 and 2 Possible heading:** This is referring to the corner 404s in the display card and is being flagged by the size and weight of the font. These are not headings, so these alerts can be ignored.
- **Error 3 and 4 Redundant link:** Similar to the game page, this is flagged because there are multiple links to the homepage on this page. This is by design. The 2 links of the site logo in the header and footer are intentional and the additional link in the 404 alert provides and quick and intuitive way for the user to get back to the game page.
- **Errors 5-9 Justified Text:** This refers to the text in the how-to-play instructions and is not applicable for the same reasons as the game page.

<details><summary>Accessibility Results: 404</summary>
<img src="/documentation/testing/wave-results-404.png">
</details>

## Performance

The performance of the webpage was tested using Lighthouse within the google chrome devtools to confirm that the site was performing well, is accessible, following best practices, and follows basic SEO (search engine optimisation) advice. The website homepage passed all of these. The performance of the 404 page was also tested here. Its SEO result should be ignored as it shouldn't be included in search results, so should not meet SEO requirements and getting access to the 404 page inherently throws an error, so reduces the best practices from 100 to 96.

<details><summary>Performance Results: Homepage</summary>
<img src="/documentation/testing/lighthouse-performance-homepage.png">
</details>
<details><summary>Performance Results: 404</summary>
<img src="/documentation/testing/lighthouse-performance-404.png">
</details>


## Performance tests of various devices

The game was tested on a 14" laptop, 15.5" laptop and using the Google Chrome Developer Tools device toggle option for all available device options. All work as expected.

## Browser Compatibility

The website was tested on the following browsers:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox

## Testing User Stories

1. As a First Time Visitor, I want to know the purpose of the website immediately.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Header site logo | Load up the website | The website loads and displays the site logo at the top | As expected |
| Browser tab | Load up the website | The website title is displayed in the browser along with an icon | As expected |
| Website footer | Load up the website and scroll to the bottom | The website logo is displayed in the footer | As expected |


2. As a First Time Visitor, I want to be able to navigate the website easily and intuitively.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Website navigation bar | Load up the website | The website is only one page but the links in the navigation bar will their respective modals | As expected |

3. As a First Time Visitor, I want to be able to learn how to play the game.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| How to play modal | Click how to play in the header | The how to play modal will appear on the screen displaying the game instructions. The background will be darker and unavailable to the user. | As expected |
| Close button | Click the close button in the modal | The modal and the modal background will close | As expected |


4. As a First Time Visitor, I want to know if my individual guesses are correct.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Guessing table | Submit individual guesses | The correct answer will appear and the game will tell you if you are right or wrong | As expected |

5. As a First Time Visitor, I want to know my final score.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Results modal | Complete the game | A modal will appear informing the user of their score and inviting them to play again | As expected |

6. As a Returning Visitor, I want to be able to quickly play the game.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Play now button | Enter a valid sequence length and click play now | The game will start immediately | As expected |

7. As a Returning Visitor, I want to be able to contact the website developer.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| The contact me modal | Click the contact me icon in the navigation bar | The contact me modal will appear | As expected |
| The contact me modal | Fill out the form elements and click submit | The name, email, and message will be sent to the developers email address | As expected | 
| GitHub link | Click the GitHub icon in the footer | The developers GitHub profile will appear in a new window | As expected |

8. As a Returning Visitor, I want to be able to reset the game at any point.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Results modal | Play the game and click the replay button in the results modal | The game area will be reset | As expected |
| Reset button | Click the reset button at any stage of the game | The game area will reset | As expected |

9. As a Returning Visitor, I want the game to prevent me entering invalid guesses.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Sequence select and play now button | Enter invalid values (0, negative, "e") and click play now | A modal will appear informing the user to enter a valid value | As expected |
| Sequence select error modal and play now button | Enter an invalid sequence length and click play now | A modal will appear informing the user to enter a valid value | As expected |
| Guessing table | Enter invalid card value or suits and click submit | A modal will appear preventing the user from submitting the guess and informing the user of the error | As expected |
| Guessing table error modal | Enter invalid card value or suits and click submit | A modal will appear preventing the user from submitting the guess and informing the user of the error | As expected |

10. As a Frequent Visitor, I want to be able to tune the difficulty of the game.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Sequence select | Use the values of 3, 10, and 30 | 3, 10 and 30 cards will appear respectively giving the user varying degrees of difficulty | As expected |

11. As a Frequent Visitor, I want to be able to see other work from the developer.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| GitHub link | Click the GitHub icon in the footer | The developers GitHub profile will appear in a new window | As expected |

12. As a Frequent Visitor, I want to be able to see my chosen sequence length after the game starts.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Play now button | Click play now with a valid sequence length | The sequence length will be displayed on screen | As expected |
| Sequence length display | Play the game | The sequence length is displayed from clicking play now until the end of the game | As expected |

13. As a Frequent Visitor, I want to be able to play the game on different devices.

| Feature | Action | Expected Result | Actual Result |
|-----|-----|-----|-----|
| Card display area | Play the game on different screen sizes | On small sizes the rows of cards are 2 wide, on medium screens 3 wide, and on large screens 6 wide | As expected |
| Guessing table | Play the game on different screen sizes | The guessing table resizes to screen size and is usable on all devices | As expected |

## Manual Testing

| Feature | Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|-----|
| Navigation bar | | | | |
| Navigation bar | Reduce screen width below 767 pixels | The logo will resize smaller, be stacked above the icons and the icons will rotate and centre themselves | Y | N/A |
| Site logo | Click the site logo | Page will be refreshed | Y | N/A |
| How to play icon | Hover over | Colours will invert and mouse will become pointer | Y | N/A |
| How to play icon | Click | How to play modal will appear | Y | N/A |
| Modal background | Try to click background buttons | Nothing | Y | N/A |
| How to play modal close button | Hover | Background will change to lava and text to off white (this is the button hover effect)| Y | N/A |
| How to play modal close button | Click | How to play modal and modal background will close | Y | N/A |
| Contact me icon | Hover over | Colours will invert and the mouse will become a pointer | Y | N/A |
| Contact me icon | Click | The contact me form will appear in a modal | Y | N/A |
| Contact me form submit button | Hover | The button hover effect will occur | Y | N/A |
| Contact me form | Submit an empty form | The user will be asked to fill in the name field | Y | N/A |
| Contact me form | Fill the name and submit | The user will be asked to provide an email address | Y | N/A |
| Contact me form | Fill the name and invalid email and submit | The user will be asked to provide a valid email containing the @ symbol | Y | N/A |
| Contact me form | Fill the name and valid email and submit | The user will be asked to provide a message | Y | N/A |
| Contact me form | Fill the form and submit | The user will see an alert thanking them for their message and the form will be reset | Y | N/A |
| Contact me close button | Hover | The button hover effect will occur | Y | N/A |
| Contact me close button | Click | The contact me modal and background will close | Y | N/A |
| Game elements | | | | |
| Reset button | Hover | The button hover effect will occur | Y | N/A |
| Reset button | Click at start | Nothing | Y | N/A |
| Reset button | Click after selecting a sequence length, on the guessing stage, after submitting some guesses and after submitting all guesses | The game area is reset | Y | N/A |
| Play now button | Hover | The button hover effect will occur | Y | N/A |
| Play now button | Click with an invalid sequence length (0, negative, "e") | An error modal will appear explaining the error and letting the user know to use a valid number | Y | N/A |
| Sequence length error modal OK button | Hover | The button hover effect will occur | Y | N/A |
| Sequence length error modal OK button | Click | The sequence length error modal and background will close | Y | N/A |
| Play now button | Click with a valid sequence length | The sequence length selector will disappear | Y | N/A |
| Play now button | Click with a valid sequence length | The play now button will disappear | Y | N/A |
| Play now button | Click with a valid sequence length | The sequence length display will appear with the sequence length in it | Y | N/A |
| Play now button | Click with a valid sequence length | The correct amount of shuffled cards will appear on the screen | Y | N/A |
| Card area | Have more than 6 cards and resize the page | 2 cards per row on small screens, 3 cards per row on medium screens and 6 cards per row on large screens | Y | N/A |
| Guess button | Hover | The button hover effect will occur | Y | N/A |
| Guess button | Click | The cards will be removed from the game area | Y | N/A |
| Guess button | Click | The guess button will be removed from the game area | Y | N/A |
| Guess button | Click | The guessing table will appear with the correct number of rows | Y | N/A |
| Guessing table | Hover over a row | The background and text colours will invert | Y | N/A |
| Guessing table submit button | Click without selecting a suit or card number | A guessing error modal will appear informing the user of the mistake and informing them to select valid inputs | Y | N/A |
| Guessing table submit button | Click without selecting a suit | A guessing error modal will appear informing the user of the mistake and informing them to select valid inputs | Y | N/A |
| Guessing table submit button | Click without selecting a card number | A guessing error modal will appear informing the user of the mistake and informing them to select valid inputs | Y | N/A |
| Guessing error modal OK button | Hover | The button hover effect will occur | Y | N/A |
| Guessing error modal OK button | Click | The error modal and modal background will close | Y | N/A |
| Guessing table submit button | Submit a valid guess | That rows select elements will be disabled | Y | N/A |
| Guessing table submit button | Submit a valid guess | That rows submit button will be disabled and colours inverted | Y | N/A |
| Guessing table submit button | Submit a valid guess | That correct answer will appear in the answer column | Y | N/A |
| Guessing table submit button | Submit a valid correct guess | The Correct? column will show a Y | Y | N/A |
| Guessing table submit button | Submit a valid incorrect guess | The Correct? column will show a N | Y | N/A |
| Guessing table submit button | Submit all valid guesses | The results modal will appear | Y | N/A |
| Results modal | Submit all valid guesses | The results modal will show the score that the user achieved | Y | N/A |
| Results modal close button | Hover | The button hover effect will occur | Y | N/A |
| Results modal close button | Click | The results modal and the modal background will close allowing the user to review the guessing table | Y | N/A |
| Results modal replay button | Hover | The button hover effect will occur | Y | N/A |
| Results modal replay button | Click | The modal will close and the game area will be reset | Y | N/A |
| Footer | | | | |
| Footer | Resize the page width below 767px | The site logo will move to the left | Y | N/A |
| Footer | Resize the page width below 462px | The site logo will be replaced with just the icons | Y | N/A |
| Site logo | Click | The site page will refresh | Y | N/A |
| GitHub icon | Hover | The font and background colours will invert | Y | N/A |
| GitHub icon | Click | The developers GitHub profile will load in a new tab | Y | N/A |
| 404 page | Head to a website page that does not exist | The browser will be redirected to the 404 page | Y | N/A |
| 404 link back to homepage | Hover | Text colour changes to lava | Y | N/A |
| 404 link back to homepage | Click | The browser is redirected back to the game page | Y | N/A |

## Manual Testing: JavaScript

### shuffle() Function:
| Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|
| The cards array was logged to the console | The array of cards will appear unshuffled | Y | N/A |
| Call the shuffle function on the cards array | The order of the cards will be shuffled | Y | N/A |
| Log the cards array again | The array will now be shuffled | Y | N/A | 

### makeDivs() Function:
| Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|
| Assign the value of cards to cardsToPlay | cardsToPlay now has the value of an array of cards | Y | N/A |
| Call makeDivs() function on a number | That number of card images will appear in the game area | Y | N/A |
| Log the cardsToPlay length to the console | The number of card images will match that number | Y | N/A |
| Inspect the card elements | They will have the card-image class and an alt correctly describing the card value | Y | N/A |

### tableBuild() Function:
| Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|
| Remove the hidden class from the table | The table will show in the game area from the start | Y | N/A |
| Assign the value of cards to cardsToPlay | cardsToPlay now has the value of an array of cards | Y | N/A |
| Call tableBuild() function on a number | That many rows will be added to the table including contents | Y | N/A |
| Inspect the table row elements | They will have the table-row class | Y | N/A |
| Add `console.log("The current order number is " + (parseInt(i)+1));` after setting td1 inner HTML| The console will log the current order number ranging from 1 up to the number of rows | Y | N/A |
| Inspect the first column data cells | They will have the class of order-column | Y | N/A |
| Inspect the second column data cells | They will have the class of guess-column | Y | N/A |
| Check all select elements | The first on each row will list values and the second on each row will list suits | Y | N/A |
| Inspect the submit buttons | They will have the class of "submit-guess" | Y | N/A |
| Inspect the third column data cells | They will have the classes of answer-column and hidden | Y | N/A |
| Comment out adding the hidden class to td3 and add `console.log("The current card is "+cardObject[currentCard]);` after defining the current card | The current card logged each time will be shown in the console | Y | N/A |
| Inspect the fourth column data cells | They will have the classes of result and correct-column | Y | N/A |
| Call tableBuild() function on a number | The script linking the guessing functionality JavaScript file will be appended to the html body | Y | N/A |

### Play click event:
| Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|
| Add `console.log("The play button has been pressed");` as the first action of the function to check it is connected properly | "The play button has been pressed" will appear in the console when the button is clicked | Y | N/A |
| Add `console.log("The sequence length is: "+sequenceLength);` after defining the sequenceLength | The correct sequenceLength will be displayed in the console when the button is clicked  | Y | N/A |
| Try to enter 0 as the sequence length | A modal will show, informing the user to enter a number between 1 and 52 when the button is clicked | N | A modal shows but the sequenceLength is set to 0 and the game can continue. FIX: move the sequenceLength assignment inside the conditional and set the original check to a new variable |
| Add `console.log("The length check is: "+lengthCheck);` below the lengthCheck assignment | The entered value will appear in the console even if outside the range of 1-52 when the button is clicked | Y | N/A |
| Enter 0 as the sequence length | The lengthCheck will be displayed in the console, as zero, a modal will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | Y | N/A |
| Enter a negative number as the sequence length | The lengthCheck will be displayed in the console, as the negative number, a modal will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | Y | N/A |
| Enter an integer larger than 52 in as the sequence length | The lengthCheck will be displayed in the console, as the integer, a modal will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | Y | N/A |
| Enter e as the sequence length | The lengthCheck will be displayed in the console, as zero, a modal will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | Y | N/A |
| Enter a decimal number 0-1 as the sequence length | The lengthCheck will be displayed in the console, as zero, a modal will inform the user to enter a number between 1-52 and the sequenceLength will not be defined when the button is clicked | Y | N/A |
| Enter a decimal number greater than 1 and less than 53 as the sequence length | The lengthCheck will be displayed in the console, as a rounded down integer, the sequenceLength will be assigned the same value and logged to the console, the game will continue | Y | N/A |
| Enter an integer number from 1-52 and click the button | The lengthCheck will be displayed in the console as the integer, the sequenceLength will be assigned the same value and logged to the console, the game will continue | Y | N/A |
| Enter a valid number and click play now | The sequence length display will show with the correct sequence length | Y | N/A |
| Enter a valid number and click play now | The play button will be assigned the class of hidden and disappear from the game area | Y | N/A |
| Enter a valid number and click play now | The sequence length picker and label will be assigned the class of hidden and disappear from the game area | Y | N/A |
| Add code to log the cards array before and after shuffling, then click the play button | The console will log the cards array twice, with the second being a shuffled version of the first array | Y | N/A |
| Add `console.log(cardsToPlay);` and `console.log(cardsToPlay.length === sequenceLength);` after defining the cards to play and click the button | The console will log the first n cards from the cards array where n is the sequenceLength, it will then log true showing that the cardsToPlay array length is the same as the chosen sequenceLength | Y | N/A |
| Enter a valid number and click play now | A number of shuffled cards equal to the chosen sequenceLength will appear in the game area | Y | N/A |
| Enter a valid number and click play now | The guess button will appear in the game area with the hidden class removed | Y | N/A |
| Try it out on smaller screens | The spacers will be removed | Y | N/A |

### Guess click event:
| Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|
| Add `console.log("The guess button has been pressed");` as the first action of the function to check it is connected properly and click the guess button | The console will log "The guess button has been pressed" | Y | N/A |
| Click the guess button | The guess button will be hidden and the hidden class will be attached to the html element | Y | N/A |
| Click the guess button | The guessing table will have the hidden class removed and will appear in the game area | Y | N/A |
| Click the guess button | The guessing table will have the sequenceLength number of rows attached with correct values | Y | N/A |
| Click the guess button | The card image divs will be removed from the html file and disappear from the game area | Y | N/A |
| Click the guess button on smaller screens | The spacers will be removed | Y | N/A |


### Reset click event:
| Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|
| Add `console.log("The reset button has been pressed");` as the first action of the function to check it is connected properly and click the reset button | The console will log "The reset button has been pressed" | Y | N/A |
| Click the reset button and inspect the table-container | The table-container-style class will be removed | Y | N/A |
| Play a game, log the value of sequenceLength to the console, click reset and log the value again | The value will be reset to undefined | Y | N/A |
| Refresh the page and click the reset button | No change to the game area | Y | N/A |
| Submit a valid sequence length and press reset (1)| Sequence length selector and label will reappear showing the placeholder text | Y | N/A |
| Submit a valid sequence length and press reset (2)| The sequenceLength display box will be removed from the display area | Y | N/A |
| Submit a valid sequence length and press reset (3) | The play button will reappear | Y | N/A |
| Submit a valid sequence length and press reset (4) | The guess button will be hidden | Y | N/A |
| Submit a valid sequence length and press reset (5) | The cards will be removed from the game area | Y | N/A |
| Submit a valid sequence length, press guess, then press reset (1) | The guessing table will be hidden with all added rows removed | Y | N/A |
| Submit a valid sequence length, press guess, then press reset (1) | The JavaScript link to score.js will be removed from the HTML body | Y | N/A |
| Press reset at any time | Any spacers will be replaced for smaller screens | Y | N/A |

### Submit guess click event:
| Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|
| Add `console.log("The submit button has been pressed");` as the first action of the function to check it is connected properly and click the submit button | The console will log "The submit button has been pressed" | Y | N/A |
| Add `console.log(siblings);` below assigning the siblings variable to the select elements and click the submit button | The console will log an object containing the two select elements | Y | N/A |
| Add `console.log(submittedAnswerInitial);` below reading the submittedInitialAnswer and click the submit button | The submittedInitialAnswer will appear in the console log | Y | Display "disableddisabled" if no card value or suit are selected. This is **bug 4**. |
| Fix bug 4 and submit a selection of "Card Value" and "Suit" | A modal will appear informing the user to choose a valid card value and suit and allow the user to resubmit | Y | N/A |
| Submit a valid card value selection and "Suit" | A modal will appear informing the user to choose a valid card value and suit and allow the user to resubmit | Y | N/A |
| Submit a valid suit selection and "Card Value" | A modal will appear informing the user to choose a valid card value and suit and allow the user to resubmit | Y | N/A |
| Submit two valid options | The submittedInitialAnswer will appear in the console log | Y | N/A |
| Add `console.log(submittedAnswer);` below assigning the submittedAnswer to the associated value of the submittedAnswerInitial in the cardObject object | The cardObject value associated to the submitted guess will be logged to the console | Y | N/A |
| Add `console.log(pSiblings);` after assigning the parent siblings to a variable | The console will log an object consisting of three table data cell elements, the first having the order value in, the second having the answer value in and the third being the empty result | Y | N/A |
| Add `console.log(correctAnswer);` after accessing the correct answer from the DOM | The console will log the contents of the answer column for that row | Y | N/A |
| Add `console.log(pSiblings[2]);` after accessing the result table data cell from the DOM |The console will log the contents of the results column for that row | Y | N/A |
| Submit a valid incorrect answer | That row's guess select and submission buttons will be disabled, the answer column will be revealed and the result column will show an N | Y | N/A |
| Submit the correct answer | That row's guess select and submission buttons will be disabled, the answer column will be revealed and the result column will show a Y | Y | N/A |
| Inspect the submit button when disabled | It will have the class of submitted | Y | N/A |
| Submit all answers | A modal will appear informing the user that the game is over and their score | Y | N/A |
| Score between 0 and 24% | The modal message will be "Try again..." | Y | N/A |
| Score between 25 and 49% | The modal message will be "Nice try!" | Y | N/A |
| Score between 50 and 74% | The modal message will be "Good Job!" | Y | N/A |
| Score between 75 and 100% | The modal message will be "Amazing!" | Y | N/A |

### JavaScript hover transitions
| Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|
| Hover the mouse over the contact me icon | The background colour changes to lava and the text colour changes to off-white | Y | N/A |
| Move mouse away from the contact me icon | The background colour reverts to off-white and the text colour reverts to lava | Y | N/A |
| Hover the mouse over the how to play icon | The background colour changes to off-black and the text colour changes to off-white | Y | N/A |
| Move mouse away from the how to play icon | The background colour reverts to off-white and the text colour reverts to off-black | Y | N/A |
| Click the contact me icon | The contact me modal and modal background appear | Y | N/A |
| Click close in the contact me modal | The contact me modal and modal background close | Y | N/A |
| Click the how to play modal | The how to play modal and modal background appear | Y | N/A |
| Click the how to play modal close button | The how to play modal and modal background close | Y | N/A |
| Cause the sequence length error modal to appear and click OK | The sequence length error modal and modal background close | Y | N/A |
| Cause the guess error modal to appear and click OK | The guess error modal and modal background close | Y | N/A |
| Complete the game and click close in the results modal | The results modal and modal background close | Y | N/A |
| Complete the game and click replay in the results modal | The results modal and modal background close | Y | N/A |

### EmailJS
| Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|
| Submit a valid form in the contact me modal | An alert will show thanking the user for their message | Y | N/A |
| Submit a valid form in the contact me modal | The form contents will be reset | Y | N/A |
| Submit a valid form in the contact me modal | The form contents will be sent to the developers email | Y | ![email result](/documentation/testing/emailjs-result.png) |
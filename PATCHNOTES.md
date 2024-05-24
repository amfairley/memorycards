# Patches

## Patch 1.01
Patch 1.01 was implemented after initial feedback on the web page from a group of friends, family, course colleagues and project assessor.

### Feedback
- The modal background does not extend past the bottom of the screen when scrolling. This is logged as Bug 7 and fixed.
- The 404 return button is easily missed.
- The guessing table page can be "too busy".
- More guidance on how to play would be appreciated.
- A visible slide bar on the how-to-play and contact-me modals is required.
- The deployment information in the README.md file could be more descriptive.
- The target audience and purpose of the site could be better described in the README.md file.
- A button to see the cards again once on the guessing stage would be nice.
- Set difficulties with set number of cards and checking chances would make it more streamlined.
- More security needs to be implemented to reduce spam and ensure the safety of user data.


### Gameplay Updates

### Display Updates

### JavaScript Updates
- All JavaScript code is wrapped in an event listener to ensure that the document has fully loaded prior to the JavaScript being accessed following best practices and making the code more robust by preventing potential errors arising from unavailable DOM elements.
- The deck of cards `cardObject` is defined using `const` rather than `var` and the variable `sequenceLength` is defined using `let` instead of `var`. This is better practice and reduces vulnerabilities in the code, as the variables will not be able to be accessed by other JavaScript files. This is now possible due to the advances regarding [Bug 1](#bug-1).
- The `makeDivs` function is now defined with integer and array parameters and returns a div array when called.
- The `tableBuild` function has been revolutionised for clearer legibility and improved versatility and modification. This was done by splitting the function into separate functions that deal with only one or two tasks. These functions are then called within the tableBuild function. The functions are: `tableRow`, `tableColumn1`, `tableColumn2`, `tableColumn3`, `tableColumn4`, `tableSelect1`, `tableSelect2`, and `tableSubmit`. The `tableBuild` function is now defined with integer and array parameters as opposed to previously just an integer.
- The submit guess button click event was refactored and sections were defined as separate functions to streamline this rather messy chunk of code. The conditional to check whether the answer is correct is refactored as the `checkAnswer` function and the conditional to check the final score and give a corresponding message is refactored into the `result` function. This event listener has also been moved into the game.js file from the score.js file when [Bug 1](#bug-1) was fixed.
- The reset button event listener had the check for the link to the score.js file removed, as this file is no longer needed as per the fix to [Bug 1](#bug-1).
- An event listener for the quantity sequence length input has been added to allow the value to be submitted with the enter button as well as the play now button in a bid to ensure the accessibility of the game to all audiences.

### Display updates
- 

### Bug fixes

#### Bug 1
The work around to Bug 1 ([click here to see](/README.md#bugs)) proved clunky and did not meet the highest standards as it introduced vulnerabilities in the code in the form of defining variables on a global scale to allow them to be accessed by multiple script files. This was patched out and the functionality of the second JavaScript file, score.js, was combined into the game.js file. This was achieved in 3 steps:
1. The event listener for the submit buttons was defined in the body of the game.js file as the function `submitGuess`.
2. This function was added to the submit buttons in the `tableColumn2` function before appending them to the table cell using 
```javascript
$(".submit-guess").click(submitGuess);
```
3. A single event listener was added to the body so that when the buttons were pressed, identified by their class, the `submitGuess` function is called.
```javascript
$("body").on('click', '.submit-guess', submitGuess);
```

#### Bug 7
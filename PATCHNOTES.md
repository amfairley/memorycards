# Patches

## Patch 1.01
Patch 1.01 was implemented after initial feedback on the web page from a group of friends, family, course colleagues and project assessor.

### Feedback
- The modal background does not extend past the bottom of the screen when scrolling. This is logged as [Bug 7](#bug-7) and has been fixed.
- The 404 return link is easily missed. This was rectified by making it look more like a button.
- The guessing table page can be "too busy".
- More guidance on how to play would be appreciated.
- A visible slide bar on the how-to-play and contact-me modals is required. These were added.
- The deployment information in the README.md file could be more descriptive. This section has been expanded to include more details and helpful screenshots, along with further options for local deployment. Find the updated section in the README file [here](/README.md#deployment).
- The target audience and purpose of the site could be better described in the README.md file.
- A button to see the cards again once on the guessing stage would be nice.
- Set difficulties with set number of cards and checking chances would make it more streamlined.
- More security needs to be implemented to reduce spam and ensure the safety of user data.
- Despite quick load times and high performance; the image format for the playing cards are not optimised. These were optimised to the .webp format and described further in these patch notes.


### Gameplay Updates

### Display Updates
- The 404 link back to the homepage has been updated to look more like a button for a better user experience. The features section in the README.md file has been updated accordingly and can be found [here](/README.md#404-page-message). 
- The how to play and contact me modals both have a visible scroll bar when smaller. This was acheived using media queries to add the slide bar when the screen height became less than the modal heights. The curved border of the how to play modal is removed at smaller screen heights due to a repetition of [Bug 5](/README.md#bugs).

### JavaScript Updates
- All JavaScript code is wrapped in an event listener to ensure that the document has fully loaded prior to the JavaScript being accessed following best practices and making the code more robust by preventing potential errors arising from unavailable DOM elements.
- The deck of cards `cardObject` is defined using `const` rather than `var` and the variable `sequenceLength` is defined using `let` instead of `var`. This is better practice and reduces vulnerabilities in the code, as the variables will not be able to be accessed by other JavaScript files. This is now possible due to the advances regarding [Bug 1](#bug-1).
- The `makeDivs` function is now defined with integer and array parameters and returns a div array when called.
- The `tableBuild` function has been revolutionised for clearer legibility and improved versatility and modification. This was done by splitting the function into separate functions that deal with only one or two tasks. These functions are then called within the tableBuild function. The functions are: `tableRow`, `tableColumn1`, `tableColumn2`, `tableColumn3`, `tableColumn4`, `tableSelect1`, `tableSelect2`, and `tableSubmit`. The `tableBuild` function is now defined with integer and array parameters as opposed to previously just an integer.
- The submit guess button click event was refactored and sections were defined as separate functions to streamline this rather messy chunk of code. The conditional to check whether the answer is correct is refactored as the `checkAnswer` function and the conditional to check the final score and give a corresponding message is refactored into the `result` function. This event listener has also been moved into the game.js file from the score.js file when [Bug 1](#bug-1) was fixed.
- The reset button event listener had the check for the link to the score.js file removed, as this file is no longer needed as per the fix to [Bug 1](#bug-1).
- An event listener for the quantity sequence length input has been added to allow the value to be submitted with the enter button as well as the play now button in a bid to ensure the accessibility of the game to all audiences.


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
When the user scrolls with the modal open, the modal background only covers the initial viewport, not the entire page. This was checked and confirmed by populating the card area with enough cards to extend the page height until it required a scroll bar, then opening a modal (how-to-play or contact-me) and scrolling. This was fixed by changing the css style of the modal background; updating the position to fixed rather than absolute.
<details><summary>Bug 7 Issue</summary>
<img src="/documentation/bug-7-issue.png">
</details>
<details><summary>Bug 7 Fix</summary>
<img src="/documentation/bug-7-fix.png">
</details>

### Image Optimisation
[Cloud Convert](https://cloudconvert.com/) was used to convert the card images from .png to .webp format for faster load times and optimised performance of the webpage. This reduced the combined size of the 52 images from 3.66mb to 1.09mb. 
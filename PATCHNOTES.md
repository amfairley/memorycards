# Patches

**PLEASE NOTE: THERE IS A BUG ON GITHUB WHEN CLICKING LINKS TO .MD FILES. THIS IS DOCUMENTED IN [BUG 8](#bug-8) AND A FIX IS PROVIDED**

## Patch 1.01
Patch 1.01 was implemented after initial feedback on the web page from a group of friends, family, course colleagues and project assessor.

### User Feedback:
The project was shown to friends, family, and course colleagues for user feedback that will be addressed and used to improve this webpage. Listed here are the constructive criticism and pain points that I received.
1. The modal background does not extend past the bottom of the screen when scrolling. This is logged as [Bug 7](#bug-7) and has been fixed.
2. The 404 return link is easily missed. This was rectified by making it look more like a button.
3. The target audience and purpose of the site could be better described in the README.md file. This was addressed by updating the target audience to include those interest, or participating, in the [World Memory Championships](https://www.worldmemorychampionships.com/sport/) and the idea of Speed Cards is explained in the README file.
4. On larger screens the card area and table area are too spread out horizontally
5. More security needs to be implemented to reduce spam and ensure the safety of user data.
6. A button to see the cards again once on the guessing stage would be nice.
7. Set difficulties with set number of cards and checking chances would make it more streamlined.



### Assessor Feedback
In order to address feedback from the project assessor, each item is logged here for reference when fixes and updates are documented later in this file.
1. The guessing table requires clear visual clues.
2. The guessing table requires clear instructions for how to list the cards in order.
3. Informative messages are required to feedback to the user whether their guess was correct or incorrect.
4. Ensure all interactive elements are properly labelled for screen readers.
5. Ensure that the interface is navigable using keyboard controls as well as mouse input.
6. Add a slider bar to the playing instructions.
7. Is the layout clear and structured?
8. Are the graphics legibile and visually appealing?
9. Is the text legible and visually appealing?
10. Address issue of redirecting users who land on non-existent pages.
11. Insert screenshots of finished project that align to relevant user stories.
12. Have you thoroughly tested all aspects of your web app?
13. Have you tested edge cases and potential user interactions?
14. Are there any scenarios or functionalities that have not been adequately tested?
15. Have you conducted regression testing to ensure that  new updates or changes to your web app do not inadvertently break existing  features or functionalities?
16. Have you assessed the performance of your webapp on different screen sizes?
17. Have you assessed the performance of your webapp on different devices?
18. Have you assessed the performance of your webapp on different network speeds?
19. Have you used actual users to gather feedback on intuitiveness and ease?
20. Have you verified that your web app is accessible to users with disabilities by testing with screen readers, keyboard navigation, and other assistive technologies?
21. Does your web app adhere to accessibility  standards and guidelines?
22. Have you performed security testing to identify and address any potential vulnerabilities or weaknesses in your web app? Is sensitive user data handled securely, and are appropriate measures in place to protect against common security threats?
23. Implement continuous Inteegration/Continuous development.
24. Optimize the load times using code minification and image optimisation.
25. Design the website with scalability in mind, allowing it to handle increasing numbers of users and data without sacrificing performance.
26. Implement monitoring and analytics tools to track the performance, usage, and errors of the webpage in real time.
27. Incorporate mechanisms for gathering user feedback and engagement.
28. Consider providing a step-by-step guide considering the user's perspective for deployment.
29. Ensure that the deployment guide covers setting up any necessary accounts or platforms for deployment.
30. Ensure that the deployment guide covers cloning the repository or downloading the application file.
31. Ensure that the deployment guide covers installing any required dependencies or packages.
32. Ensure that the deployment guide covers configuring environment variables or settings, if applicable.
33. Ensure that the deployment guide covers uploading files to the hosting platform and configuring settings.
34. Ensure that the deployment guide covers verifying the deployment and testing the application's functionality.
35. Ensure that the deployment guide covers providing guidance on how to access and use the deployed application.

### Gameplay Updates

### Display Updates
- Guessing table: **Assessor Feedback Addressed: 1, 2, 3**
    * A title has been added to the guessing table area to inform the users that they must now enter their guesses into the table. This was achieved by adding a H2 element to the table-container div, then moving the hidden class and hide/show table functionality from the table itself to the table-container div, allowing the title to appear and disappear with the table. The H2 title was given the font-family as the text in the game to keep the styling consistent and is centred above the table.
    * ![Guessing table title](/documentation/features/guessing-table-title.png)
    * The submit guess buttons now change their text to "Correct" or "Incorrect" depending on the guess. This was achieved through the use of an if statement in the `submitGuess` click event.
    * The "Correct" and "Incorrect" buttons are coloured green and red respectively using CSS transitions and applying the styles in the above mentioned `submitGuess` click event.
    * ![Submit button values](/documentation/features/submit-button-correct-incorrect.png)
    * Since the button turns to red when the guess in incorrect, the red hover styling was removed from these buttons and instead have the off-black background with off-white text that turns to an off-white background with off-black text when hovered. The hover effect is removed once it is coloured green/red depending on the answer provided. This does make the button background match the row background when the row is hovered but the button bordering and text colour prevent it from getting lost.
    * ![Submit button row hover](/documentation/features/submit-button-row-hover.png)
    * ![Submit button hover](/documentation/features/submit-button-hover.png)
    * The results table column is removed, as its functionality is now defunct with the update to the Submit button.
    * ![New table columns](/documentation/features/table-layout-update.png)
- How to play modal: **Assessor Feedback Addressed: 6**, **User Feedback Addressed: 3**
    * The how to play modal has had a scroll bar fitted and the height of the modal has been set to auto and a maximum of 95vh.The curved border of the how to play modal is removed due to a repetition of [Bug 5](/README.md#bugs). 
    * The instructions have also been updated to specify buttons by name, recommend a memorisation technique, recommend that new players start with fewer cards, and keeping the tone motivational and uplifting.
    * ![How to play updated](/documentation/features/how-to-play-updated.png)
- The 404 link back to the homepage has been updated to look more like a button for a better user experience. The features section in the README.md file has been updated accordingly and can be found [here](/README.md#404-page-message). This address User Feedback 2.
- The how to play and contact me modals both have a visible scroll bar when smaller. This was acheived using media queries to add the slide bar when the screen height became less than the modal heights. 

### JavaScript Updates
- All JavaScript code is wrapped in an event listener to ensure that the document has fully loaded prior to the JavaScript being accessed following best practices and making the code more robust by preventing potential errors arising from unavailable DOM elements.
- The deck of cards `cardObject` is defined using `const` rather than `var` and the variable `sequenceLength` is defined using `let` instead of `var`. This is better practice and reduces vulnerabilities in the code, as the variables will not be able to be accessed by other JavaScript files. This is now possible due to the advances regarding [Bug 1](#bug-1).
- The `makeDivs` function is now defined with integer and array parameters and returns a div array when called.
- The `tableBuild` function has been revolutionised for clearer legibility and improved versatility and modification. This was done by splitting the function into separate functions that deal with only one or two tasks. These functions are then called within the tableBuild function. The functions are: `tableRow`, `tableColumn1`, `tableColumn2`, `tableColumn3`, `tableSelect1`, `tableSelect2`, and `tableSubmit`. The `tableBuild` function is now defined with integer and array parameters as opposed to previously just an integer.
- The submit guess button click event was refactored and sections were defined as separate functions to streamline this rather messy chunk of code. The conditional to check whether the answer is correct is refactored as the `checkAnswer` function and the conditional to check the final score and give a corresponding message is refactored into the `result` function. This event listener has also been moved into the game.js file from the score.js file when [Bug 1](#bug-1) was fixed.
- The reset button event listener had the check for the link to the score.js file removed, as this file is no longer needed as per the fix to [Bug 1](#bug-1).
- An event listener for the quantity sequence length input has been added to allow the value to be submitted with the enter button as well as the play now button in a bid to ensure the accessibility of the game to all audiences.
- To address **Assessor Feedback 1,2,3** the `tableBuild` function no longer creates a fourth column, so the `tableColumn4` function was deleted. The correct answers are now stored in the global variable `results` which is used to calculate the final score in the `submitGuess` function and is reset in the reset button event listener.

### Patch 1.01 Validation
#### Accessibility
**New colour used for "Correct" guesses**
Green (#008000) is used to highlight correct guesses. This colour is an industry standard for showing that something is correct and when paired with the off-white font colour, gives a great contrast of 4.71 for those with colour blindness.
<details><summary>Correct answer contrast</summary>
<img src="/documentation/features/submit-button-correct-contrast.png">
</details>
<br>

**Ensuring all interactive elements are properly labelled for screen readers. This addresses Assessor Feedback 4.**
For this, I went through all the game elements, found those which were not labelled for full accessibility and updated them. Doing this allowed me to ensure my completeness in meeting the guidance for accessibility.
| Game Element | Labelled? | Notes |
|---|---|---|
| Game logo link | Y | Aria Labelled |
| How to play modal | N | Role added as button and aria labelled for opening the how to play modal |
| How to play modal close button | N | Buttons do not require aria labelling if their purpose and text is clear, like this |
| Contact me modal |  N | Role added as button and aria labelled for opening the contact me modal |
| Contact me modal form elements | Y | The entry elements in the form are labelled, rendering aria-labels unnecessary as the labels are descriptive enough and none of the form elements are icons |
| Reset Game button | N | Buttons do not require aria labelling if their purpose and text is clear, like this |
| Sequence length selection | Y | The sequence length selection has a label associated with it |
| Play now button | N | Aria label added to inform the user to click this to submit their selected sequence length |
| Guess button | N | Aria label added to inform the user that this button hides the cards and advances to the guessing stage |
| Card images | Y | All have an alt attribute associated to them |
| Card select boxes | N | These have had aria labels added to them |
| Submit guess button | N | These have had aria labels added to them |
| Footer logo link | Y | Aria Labelled |
| GitHub link | Y | Aria Labelled |


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
This bug fix addresses **User feedback 1**.
When the user scrolls with the modal open, the modal background only covers the initial viewport, not the entire page. This was checked and confirmed by populating the card area with enough cards to extend the page height until it required a scroll bar, then opening a modal (how-to-play or contact-me) and scrolling. This was fixed by changing the css style of the modal background; updating the position to fixed rather than absolute.
<details><summary>Bug 7 Issue</summary>
<img src="/documentation/bug-7-issue.png">
</details>
<details><summary>Bug 7 Fix</summary>
<img src="/documentation/bug-7-fix.png">
</details>

#### Bug 8
When clicking links from within a .md file that direct to specific parts of another .md file, the page is redirected to the top of that .md file instead of the section linked, however the correct link is present in the URL and so simply refreshing the opened page will take the user to the section originally linked to.

### Image Optimisation
[Cloud Convert](https://cloudconvert.com/) was used to convert the card images from .png to .webp format for faster load times and optimised performance of the webpage. This reduced the combined size of the 52 images from 3.66mb to 1.09mb. 
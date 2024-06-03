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
15. Have you conducted regression testing to ensure that new updates or changes to your web app do not inadvertently break existing  features or functionalities?
16. Have you assessed the performance of your webapp on different screen sizes?
17. Have you assessed the performance of your webapp on different devices?
18. Have you assessed the performance of your webapp on different network speeds?
19. Have you used actual users to gather feedback on intuitiveness and ease?
20. Have you verified that your web app is accessible to users with disabilities by testing with screen readers, keyboard navigation, and other assistive technologies?
21. Does your web app adhere to accessibility standards and guidelines?
22. Have you performed security testing to identify and address any potential vulnerabilities or weaknesses in your web app? Is sensitive user data handled securely, and are appropriate measures in place to protect against common security threats?
23. Implement continuous Intergration/Continuous development.
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
- Contact Me Form: **Assessor Feedback Addressed: 27**
    * The contact me form is specifically described to gather feedback from users, fulfulling this criteria. The functionality, usage, and requirements are extensively covered in the README.md and TESTING.md files and user response has been that the contact me form works well with no issues and I can confirm that responses via the contact me form have been received via email.


### Display Updates
- Total layout: **Assessor Feedback Addressed: 7, 8, 9**
    * The version 1 [WAVE accessibility results](/TESTING.md#accessibility) showed no issues with the font size for legibility, with all font colours showing a high contrast against their backgrounds. No font size smaller than 16px was used, in line with the [Bureau of Internet Accessibility](https://www.boia.org/) guidelines. Additionally, all user feedback showed no issue with reading any of the text.
    * The layout of the webpage is described in the [Skeleton](/README.md#skeleton) and [Surface](/README.md#surface) sections of the README file and is clear and structured in keeping with common webpage structural conventions to allow quick and intuitive user engagement.
    * The graphics are all legibile with no pixilation, checked through manual testing and user feedback to the site.
- Card Game Area: **Assessor Feedback Addressed: 7**
    * For better compatability with larger screens, a maximum width of the game area of 1100px has been introduced to keep the cards from being spread out too much horizontally. This allows for a better user experience on wider displays and generally looks better.
    * ![Card game max width](/documentation/features/card-display-max-width.png)
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
    * The maximum width of the guessing table has been added to be 800px so that the white space around the selections is minimised on larger screens leading to a better user experience.
    * ![Guessing table max width](/documentation/features/guessing-table-max-width.png)
- How to play modal: **Assessor Feedback Addressed: 6**, **User Feedback Addressed: 3**
    * The how to play modal has had a scroll bar fitted and the height of the modal has been set to auto and a maximum of 95vh.The curved border of the how to play modal is removed due to a repetition of [Bug 5](/README.md#bugs). 
    * The instructions have also been updated to specify buttons by name, recommend a memorisation technique, recommend that new players start with fewer cards, and keeping the tone motivational and uplifting.
    * ![How to play updated](/documentation/features/how-to-play-updated.png)
- Contact me modal : **Assessor Feedback Addressed: 6**
    * The scroll bar on the contact me modal has been made to be visible when the modal is larger than the screen size.
    * ![Contact me updates](/documentation/features/contact-me-slider.png)
- 404 page: **Assessor Feedback Addressed: 10**
    * The 404 page functionality has been manually checked and confirms the original success of the manual testing carried out. Additionally, user feedback indicates that the functionality also works.
    * The 404 link back to the homepage has been updated to look more like a button for a better user experience including a shadow around the border in case the original design was too subtle.
    * Link: ![Updated 404 link](/documentation/features/message-404.png) Hover: ![Updated 404 link hover](/documentation/features/message-404-hover.png)


### JavaScript Updates
- All JavaScript code is wrapped in an event listener to ensure that the document has fully loaded prior to the JavaScript being accessed following best practices and making the code more robust by preventing potential errors arising from unavailable DOM elements.
- The deck of cards `cardObject` is defined using `const` rather than `var` and the variable `sequenceLength` is defined using `let` instead of `var`. This is better practice and reduces vulnerabilities in the code, as the variables will not be able to be accessed by other JavaScript files. This is now possible due to the advances regarding [Bug 1](#bug-1).
- The `makeDivs` function is now defined with integer and array parameters and returns a div array when called.
- The `tableBuild` function has been revolutionised for clearer legibility and improved versatility and modification. This was done by splitting the function into separate functions that deal with only one or two tasks. These functions are then called within the tableBuild function. The functions are: `tableRow`, `tableColumn1`, `tableColumn2`, `tableColumn3`, `tableSelect1`, `tableSelect2`, and `tableSubmit`. The `tableBuild` function is now defined with integer and array parameters as opposed to previously just an integer.
- The submit guess button click event was refactored and sections were defined as separate functions to streamline this rather messy chunk of code. The conditional to check whether the answer is correct is refactored as the `checkAnswer` function and the conditional to check the final score and give a corresponding message is refactored into the `result` function. This event listener has also been moved into the game.js file from the score.js file when [Bug 1](#bug-1) was fixed.
- The reset button event listener had the check for the link to the score.js file removed, as this file is no longer needed as per the fix to [Bug 1](#bug-1).
- An event listener for the quantity sequence length input has been added to allow the value to be submitted with the enter button as well as the play now button in a bid to ensure the accessibility of the game to all audiences. This addressed **Assessor Feedback 5**.
- To address **Assessor Feedback 1,2,3** the `tableBuild` function no longer creates a fourth column, so the `tableColumn4` function was deleted. The correct answers are now stored in the global variable `results` which is used to calculate the final score in the `submitGuess` function and is reset in the reset button event listener.

### Documentation Updates
- Screenshots of features: **Assessor Feedback Addressed: 11**
    * Screenshots of each feature are provided in the [Features](/README.md#features) of the README.md file where they are clearly linked to each user story. The decision was taken to not duplicate these screenshots in the TESTING.md file when the user stories are testing as it was deemed they would detract from the information and make the page messy and harder to read.

### Development Updates
- Continuous Integration/Continuous Development: **Assessor Feedback Addressed: 23**
    * The use of continuous development and continuous integration software was beyond the remit for this project, however aspects of it have been included in the development process where possible.
    * Git has been used for the version control for the webpage. Though not strictly continuous integration, version control and continuous integration are synergystic and have a large cross over in their aims and implementation and manage the changes of the code over time. The repository was not shared with any other developers for this single developer project, so a shared repository and necessary continuous integeration practices such as automated builds or automated testing were not required. That being said, the spirit and philosophy of continuous integration and continuous development can be seen in my approach to testing and implementing new features, described below in the [Patch 1.01 Testing](#patch-101-testing) section.
    * Additionally, GitHub projects was used for project management for this patch update and can be found [here](https://github.com/users/amfairley/projects/2/views/1). This allowed for feedback to be tracked as individual issues ensuring that all user and assessor feedback was addressed and implemented, where necessary, into the project. On top of this, the [MoSCoW method](https://www.marketing-logic.com/salesforce/the-moscow-method/) was used when assigning the issues in order to prioritise tasks based on their importance.
- Scalability: **Assessor Feedback Addressed: 25**
    * Scalability for a static front end website with some JavaScript functionality consisting of a single webpage has not been a high priority due to its high performance. However, many aspects of scalability have been included during the development process.
    * The assets are saved on GitHub and are accessible by GitHub pages when the site was deployed. This mimics the benefits of a Content Delivery Network (CDN).
    * Image optimisation is used to optimise the performance.
    * The JavaScript is written to optimise efficiency and reduce DOM manipulations. An example of this is having the game area and guessing table headers hidden and then showing them, rather than creating them through JavaScript.
    * The website is responsive and works well on all tested devices and screen sizes.
    * Future updates would include real time monitoring and analytics to ensure good user experience when a back end is added to allow users to create profiles and track their scores.
- Monitoring and Analytics: **Assessor Feedback Addressed: 26**
    * The performance has been tested using Chrome Dev Tool's Lighthouse, which can be found in the [Testing file](/TESTING.md#performance) and below in testing for this patch.
    * Real time analytics of the back end will be in a future patch once a back end is added.
    * Despite being beyond the remit of this project, [Google Analytics](https://marketingplatform.google.com/about/analytics/) has been used to provide analytics about how users use my webpage. This includes how many page views, how many users scroll to the bottom of the page, indicating that content hinting is working, and how many users use the contact me form. The data received from this will be used to infrom the future updates to the webpage. This required the following code to be added to the index.html and 404.html pages immediately after the head element as directed:
```HTML
<!-- Google tag (gtag.js) For Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PXSS0CS8J9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PXSS0CS8J9');
</script>
```
- Security: **Assessor Feedback Addressed: 22**
    * Despite being beyond the remit of this project, substantial effort has been given to making the website as secure as possible.
    * The developer has been trained to spot spam and not to click potential phishing links when reading through the responses from the contact me form.
    * [obfuscator.io](obfuscator.io) was used to hide the public key for emailjs on the html pages for extra security so that this key cannot be used for malicious behaviour.
**Before**:
``` JavaScript
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "",
    });
})();
```
**After**:
``` JavaScript
(function(_0xf789cc,_0x25c114){var _0x7bce6d=_0x5215,_0x479cf6=_0xf789cc();while(!![]){try{var _0x1ace72=-parseInt(_0x7bce6d(0x101))/0x1*(parseInt(_0x7bce6d(0xfa))/0x2)+parseInt(_0x7bce6d(0x100))/0x3*(-parseInt(_0x7bce6d(0xf7))/0x4)+parseInt(_0x7bce6d(0xff))/0x5*(-parseInt(_0x7bce6d(0xfd))/0x6)+-parseInt(_0x7bce6d(0xf6))/0x7*(-parseInt(_0x7bce6d(0xfe))/0x8)+parseInt(_0x7bce6d(0xfc))/0x9+parseInt(_0x7bce6d(0xf9))/0xa+parseInt(_0x7bce6d(0xf8))/0xb*(parseInt(_0x7bce6d(0xfb))/0xc);if(_0x1ace72===_0x25c114)break;else _0x479cf6['push'](_0x479cf6['shift']());}catch(_0x2b5306){_0x479cf6['push'](_0x479cf6['shift']());}}}(_0x247f,0xc1df3),(function(){emailjs['init']({'publicKey':'5Il-1n7VCJG_mw70w'});}()));function _0x5215(_0x353a77,_0x4f3f1d){var _0x247f40=_0x247f();return _0x5215=function(_0x52157c,_0x1157e8){_0x52157c=_0x52157c-0xf6;var _0xb69795=_0x247f40[_0x52157c];return _0xb69795;},_0x5215(_0x353a77,_0x4f3f1d);}function _0x247f(){var _0x35bdbb=['8686370yZGlwi','314dvSCnL','21360348EYihkr','7658721vPbMUh','4182CYtsRP','8zXggRY','9695RHIoQz','3158247HZOQGP','5053jlfnEj','3444119MYoLqo','4qrNPHH','11hKiDHU'];_0x247f=function(){return _0x35bdbb;};return _0x247f();}
```


### Patch 1.01 Testing

Addressing **Assessor Feedback: 12, 13, 14, 15**:
- All aspects of the site have been sufficiently tested and have now gone through user testing since version 1.00 was released. Feedback has been incorporated into this patch and total retesting of the site has been completed with the outcomes documented in this section.
- Edge cases were considered and tested when writing the JavaScript code for this webpage. Although no automatic testing was incorporated; a test driven approach was taken nonetheless. This is evidenced in the limitation and sanitisation of the sequence length input by the user and the requirements for submitting both guesses in the guessing table and user feedback in the contact me form.
- There are no scenarios or functionalities that have not been adequately tested. Given a longer time frame for the project, automatic testing of the JavaScript code using Jest would have been implemented, however it was not a requirement for this project and the manual testing has been extensive with the benefits and outcomes described in the [TESTING.md](/TESTING.md) file.
- Regression testing was incorporated from the start, though behind the scenes, as to not flood the testing file with unnecessary information. For each function, interactivity, and style introduced to the project, they were validated and manually tested to ensure that they worked as expected and did not impact the working of any others. Once the project was ready to deploy, these tests were completed again to ensure compliance and a good webpage that both works and is consistent. A similar philosophy has been used for the updates in each patch. The individual changes are validated and tested and once all changes have been made, the entirity of the tests in [TESTING.md](/TESTING.md) are rerun along with testing the updates to ensure that the updates do not break the game or webpage. Admittedly this is quite a clunky approach, however it works well for this single page webpage by a single developer and allows efficient testing and bug fixing. As it is a single webpage with minimal activity and styling, the risk of regression is low, but the aforementioned steps that I have taken have made this risk negligable.

#### User testing
Addressing **Assessor Feedback 19, 20**. The project was shown to a total of 10 friends, family, and course colleagues for user feedback including a friend who is partially sighted who gave invaluable feedback on the accessibility of the site. This also allowed multiple browsers and devices to be tested. Criticisms and pain points are numbered above in [User Feedback](#user-feedback) with positives and feedback data outlined here.
<br>

**Browsers Used:**

| | Chrome | Firefox | Opera | Safari | Edge | Brave |
|---|---|---|---|---|---|---|
| Browser Usage | 2 | 0 | 1 | 6 | 0 | 1 |

There was no negative feedback that was browser specific. Although no users tested Edge or Firefox, those are browsers that I have access to and had already conducted browser compatability testing with.
<br>

**Devices Used:**
| | Desktop | Tablet | iPhone | Android Phone |
| --- | --- | --- | --- | --- |
| Device usage | 1 | 2 | 6 | 1 |

There was no negative feedback that was device specific, which was great news as this covered many options of screen sizes. I had previously tested some of the devices using Chrome Dev Tools, however it was good to see that this was a suitable substitute to testing the devices themselves. This also addresses **Assessor Feedback: 16, 17**.
<br>

**Positive Feedback**
- The instructions were clear and intuitive to find
- The contact me form is well considered, preventing the user from putting in incorrect values or leaving fields blank
- The 404 page works well
- Allowing the user to select the number of cards lets them progress at their own rate and doesn't "dumb down" the gameplay
- There is no fuss, you can start the game straight away
- The error modals for choosing number of cards or submitting an invalid guess were useful and stopped the users breaking the game/having to restart
- Having different results messages for different scores is a nice touch
- Works with the [Jaws screenreader](https://www.freedomscientific.com/products/software/jaws/) with no complaints.

#### Validation
The HTML, CSS, JavaScript, and Accessibility were validated in the same way as in [TESTING.md](/TESTING.md) to ensure that any additions did not impact the quality of the website.
<details><summary>HMTL validation results - index.html</summary>
<img src="/documentation/testing/validation-html-homepage-patch101.png">
</details>
<details><summary>HMTL validation results - 404.html</summary>
<img src="/documentation/testing/validation-html-404-patch101.png">
</details>
<details><summary>CSS validation results</summary>
<img src="/documentation/testing/validation-css-patch101.png">
</details>
<details><summary>Accessibility validation results - index.html</summary>
<img src="/documentation/testing/wave-results-homepage-patch101.png">
</details>
<details><summary>Accessibility validation results - 404.html</summary>
<img src="/documentation/testing/wave-results-404-patch101.png">
</details>

With the CSS there were no errors and no warnings associated with my written code.<br>
With the accessibility validation, the extra bullet points in the how-to-play modal resulted in more justified content alerts, but still no errors. The JavaScript was passed through JSHint again with no errors.

#### Accessibility
Accessibility was tested in the [TESTING.md](/TESTING.md#accessibility) file to meet the [W3C Web Accessibility Initiative](https://www.w3.org/WAI/WCAG22/quickref/) addressing **Assessor Feedback 21**. On top of this, further efforts have been made on existing and new additions to the webpage as outlined below.
**New colour used for "Correct" guesses**
Green (#008000) is used to highlight correct guesses. This colour is an industry standard for showing that something is correct and when paired with the off-white font colour, gives a great contrast of 4.71 for those with colour blindness.
<details><summary>Correct answer contrast</summary>
<img src="/documentation/features/submit-button-correct-contrast.png">
</details>
<br>

**Ensuring all interactive elements are properly labelled for screen readers. This addresses Assessor Feedback 4, 20.**
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
For added security, I played through the game and opened/closed the modals using only the keyboard and only the mouse finding no issues, addressing **Assessor Feedback: 5, 20**. Despite this, functionality to submit the sequence length with the enter key was added. Feedback from a partially sighted user was positive and they identified no issues with their screenreader or being able to play the game.

#### Performance
The performance of the site was good as seen [here](/TESTING.md#performance) but efforts have been taken to improve this.
- Image Optimisation: **Addressess Assessor Feedback: 24**
    * [Cloud Convert](https://cloudconvert.com/) was used to convert the card images from .png to .webp format for faster load times and optimised performance of the webpage. This reduced the combined size of the 52 images from 3.66mb to 1.09mb.
- Code minification: **Addresses Assessor Feedback: 24**
    * The JavaScript was updated as shown [here](#javascript-updates). This resulted in more concisely written, secure code spread over fewer files improving the performance of the site. As this project is submitted for grading, full code minification was not undertaken as to provide clear and easy to read code to the assessor. However, going forward, should the performance suffer, code minification can be revisited. It makes the code look like this: ![Minified Code](/documentation/code-minification.png)
- The performance was initially tested the same was as in [TESTING.md](/TESTING.md) ensuring scores of 100 in Accessibility, Best Practices, and SEO were maintained. To address **Assessor Feedback 18** network throttling was introduced and the pages were run simulating "Fast 3G" and "Slow 3G", the two preset speeds for Google Chrome Dev Tools lighthouse. From the results below, it is clear that the performance of this website is very high.
<details><summary>index.html normal speed</summary>
<img src="/documentation/testing/lighthouse-performance-homepage-update-normal.png">
</details>
<details><summary>index.html fast 3G</summary>
<img src="/documentation/testing/lighthouse-performance-homepage-update-fast-3g.png">
</details>
<details><summary>index.html slow 3G</summary>
<img src="/documentation/testing/lighthouse-performance-homepage-update-slow-3g.png">
</details>
<details><summary>404.html normal speed</summary>
<img src="/documentation/testing/lighthouse-performance-404-update-normal.png">
</details>
<details><summary>404.html fast 3G</summary>
<img src="/documentation/testing/lighthouse-performance-404-update-fast-3g.png">
</details>
<details><summary>404.html slow 3G</summary>
<img src="/documentation/testing/lighthouse-performance-404-update-slow-3g.png">
</details>

#### Manual testing
All of the manual and JavaScript manual testing from the [TESTING.md](/TESTING.md) file was rerun and all tests passed. Added tests are outlined below:

| Feature | Action | Expected result | Passed | Comments |
|-----|-----|-----|-----|-----|
| Length selector | Select a valid number and press enter | Game progresses | Y | As expected |
| Submit button | Get an answer correct | Button turns green and says "Correct" | Y | As expected |
| Submit button | Get an answer incorrect | Button turns red and says "Incorrect" | Y | As expected |
| Submit button | Hover after submitting an answer | Nothing | Y | As expected |
| 404 link | Click it | Redirected to home page | Y | As expected |
| How to play modal | Open it | Slider bar is visible and works | Y | As expected |
| Contact me modal | Open and resize | Slider bar appears when modal size is less than text size and works | Y | As expected |



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

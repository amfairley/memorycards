![Website logo]()

---

# Memory Cards

*A game designed to test your memory. Can you correctly recall the order of a shuffled deck of cards?*

This memory card game is a fun, enjoyable way to put your memory to the test. You can select the length of the series of cards, look for them as long as you like, before hiding them and replicating the order in your guesses. t provides value to the user through the enjoyable gameplay and replayability, allowing the user to set how difficult it is by selecting the number of cards to memorise. The development followed a mobile-first approach, focusing on playability whilst on long car, train, or plane journeys. Bootstrap 5 and jQuery 3 libraries were used to streamline the development of the code. 

![A mock-up image of the website]()

[Click here to access the site]()

---

## Table Of Contents
1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
    3. [Developer Goals](#developer-goals)
2. [User Stories](#user-stories)
    1. [First Time Visitor Goals](#first-time-visitor-goals)
    2. [Returning Visitor Goals](#returning-visitor-goals)
    3. [Frequent Visitor Goals](#frequent-visitor-goals)
3. [Five Planes of UX](#five-planes-of-ux)
    1. [Strategy](#strategy)
        - [Viability and Feasibility](#viability-and-feasibility)
    2. [Scope](#scope)
        - [Content Requirements](#content-requirements)
            - [Section: Navigation bar](#section-navigation-bar)
            - [Section: Footer](#section-footer)
            - [Webpage: Homepage](#webpage-homepage)
            - [Webpage: How to play](#webpage-how-to-play)
            - [Webpage: Contact me](#webpage-contact-me)
            - [Webpage: 404](#webpage-404)
    3. [Structure](#structure)
        - [Overall Structure](#overall-structure)
        - [Information Architecture](#information-architecture)
        - [Interactive Experience](#interactive-experience)
    4. [Skeleton](#skeleton)
        - [Preliminary Wireframes](#preliminary-wireframes)
            - [Home page](#home-page)
            - [How to play](#how-to-play)
            - [Contact me](#contact-me)
            - [404](#404)
        - [Changes to Wireframes](#changes-to-wireframes)
    5. [Surface](#surface)
        - [Colour Scheme](#colour-scheme)
        - [Typography](#typography)
        - [Images](#images)
    6. [Features](#features)
        - [The Game Area](#the-game-area)
        - [Browser tab](#browser-tab)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks and Tools](#frameworks-and-tools)
5. [Testing](#testing)
6. [Bugs](#bugs)
    1. [Known Bugs](#known-bugs)
    2. [Mistakes](#mistakes)
7. [Deployment](#deployment)
    1. [Deployment to GitHub pages](#deployment-to-github-pages)
    2. [Deploying Locally](#deploying-locally)
    3. [Addition of 404.html](#addition-of-404html)
8. [Credits](#credits)
    1. [Documentation](#documentation)
    2. [Media](#media)
    3. [Code](#code)
9. [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals
- A website that is easy to navigate.
- A website that will display well on different devices.
- A description of how to play the game.
- Contact information of the developer.
- Positive and immediate feedback from the site such as on hover or on click JavaScript animations to ensure a good user experience.

### Site Owner Goals
- Provide a fun memory game with a lot of replayability potential.
- Allow different difficulty settings.
- Display the game in a good looking and engaging manner to appeal to the user.
- A game that is responsive and works well on mobiles as well as desktops.

### Developer Goals
- A well designed website that catches the attention of the users.
- A responsive website where the functionality is not impacted by screen size.
- Easy navigation that is intuitive and responsive.
- A website designed with accessibility in mind.
- A finished product that will proudly be displayed within the developer's portfolio.

## User Stories

### First Time Visitor Goals
1. As a First Time Visitor, I want to know the purpose of the website immediately.
2. As a First Time Visitor, I want to be able to navigate the website easily and intuitively.
3. As a First Time Visitor, I want to be able to learn how to play the game.

### Returning Visitor Goals
4. As a Returning Visitor, I want to be able to quickly play the game.
5. As a Returning Visitor, I want to be be able to contact the website developer.
6. As a Returning Visitor, I want to be able to learn how to improve my performance at the game.

### Frequent Visitor Goals
7. As a Frequent Visitor, I want to be able to tune the difficulty of the game.
8. As a Frequent Visitor, I want to be able to see other work from the developer.

## Five Planes of UX

### Strategy
- **What value does the project provide?** This memory game website will provide a fun and enjoyable way for users to test and improve upon their memory.
- **What are the business needs?** The business in this case would be the developer, who intends to produce a fun, responsive, and interactive website. Their needs would be an engaging game and a way for the user to contact and give feedback to the developer.
- **Who is the target audience?** The target audience are those interested in memory games or brain training games.
- **What are the user requirements and expectations?**
    - A simple and intuitive navigation system
    - Responsiveness from button clicks and mouse hover
    - Able to quickly learn how to play the game
    - All functions and links work as expected
    - External links open in a new browser tab
    - The design and functionality on the site works regardless of screen size
    - Contact information is readily available
    - An obvious sign that I have accidentally accessed a page that does not exist
    - Accessibility

#### Viability and Feasibility
Followed is an analysis of the above value and user and business needs:
|   Task |   Importance | Viability/Feasibility |
| --------- | ------------- | ----------------- |
| Card Memory Game | 5 | 5 |
| A way to give feedback to the developer | 5 | 5 |
| Responsive on all devices | 5 | 5 |
| Different difficulties | 3 | 5 |
| 404 page | 4 | 4 |
| How to play | 3 | 4 |
| Link to developer GitHub | 2 | 5 |


### Scope

#### Content Requirements
A mobile-first approach is taken to ensure optimal performance on mobile devices and the Bootstrap 5 size limits will be considered during the design of each section in order to make it suitable for phones, tablets, and desktops.

##### Section: Navigation Bar
- The navigation bar will be present on every page to create a cohesive structure across the website.
- It will include the site name and logo, so that the website is easily identifiable.
- It will have links to the homepage, how to play page, and contact me page.
- The links will be responsive to a mouse hover and click to provide feedback to the user.
- The current page will have it's link identified in some way to indicate the current page.

##### Section: Footer
- The footer section will be present on every page to create a cohesive structure across the website.
- It will include the site name and logo, so that the website is easily identifiable.
- It will include external links such as a link to the developer's GitHub profile.
- External links will be responsive to a mouse hove and click to provide feedback to the user.
- External links will open in a new tab to provide good user experience.

##### Webpage: Homepage
- The homepage will house the memory game.

##### Webpage: How to play
- The how to play page will provide instructions to the user.

##### Webpage: Contact me
- The contact me page will house a text box, allowing the user to send a message to the developer's email using an API.

##### Webpage: 404
- The 404 page will inform the user that the page that they have tried to access does not exist.
- It will provide a link back to the homepage.

### Structure

#### Overall Structure
Each page will consist of:
- **Navigation bar**: Meets the navigation requirement.
- **Main section**: Meeting the page-specific requirements.
- **Footer**: Meeting the requirement for a link to the developer's GitHub profile.
- **Ratio sizes of elements**: Key sections will maintain the same ratio of sizes aceross each page to create uniformity.

Required pages and their main sections:
- **Homepage**: This page will meet the requirement for an interactive game.
    1. The main section of the homepage will hold the game area.
    2. The game area will have the following functionality:
        - The user can select a number of cards to memorise.
        - The cards will then be shuffled.
        - The shuffled cards will be displayed to the user.
        - The shuffled cards will then be hidden and the user must recreate the sequence.
- **How to play**: This page will meet the requirement for an explanation of gameplay.
    1. This page will have a hero image and title allowing the user to quickly gauge the intent of the page.
    2. This page will house the rules for the game.
    3. It must include how to play the game and what the functions of the buttons are.
    4. It will also include some hints and/or tips to allow the user to increase their score.
    5. There will be an image to break up the text and make it more appealing to the user.
- **Contact me**: This page will meet the requirement for allowing players to contact the developer.
    1. There will be a page title indicating the purpose of the page.
    2. This page will have a text box and a submit button allowing messages to be sent to the developer's email address.
- **404**: This page will meet the requirement for alerting users when they have accessed a page that does not exist.
    1. This page will have a message informing the user that they have tried to access a page that does not exist.
    2. This page will have a link back to the home/game page.

#### Information Architecture
The same navigation bar and footer will be implemented on each page to create a consistent website that is pleasing to look at and easy to use.
The navigation bar will have the site brand/logo that links to the homepage as well as separate links to the other pages. This will allow the user to access the desired section of the site well within the 3 click maximum that many websites adhere to.
There will be no sub-category navigation links within each webpage.

#### Interactive Experience
- **The website**: Clickable links will have animated effects on hover or click, providing clear feedback to the user. All external links such as the GitHub profile will open in a new tab. Content hinting will be used where possible to influence the user to scroll down and uncover new content on the pages.
- **The game**: 
    - The game will work by firstly having the user select the length of a sequence to memorise. 
    - When prompted a pack of cards will be shuffled and the entered number of cards will be shown on the screen.
    - Upon another prompt, the cards will disappear and a table allowing the user to select the cards will appear.
    - There will be feedback on whether the user is correct/incorrect with their guesses.

### Skeleton

[Balsamiq Wireframes](https://balsamiq.com/) was used during this section to create wireframes.

#### Preliminary Wireframes

##### Home page
- [Mobile](documentation/wireframes/home_mobile.png)
- [Tablet](documentation/wireframes/home_tablet.png)
- [Desktop](documentation/wireframes/home_desktop.png)
##### How to play
- [Mobile](documentation/wireframes/how_to_play_mobile.png)
- [Tablet](documentation/wireframes/how_to_play_tablet.png)
- [Desktop](documentation/wireframes/how_to_play_desktop.png)
##### Contact me
- [Mobile](documentation/wireframes/contact_me_mobile.png)
- [Tablet](documentation/wireframes/contact_me_tablet.png)
- [Desktop](documentation/wireframes/contact_me_desktop.png)
##### 404
- [Mobile](documentation/wireframes/404_mobile.png)
- [Tablet](documentation/wireframes/404_tablet.png)
- [Desktop](documentation/wireframes/404_desktop.png)

#### Changes to Wireframes

**Change 1**
**Change 2**

### Surface

#### Colour Scheme
Describe starting colour scheme
Used [adobe’s colour wheel](https://color.adobe.com/create/color-wheel) to create the following colour palletes:

**Shades**

![shades]()

**Analogous**

![analogous]()

**Complementary**

![complementary]()

Chosen colours:
-   Colour1 from above: what its used for
-   Colour2 from above: what its used for

Extra colours:
-   Colour1: what its used for
-   Colour2: what its used for

#### Typography
I researched X fonts for Y reasons

**[font1](googlefontlink)**
![font1](image)
Description

#### Images
All images used were optimised using [adobe photoshop](https://www.adobe.com/uk/) and converted to .webp format for faster loading times using [cloud convert](https://cloudconvert.com/png-to-webp).

### Features

#### The Game Area
For an in depth description of the functionality of the game area, click here.
#### Browser tab:

<details><summary>Browser Tab</summary>
<img src="">
</details>

- Explain favicon
- Explain title change per page
- User stories covered: 

Others: Logo and navigation bar, any hover effect
Footer
Homepage
Contact me
Hero images
404

## Technologies Used

### Languages

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks and Tools
1. [Visual Studio Code](https://code.visualstudio.com/)
    * This is my IDE of choice for writing my HTML, CSS, and JavaScript code for this project
2. [Git](https://git-scm.com/)
	* Used for version control
3. [Github](https://github.com/)
	* Used to store the code
4. [Balsamiq Wireframes](https://balsamiq.com/)
    * Used to create wireframes for the project
5. [Bootstrap v5.3.3](https://getbootstrap.com/)
	* CSS library used for its grid system and easier styling and responsiveness 
6. [Font Awesome](https://fontawesome.com/)
    * Used throughout for decorative icons
7. [Favicon](https://favicon.io/)
	* Used to supply the image for the browser tab
8. [jQuery](https://jquery.com/)
    * JavaScript library used for more concise event listeners
9. [JSHint](https://jshint.com/)
    * Used to validate JavaScript code

## Testing
For my testing, please see the separate [testing.md](link) file.

## Bugs
**Bug 1:**
When populating the guessing table, the JavaScript could not connect event listeners for the guess submission buttons. This turned out to be because the buttons were added to the DOM after the JavaScript file was loaded. To solve this, I added the following lines of code to the bottom of the tableBuild() function:

```
    let appendScript = "<script id='guessing-script' src='assets/scripts/script2.js'></script>"
    $("body").append(appendScript);
```
This allowed a second JavaScript file to be appended to the html body, where the game scoring section is stored. As this is loaded after the table, it is able to connect event listeners to the buttons in the table.

**Bug 2:**
After reseting the game, when the guess button is pressed linking the script to the guessing functions file, there are errors due to the global variables on that file having already been defined on the first run through of the game. To get around this, I used var to define the necessary global variables within the game script file, so that they were accessible from the guessing functions file, removing the need for them to be redefined in the latter.

**Bug 3:**
When entering an invalid number into the sequence length selector, it will assign this value to the sequenceLength regardless. This was fixed by moving the sequenceLength assignment inside the conditional and replacing it's original use with a new global variable named lengthCheck.

**Bug 4:**
When submitting guess, if no value or suit is submitted, it will accept the submitted answer as being "disableddisabled". This is bad user experience, as it prevents the user from enetering an actual guess and disables the button. This was solved by wrapping most of the code in an if/else statement to set an alert if either of the submitted values are "disabled" and to continue the code if the entries are valid.
<br> Before:
```
// Submit guess button
$(".submit-guess").click(function() {
    // Takes the sibling elements that are select elements in an array
    let siblings = $(this).siblings();

    console.log(siblings);

    // takes value 1 + value 2 = submitted answer
    let submittedAnswerInitial = siblings[0].value +siblings[1].value;

    console.log(submittedAnswerInitial);

    // Get the key from this value in the cardObject
    let submittedAnswer = cardObject[String(submittedAnswerInitial)];

    console.log(submittedAnswer);

    // checks this answer against parent's next sibling
    let pSiblings = $(this).parent().siblings();

    // Show the answer column
    pSiblings[1].classList.remove("hidden");
    let correctAnswer = pSiblings[1].innerHTML;
    let results = pSiblings[2];
    
    console.log(correctAnswer);

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
    console.log(counter);
    let finalScore = Math.floor(100* counter / sequenceLength);

    // An alert to show when the game is finished
    if ($(".submitted").length === sequenceLength) {
        alert("Game over. You scored " + finalScore + "%");
    }
}); 
```

After:
```
// Submit guess button
$(".submit-guess").click(function() {
    // Takes the sibling elements that are select elements in an array
    let siblings = $(this).siblings();

    console.log(siblings);

    // Check for valid input 
    if ((siblings[0].value === 'disabled') || (siblings[1].value === 'disabled')) {
        alert("Please select a valid card value and suit.")
    } else {
        // takes value 1 + value 2 = submitted answer
        let submittedAnswerInitial = siblings[0].value +siblings[1].value;

        console.log(submittedAnswerInitial);

        // Get the key from this value in the cardObject
        let submittedAnswer = cardObject[String(submittedAnswerInitial)];

        console.log(submittedAnswer);

        // checks this answer against parent's next sibling
        let pSiblings = $(this).parent().siblings();

        // Show the answer column
        pSiblings[1].classList.remove("hidden");
        let correctAnswer = pSiblings[1].innerHTML;
        let results = pSiblings[2];
        
        console.log(correctAnswer);

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
        console.log(counter);
        let finalScore = Math.floor(100* counter / sequenceLength);

        // An alert to show when the game is finished
        if ($(".submitted").length === sequenceLength) {
            alert("Game over. You scored " + finalScore + "%");
        }
    } 
});
```


### Known Bugs

### Mistakes

## Deployment

### Deployment to GitHub pages

### Deploying Locally

### Addition of 404.html

## Credits

### Documentation
- The code-institute [template](https://github.com/Code-Institute-Org/ci-full-template) was used in order to have necessary tools preinstalled

### Media

### Code
**Fischer Yates Shuffling Algorithm**
This code was put together with help from [stack overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/43409054) and [Bro Code](https://www.youtube.com/watch?v=FGAUekwri1Q) on YouTube. 

## Acknowledgements
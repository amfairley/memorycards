![Website logo](/documentation/site-logo.png)

---

# Memory Cards

*A game designed to test your memory. Can you correctly recall the order of a shuffled deck of cards?*

This memory card game is a fun, enjoyable way to put your memory to the test. You can select the length of the series of cards, look for them as long as you like, before hiding them and replicating the order in your guesses. It provides value to the user through the enjoyable gameplay and replayability, allowing the user to set how difficult it is by selecting the number of cards to memorise. The development followed a mobile-first approach, focusing on playability whilst on long car, train, or plane journeys. Bootstrap 5 and jQuery 3 libraries were used to streamline the development of the code. <br>
The game concept is inspired by the Speed Cards discipline of the [World Memory Championships](https://www.worldmemorychampionships.com/sport/) in which the competitors are challenged, against the clock, to remember the order of a shuffled deck of cards and to correctly repeat that order. The key target audience are those interested in trying to memorise a deck of cards themselves, but don't worry, you can start with as little as one card and work your way up to a Memory Champion! The site is also of use to those currently competing who have an urge to practice whilst on the go or when they do not have access to a physical deck of cards.

![A mock-up image of the website](/documentation/site-mock-up.png)

[Click here to access the site](https://amfairley.github.io/memorycards/)

## Version 1.01 is now live!
We are very excited to announce version 1.01 is now live, incorporating all feedback. Thank you to those that have responded and we wish you fun and memorable times! Please find all updates and changes logged in the [Patch Notes](/PATCHNOTES.md).

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
        - [Wireframes](#wireframes)
            - [Home page](#home-page)
            - [How to play](#how-to-play)
            - [Contact me](#contact-me)
            - [404](#404)
        - [Changes during development](#changes-during-development)
    5. [Surface](#surface)
        - [Colour Scheme](#colour-scheme)
        - [Typography](#typography)
        - [Images](#images)
    6. [Features](#features)
        - [The game area](#the-game-area)
        - [Browser tab](#browser-tab)
        - [Website header](#website-header)
        - [How to play](#how-to-play-1)
        - [Contact me](#contact-me-1)
        - [Sequence select](#sequence-select)
        - [Sequence select error modal](#sequence-selector-error-modal)
        - [Play now button](#play-now-button)
        - [Sequence length display](#sequence-length-display)
        - [Playing card display](#playing-card-display)
        - [Guess button](#guess-button)
        - [Guessing table](#guessing-table)
        - [Guessing table error modal](#guessing-table-error-modal)
        - [Results modal](#results-modal)
        - [Reset button](#reset-button)
        - [Website footer](#website-footer)
        - [404 Page Message](#404-page-message)
    7. [Future Development](#future-development)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks](#frameworks)
    3. [Tools](#tools)
5. [Testing](#testing)
6. [Bugs](#bugs)
    1. [Known Bugs](#known-bugs)
    2. [Mistakes](#mistakes)
7. [Deployment](#deployment)
    1. [Deployment to GitHub pages](#deployment-to-github-pages)
    2. [Deploying Locally](#deploying-locally)
    3. [Forking The Repository](#forking-the-repository)
    4. [Addition of 404.html](#addition-of-404html)
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
4. As a First Time Visitor, I want to know if my individual guesses are correct.
5. As a First Time Visitor, I want to know my final score.

### Returning Visitor Goals
6. As a Returning Visitor, I want to be able to quickly play the game.
7. As a Returning Visitor, I want to be able to contact the website developer.
8. As a Returning Visitor, I want to be able to reset the game at any point.
9. As a Returning Visitor, I want the game to prevent me entering invalid guesses.

### Frequent Visitor Goals
10. As a Frequent Visitor, I want to be able to tune the difficulty of the game.
11. As a Frequent Visitor, I want to be able to see other work from the developer.
12. As a Frequent Visitor, I want to be able to see my chosen sequence length after the game starts.
13. As a Frequent Visitor, I want to be able to play the game on different devices.

## Five Planes of UX

### Strategy
- **What value does the project provide?** This memory game website will provide a fun and enjoyable way for users to test and improve upon their memory.
- **What are the business needs?** The business in this case would be the developer, who intends to produce a fun, responsive, and interactive website. Their needs would be an engaging game and a way for the user to contact and give feedback to the developer.
- **Who is the target audience?** The target audience are those interested in memory games or brain training games. This can range from casual players, those training for memory challenges such as the [World Memory Championships](https://www.worldmemorychampionships.com/sport/), or for childhood development. 
- **What are the user requirements and expectations?**
    - A simple and intuitive navigation system
    - Responsiveness from button clicks and mouse hover
    - Able to quickly learn how to play the game
    - All functions and links work as expected
    - External links open in a new browser tab
    - The design and functionality on the site works regardless of screen size
    - Contact information is readily available
    - An obvious sign that the user has accessed a page that does not exist
    - Accessibility

#### Viability and Feasibility
Followed is an analysis of the above user and business needs ranked from 1 (least important/viable) to 5 (most important/viable):
|   Task |   Importance | Viability/Feasibility |
| --------- | ------------- | ----------------- |
| Card Memory Game | 5 | 5 |
| A way to give feedback to the developer | 5 | 5 |
| Responsive on all devices | 5 | 5 |
| Different difficulties | 3 | 5 |
| 404 page | 4 | 4 |
| How to play | 3 | 4 |
| Link to developer GitHub | 2 | 5 |
| A reset button | 3 | 3 |
| Knowing if individual answers are correct | 3 | 3 |
| Knowing the final score | 5 | 5 |
| Preventing the user entering invalid values | 5 | 3 |
| A way to tune the difficult of the game | 3 | 5 |

Based on the above assessment, all the tasks look to be implementable.

### Scope

#### Content Requirements
A mobile-first approach is taken to ensure optimal performance on mobile devices and the Bootstrap 5 size limits will be considered during the design of each section in order to make it suitable for phones, tablets, and desktops.

##### Section: Navigation Bar
- The navigation bar will be present on every page to create a cohesive structure across the website.
- It will include the site name and logo, so that the website is easily identifiable.
- It will have links to the homepage, how to play page, and contact me page.
- The links will be responsive to a mouse hover and click to provide feedback to the user.
- The current page will have its link identified in some way to indicate the current page.

##### Section: Footer
- The footer section will be present on every page to create a cohesive structure across the website.
- It will include the site name and logo, so that the website is easily identifiable.
- It will include external links such as a link to the developer's GitHub profile.
- External links will be responsive to a mouse hover and click to provide feedback to the user.
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

Required pages and their main sections:
- **Homepage**: This page will meet the requirement for an interactive game.
    1. The main section of the homepage will hold the game area.
    2. The game area will have the following functionality:
        - The user can select a number of cards to memorise.
        - The cards will then be shuffled.
        - The shuffled cards will be displayed to the user.
        - The amount of shuffled cards will be displayed to the user.
        - The shuffled cards will then be hidden and the user must recreate the sequence.
        - The user will be informed of their final score.
- **How to play**: This page will meet the requirement for an explanation of gameplay.
    1. This page will have a hero image and title allowing the user to quickly gauge the intent of the page.
    2. This page will house the rules for the game.
    3. It must include how to play the game and what the functions of the buttons are.
    4. There will be an image to break up the text and make it more appealing to the user.
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

#### Wireframes

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

#### Changes during development
The decision was taken to reduce the website to a single page, replacing the how-to and contact-me pages with modals instead. This resulted in the following changes:
- Change to the information architecture: no internal links are required, resulting in a 1-page website providing the full proposed value to the user and developer on a single intuitive page
- The nav bar no longer requires a home section and as it will be a 1-page website any styling to identify the current page to the user will not be required
- The how-to-play and contact-me pages are replaced with modals providing the same intended value as the separate pages would have had
- The how-to-play modal no longer requires a hero image nor an image to break up the text, as the design of the modal will make it aesthetically pleasing to the user

### Surface

#### Colour Scheme
The colour scheme for this website will match the colour scheme of a deck of cards with a white, red, and black colour palette. To enhance user experience, an off-black with hints of blue and off-white were used to reduce eye strain. These work well with the chosen hue of red.

![Colour Scheme](/documentation/colour_scheme.png)

As can be seen the chosen colours provide adequate contrast in line with the accessibility criteria for the webpage. The chosen colours are:
- **Off-Black #333A3F**
    - Font and icon colours of the black card navigation links (how-to and GitHub)
    - On hover, the black card colour scheme flips so that it is used instead for the card background
    - Similarly used for the background on the how-to-play modal
    - Site logo words in the header and footer
    - Text in the game buttons and labels
    - Hover effect for guessing table rows
    - Text on the results and error modals
    - Text for the 404 error 
- **Off-White #F5F5F5**: 
    - The background of the header, footer, and website
    - The background for the how-to-play, contact-me, and GitHub link cards 
    - On hover, used for the font colour of the above instead
    - Font colour in the how-to-play modal
    - Font colour in the contact-me modal
    - Background for the error modals
    - Background colour for the buttons
    - Font colour for the hovered buttons
    - Font colour for the guessing table header
    - Font colour for the guessing table rows when hovered
    - Background for the 404 alert card
- **Lava #CF1020**: 
    - Icon font colour for the header and footer site logos
    - Text colour for the contact-me link
    - Background colour for the contact-me link on hover
    - Background colour to the contact-me modal
    - Background to site buttons on hover
    - Text colour of the sequence length display
    - Fill colour for the guessing table header 
    - Icon font colour for the results and error modals

Extra colours:
-   Black (#000000): 
    - Card edges in the navigation bar and sequence length display
    - Borders for the playing cards

#### Typography
I researched clear legible typefaces that will enhance the user experience of the site and picked one for the navigation bar and titles, one for the button and table text, and one for blocks of text. They were used in this regard across the website to acheive a consistent brand.

**[Cabin](https://fonts.google.com/specimen/Cabin?query=cabin)**<br>
![Cabin](/documentation/font_cabin.png)<br>
Cabin is a modern looking sans serif typeface with wide language support. It is clear and legible and makes the perfect choice for informative assets such as buttons and table headings. When used, it has the back up fonts of Arial, Helvetica, and Sans Serif in the case that the browser does not support Cabin. These are all sans serif typefaces and act as sufficient backups.

**[Arimo](https://fonts.google.com/specimen/Arimo?query=arimo)**<br>
![Arimo](/documentation/font_arimo.png)<br>
Arimo is an innovative and refreshing sans serif typeface that improves on screen readability. As such, it is a good choice for blocks of text to decrease eye strain on the user. When used, it has the back up fonts of Arial, Helvetica, and Sans Serif in the case that the browser does not support Arimo. These are all sans serif typefaces and act as sufficient backups.

**[Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans?query=josefin+sans)**<br>
![Josefin Sans](/documentation/font_josefin_sans.png)<br>
Josefin Sans is an elegant and geometric typeface with a vintage feeling that works well with the timeless design of playing cards. The simple look will grab the user's attention to the site title and headings and includes a fun tilt on the "e" character. When used, it has the back up fonts of Arial, Helvetica, and Sans Serif in the case that the browser does not support Josefin Sans. These are all sans serif typefaces and act as sufficient backups.

#### Images
The icons used in the game were from [Font Awesome](https://fontawesome.com/) or UTF-8 icons with the codes retrieved from [UTF-8 icons](https://www.utf8icons.com/). The images of the playing cards were taken from [Wikipedia](https://en.wikipedia.org/wiki/Standard_52-card_deck) and are not under any copywrite.

### Features

#### The Game Area
For an in depth description of the functionality of the game area, please see the [GAME.md](/GAME.md) file.
#### Browser tab:

<details><summary>Browser Tab</summary>
<img src="/documentation/features/browser-tab.png">
</details>

- A red diamond favicon is used and it appears in the browser tab.
- The website title appears in the browser tab.
- User stories covered: 1.

#### Website Header

<details><summary>Website Header</summary>
<img src="/documentation/features/website-header.png">
<img src="/documentation/features/website-header-mobile.png">
</details>

- The website logo is clear and provides a link to the current page, refreshing the page when clicked.
- The website logo has the only two font awesome icons of playing card suits that are available for free, indicating the nature of the website to the user. 
- There are clear links to the how-to-play and contact-me modals that are responsive to user interaction and styled as black and red playing cards to fit the theme of the page. The cursor changes when hovered to indicate it can be clicked. The colour scheme also inverts implying functionality.
- Appropriate font awesome icons are used to indicate the purpose of the links at a glance.
- On smaller screens the link cards are rotated and centred beneath the site logo.
<br> 
<details><summary>Hovered navigation bar links</summary>
<img src="/documentation/features/hover-how-to.png"><img src="/documentation/features/hover-contact.png">
</details>
- User stories covered: 1, 2, 3, 7.

#### How To Play

<details><summary>How To Play</summary>
<img src="/documentation/features/how-to-play.png">
</details>

- Clicking the how to play link in the header opens up the how to play modal.
- It is bordered in the shape of a playing card to continue the theme of the game.
- It has the inverted colour scheme to the how to play link, relating them in the user's mind.
- It provides the user with information on how to play the game in a concise and fun way.
- It has a close button that hides the modal and modal background.
- All modals have a background that appears with them, darkening the rest of the webpage making the user focus on the modal, along with preventing the user to click any functionality behind the modal.
- User stories covered: 3.

#### Contact Me

<details><summary>Contact Me</summary>
<img src="/documentation/features/contact-me.png">
</details>

- Clicking the contact me link in the header opens the contact me modal.
- It is bordered in the shape of a playing card to continue the theme of the game.
- It has the inverted colour scheme to the contact me link, relating them in the user's mind.
- It provides the user with a brief description on why they would contact the developer.
- It allows the user to enter their name, email and a message to the developer. All fields are required for submission.
- The form utilises the [emailjs](https://www.emailjs.com/) API to send the message directly to the email inbox of the developer.
- It has a close button that hides the modal and modal background.
- All modals have a background that appears with them, darkening the rest of the webpage making the user focus on the modal, along with preventing the user to click any functionality behind the modal.
- User stories covered: 7.

#### Sequence Select

<details><summary>Sequence Select</summary>
<img src="/documentation/features/button-sequence-select.png">
</details>

- The sequence select area gives the user a space to select the number of cards to memorise.
- The user can either use the up and down arrows that appear when hovering to change the input to a number between 1 and 52 or type the number themselves. 
- The type is set to number, preventing the user from entering anything that isn't numerical, -, +, ., or e.
- If an invalid number is entered (negative, integer > 52, or . or e) a modal will appear to inform the user to enter a valid number.
- The input is rounded down to the nearest integer, meaning that if 29.9 was entered, the game will continue with the value 29.
- User stories covered: 9, 10.

#### Sequence Selector Error Modal

<details><summary>Sequence Select Error Modal</summary>
<img src="/documentation/features/sequence-select-error-modal.png">
</details>

- If an invalid value is entered into the sequence select, this modal will appear on the screen informing the user of their error and suggesting they use a value between 1 and 52.
    - The modal is designed like a playing card with exclamation mark font awesome icons in place of the placing card values.
    - There is an OK button to accept the message and close the modal and modal background.
    - All modals have a background that appears with them, darkening the rest of the webpage making the user focus on the modal, along with preventing the user to click any functionality behind the modal.
- User stories covered: 9, 10.

#### Play Now Button

<details><summary>Play Now Button</summary>
<img src="/documentation/features/button-play-now.png"><img src="/documentation/features/button-play-now-hover.png">
</details>

- The play now button changes colour scheme with a slight transitional period when hovered to indicate functionality to the user in a pleasing way.
- Pressing this button with an invalid value entered into the sequence selector will show the sequence selector error modal.
- Pressing the button with a valid value in the sequence selector will:
    - Hide the sequence select preventing the user from changing the submitted value.
    - Hide the play button preventing multiple clicks.
    - Display the selected sequence length. 
    - Show the guess button to allow the user to advance the game.
    - Show the chosen amount of playing cards from a shuffled deck in the game area.
- User stories covered: 6, 9, 12.

#### Sequence Length Display

<details><summary>Sequence Length Display</summary>
<img src="/documentation/features/sequence-length-display.png">
</details>

- The sequence length display is shown when the play button is pressed with a valid sequence length.
- It is designed in the shape of a card in keeping with the theme of the page and shows the sequence length as the card value.
- Its purpose is to be an easy reference to the user of what value that they have selected.
- User stories covered: 12.

#### Playing Card Display

<details><summary>Playing Card Display: Mobile</summary>
<img src="/documentation/features/card-display-mobile.png">
</details>

<details><summary>Playing Card Display: Tablet</summary>
<img src="/documentation/features/card-display-tablet.png">
</details>

<details><summary>Playing Card Display: Desktop</summary>
<img src="/documentation/features/card-display-desktop.png">
</details>

- The shuffled cards are displayed in the game area, neatly separated with gaps inbetween for a more pleasing appearance.
- They are bordered with a thick rounded border to highlight them against the background.
- If there are too many cards to show on the page, content hinting is utilised to indicate to the user that they need to scroll down to see the rest of the cards.
- Bootstrap 5 classes are used to change the number of cards in each row depending on the screen size, with 6 per row for large screens, 3 per row for medium screens and 2 per row for smaller screens, achieving good user experience across all device sizes.
- User stories covered: 13.

#### Guess Button

<details><summary>Guess Button</summary>
<img src="/documentation/features/button-guess.png"><img src="/documentation/features/button-guess-hover.png">
</details>

- The guess button advances the game from the memorisation stage to the guessing stage by:
    - Hiding the guess button so it cannot be clicked twice.
    - Removing the cards from the game area.
    - Populating and showing the guessing table for the user to enter their guesses.
- The guess button changes colour scheme with a slight transitional period when hovered to indicate functionality to the user in a pleasing way.
- User stories covered: N/A.

#### Guessing Table

<details><summary>Guessing Table</summary>
<img src="/documentation/features/guessing-table.png"><img src="/documentation/features/guessing-table-mobile.png">
</details>

- The guessing table provides an area for the user to submit their guesses of the sequence of cards. It has four columns:
    1. The order number letting the user know which card they will be guessing.
    2. The guessing section consisting of two drop down selects and a submission button. The first select menu has the card values from Ace to King and the second has the card suit using UTF-8 icons for accessibility and easy recognition compared to the written suit names. 
    3. The third column shows the correct answer. It is hidden prior to guessing but is revealed upon submitting a guess.
    4. The fourth column shows if the user was correct with a Y or incorrect with an N.
- When a guess is submitted:
    - The two select elements and submit button on that row are disabled preventing the user from submitting another guess.
    - The disabled submit button has the colours inverted to indicate that submission has occurred.
    - The correct answer is revealed to the user. 
    - The user is informed whether they were right or wrong.
- When hovering a row, the colour scheme is inverted clearly showing the user which row they are selecting.
- The submit buttons show an error modal if the user does not choose both a valid card value and suit, preventing the user from wasting a guess.
- The row sizes are responsive so that the guessing table is usable, even on very small screens.
- User stories covered: 4, 9, 13.

#### Guessing Table Error Modal

<details><summary>Guessing Table Error Modal</summary>
<img src="/documentation/features/guessing-error-modal.png">
</details>

- The guessing table error modal appears when the user tries to submit a guess without selecting a value for the card value or card suit.
- The modal is designed like a playing card with exclamation mark font awesome icons in place of the placing card values.
- There is an OK button to accept the message and close the modal and modal background.
- All modals have a background that appears with them, darkening the rest of the webpage making the user focus on the modal, along with preventing the user to click any functionality behind the modal.
- User stories covered: 9.

#### Results Modal

<details><summary>Results Modals</summary>
<img src="/documentation/features/results-modal-00.png"><img src="/documentation/features/results-modal-25.png"><img src="/documentation/features/results-modal-50.png"><img src="/documentation/features/results-modal-75.png"><img src="/documentation/features/results-modal-100.png">
</details>

- The results modal appears when the user has submitted all of their guesses.
- The modal is designed like a playing card with exclamation mark font awesome icons in place of the placing card values.
- All modals have a background that appears with them, darkening the rest of the webpage making the user focus on the modal, along with preventing the user to click any functionality behind the modal.
- The results modal shows different heading content depending on the score personalising the experience and incentivising the user to play again and get a higher score:
    - 0-24%: Try again...
    - 25-49%: Nice try!
    - 50-74%: Good Job!
    - 75%-100%: Amazing!
- The results modal shows the score in the form of x out of y and a percentage for the user to easily comprehend their score.
- The close button closes the modal and lets the user look at their completed guessing table should they wish.
- The replay button resets the game area for another game.
- User stories covered: 5, 8.

#### Reset Button

<details><summary>Reset Game Button</summary>
<img src="/documentation/features/reset-button.png"><img src="/documentation/features/reset-button-hover.png">
</details>

- The reset button allows the user to start a new game at any point.
- It features the same hover animation as other buttons in the game.
- User stories covered: 8.

#### Website Footer

<details><summary>Website Footer</summary>
<img src="/documentation/features/website-footer.png">
<img src="/documentation/features/website-footer-mobile.png">
</details>

- The footer displays the website logo again and clicking it will refresh the page.
- A link to the developer GitHub profile is provided, styled as a playing card with the GitHub logo as the card values. It has an inverse hover effect when hovered indicating the functionality and the website opens in a new tab and rel is set to noopener preventing any malicious behaviour.
- On smaller screens the site logo is replaced by just the font awesome icons and the logo and link are centred.
<details><summary>GitHub hover</summary>
<img src="/documentation/features/hover-github.png">
</details>
- User stories covered: 1, 7, 11.

#### 404 Page Message
<details><summary>404 message</summary>
<img src="/documentation/features/message-404.png">
</details>
<details><summary>404 message hover</summary>
<img src="/documentation/features/message-404-hover.png">
</details>

- The 404 page displays a message informing the user that they have made a wrong turn and directs them back to the homepage.
- The message is styled as a playing card in keeping with the site design and the value is displayed as 404 as a clear indicator to the user.
- An anchor tag was used to link back to the home page rather than an automatic redirection after a set time for accessibility reasons; some users would read the message quickly and get impatient with an automatic redirection and other users may not finish reading the message before being redirected automatically, so an anchor tag was used to suit all users.
- The anchor tag message is located within its own rectangular div, highlighting it as clickable and displays a similar hover animation as other clickable items.
- User stories covered: 2

### Future Development 
Some features were considered and not included due to either not being a part of the scope of this project or time constraints. As such, the following features will be added in future updates:
- Using JavaScript obfuscators to hide the emailJS public key
- Add functionality to the guess select elements where the user can submit their guesses with the enter key
    - Added in [Patch 1.01](/PATCHNOTES.md#patch-101)
- Use a back-end database to store the contact form responses

## Technologies Used

### Languages

- [HTML](https://en.wikipedia.org/wiki/HTML)
    - Used for the structure of the index.html page
- [CSS](https://en.wikipedia.org/wiki/CSS)
    - Used for styling the elements on the webpage
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    - Used for game functionality, hover transitions, and modal operations

### Frameworks
1. [Bootstrap v5.3.3](https://getbootstrap.com/)
	* CSS library used for its grid system and easier styling and responsiveness 
2. [jQuery](https://jquery.com/)
    * JavaScript library used for concise ways to grab elements from the DOM

### Tools
1. [Visual Studio Code](https://code.visualstudio.com/)
    * This is my IDE of choice for writing my HTML, CSS, and JavaScript code for this project
2. [Git](https://git-scm.com/)
	* Used for version control
3. [GitHub](https://github.com/)
	* Used to store the code
4. [Balsamiq Wireframes](https://balsamiq.com/)
    * Used to create wireframes for the project
5. [Multi Mock-up](https://techsini.com/multi-mockup/index.php)
    * Used to create mock-up images of the site for README.md
6. [Google Fonts](https://fonts.google.com/)
    * Used to supply typefaces for the website
7. [Font Awesome](https://fontawesome.com/)
    * Used throughout for decorative icons
8. [UTF-8 characters](https://www.utf8icons.com/)
    * Used for the playing card suit UTF-8 html codes
9. [Favicon](https://favicon.io/)
	* Used to supply the image for the browser tab
10. [Cloud Convert](https://cloudconvert.com/png-to-webp)
    * Used for image optimisation to convert from .png to .webp format
11. [emailJS](https://www.emailjs.com/)
    * API used to send the contents of the contact me form to the developers email inbox
12. [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
    * Used for testing the webpage during development and testing the performance using Lighthouse
13. [W3C HTML Validation Service](https://validator.w3.org/)
    * Used to validate the HTML code
14. [W3C Jigsaw CSS Validation Service](https://jigsaw.w3.org/css-validator/)
    * Used to validate the CSS code
15. [JSHint](https://jshint.com/)
    * Used to validate JavaScript code
16. [JSLint](https://www.jslint.com/)
    * Linter used to validated JavaScript code
17. [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/)
    * Used to validate the accessibility of the web page
18. [Google Analytics](https://marketingplatform.google.com/about/analytics/)
    * Used for real time analytics of the webite
19. [Obfuscator.io](https://www.obfuscator.io/)
    * Used for obfuscating the emailjs public key

## Testing
For the website testing, please see the separate [TESTING.md](/TESTING.md) file.

## Bugs
**Bug 1:**
When populating the guessing table, the JavaScript could not connect event listeners for the guess submission buttons. This turned out to be because the buttons were added to the DOM after the JavaScript file was loaded. To solve this, I added the following lines of code to the bottom of the tableBuild() function:
```javascript
let appendScript = "<script id='guessing-script' src='assets/scripts/score.js'></script>"
$("body").append(appendScript);
```
This allowed a second JavaScript file to be appended to the html body, where the game scoring section is stored. As this is loaded after the table, it is able to connect event listeners to the buttons in the table.

**Bug 2:**
After reseting the game, when the guess button is pressed linking the script to the guessing functions file, there are errors due to the global variables on that file having already been defined on the first run through of the game. To get around this, I used var to define the necessary global variables within the game script file, so that they were accessible from the guessing functions file, removing the need for them to be redefined in the latter.

**Bug 3:**
When entering an invalid number into the sequence length selector, it will assign this value to the sequenceLength regardless. This was fixed by moving the sequenceLength assignment inside the conditional and replacing it's original use with a new global variable named lengthCheck.

**Bug 4:**
When submitting guess, if no value or suit is submitted, it will accept the submitted answer as being "disableddisabled". This is bad user experience, as it prevents the user from enetering an actual guess and disables the button. This was solved by wrapping most of the code in an if/else statement to set an alert if either of the submitted values are "disabled" and to continue the code if the entries are valid. <br>
Before: <br>
```javascript
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
```javascript
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
**Bug 5:**
On smaller screen heights, the contact me modal contents became blurred like so: <br>
![blurred modal](/documentation/bug-5-issue.png) <br>
The problem turned out to be the border radius of the modal, so I added a media query to remove the border radius at and below screen sizes when the blurring occurred: <br>

```css
@media screen and (max-height: 660px) {
    #contact-me-modal {
        border-radius: 0;
    }
}
```

This fixed the issue: <br>
![fixed modal](/documentation/bug-5-solution.png)<br>

**Bug 6:**
The sequence length label and button overlap on smaller screens, this is why a media query is set for the strange value of 464 pixels, because this is the screen size at which overlapping occurs. This media query fixes the overlap issue.

### Known Bugs
There are no known current bugs on the website.

### Mistakes
- Git commit #100 did not start with a keyword before the description. Care will be taken to prevent this occuring in future.

## Deployment

### Deployment to GitHub pages

This site was deployed using GitHub pages. To deploy your own site, you will need a GitHub account of your own and to put your code into a respository following this [handy guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories). Please follow these steps, with examples of my repository, to deploy your own repository to GitHub pages once you are logged in:
- Once in the [GitHub repository](https://github.com/amfairley/memorycards), go to the Settings tab which can be found at the top of the page. 
<details><summary>Setting tab location image</summary>
<img src="/documentation/deployment/deployment-settings-tab.png">
</details>

- On the left hand side of the page there will be a series of sections; under the second heading named **Code and automation**; select the bottom option; **Pages**.
<details><summary>Pages tab location image</summary>
<img src="/documentation/deployment/deployment-pages-tab.png">
</details>

- Ensure your build and deployment source is **Deploy from a branch** which can be selected from a drop down menu under the **Build and Deployment** heading.
<details><summary>Deploy from branch location image</summary>
<img src="/documentation/deployment/deployment-deploy-from-branch.png">
</details>

- In the **Branch** section, click on the dropdown menu currently set to none and select the main branch, ensure that the folder is root, and click save.
<details><summary>Main branch location image</summary>
<img src="/documentation/deployment/deployment-main-branch.png">
</details>

- The page will refresh and the link to the deployed website will appear at the top of the page.
<details><summary>Deployed website link</summary>
<img src="/documentation/deployment/deployment-link.png">
</details>

- Clicking or typing this link into your URL bar will take you to your deployed website. Congratulations! You can then manually test the functionality of your website following along with my [TESTING.md](/TESTING.md) procedure.

- For any troubleshooting advice, the guys over at GitHub have provided handy documentation that can be found [here](https://docs.github.com/en/pages/quickstart).

### Forking The Repository
This repository can be forked, allowing you to create a separate codebase to make local changes without impacting the original repository. <br>
You can fork the repository if you have a [GitHub](https://github.com/) account by going the [GitHub repository](https://github.com/amfairley/memorycards) and selecting **Fork** in the top right corner and click **+ Create a new fork**. This will take you to a new page where you can assign yourself as an owner, add a description, and fork the main page.
<details><summary>Fork location image</summary>
<img src="/documentation/deployment/deployment-fork.png">
</details>

For any troubleshooting, see the GitHub documentation that can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

### Deploying Locally

To deploy locally; you can clone this repository. To do so, access the [GitHub Repository](https://github.com/amfairley/memorycards) and click on the bright green "<> Code" button located below the Pin/Watch/Fork/Star toolbar and above the repository file list. From here, select your required option; either cloning it from the web URL using HTTPS, using a password protected SSH key using SSH, or working in the offial GitHub CLI with GitHub CLI. Then use the IDE of your choice, (mine is [Visual Studio Code](https://code.visualstudio.com/)) to clone it. <br>
<details><summary>How to clone image</summary>
<img src="/documentation/deployment/deploying-locally.png">
</details>
For example, in Studio Visual Code you will need to use the git clone command as such:<br>

```
git clone https://github.com/amfairley/memorycards.git
```

There is also the option in the same green "<> Code" button to download all files as a ZIP folder or open the repository with GitHub Desktop.
For any troubleshooting, please see the GitHub documentation that can be found [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

### Addition of 404.html
The 404 page was added in the following way:
- Create a file named 404.html
- Create the content and style as desired
- Create a new file named 404.md
- Put the following code into the 404.md:

```
---
permalink: /404.html
---
```

## Credits

### Documentation
- The code-institute [template](https://github.com/Code-Institute-Org/ci-full-template) was used in order to have necessary tools preinstalled.

### Media
- The card images are from [Wikipedia](https://en.wikipedia.org/wiki/Standard_52-card_deck). They are the work of [Dmitry Formin](https://commons.wikimedia.org/wiki/User:Dmitry_Fomin) who has dedicated these images to the public domain under the copywrite code [CC0]( https://creativecommons.org/publicdomain/zero/1.0/).

### Code
**Fischer Yates Shuffling Algorithm**
This code was put together with help from [stack overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/43409054) and [Bro Code](https://www.youtube.com/watch?v=FGAUekwri1Q) on YouTube. 

**EmailJS**
Code lines in [emailjs.js](/assets/scripts/emailjs.js) are taken from the [emailjs documentation](https://www.emailjs.com/docs/tutorial/creating-contact-form/) along with the emailjs SDK link and initialise emailjs scripts at the bottom of the HTML body element. These sections in the html files have been obfuscated using [obfuscator.io](https://www.obfuscator.io/) for security reasons.

**Google Analytics**
The google analytics script is added at the bottom of the head element on each html page, taken from the google analytics tagging instructions.


## Acknowledgements
- My mentor [Julia Konovalova](https://github.com/IuliiaKonovalova) for their continued guidance and support with this project
- [Code Institute](https://codeinstitute.net/global/) Slack community members for their support and help
- My fellow [Code Institute](https://codeinstitute.net/global/) learning cohort for all of their advice and support
- My friends, family, and colleagues who provided essential user tests to get the game to the state it is in today
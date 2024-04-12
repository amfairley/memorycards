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

![shuffle test](/documentation/testing/javascript_testing/javascript_manual_test_shuffle_function.png)

### makeDivs() Function:
| Test Step |  Expected | Outcome |
| --------- | ------------- | ----------------- |
| Assign the value of cards to cardsToPlay | cardsToPlay now has the value of an array of cards | As expected |
| Call makeDivs() function on a number | That number of card images will appear in the game area. The card images will match that number of values in the cardsToPlay array | As expected |

![makeDivs test console](/documentation/testing/javascript_testing/javascript_manual_test_makeDivs_function_a.png)
![makeDivs test game area](/documentation/testing/javascript_testing/javascript_manual_test_makeDivs_function_b.png)

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
![tableBuild test console](/documentation/testing/javascript_testing/javascript_manual_test_tableBuild_function_a.png)
![tableBuild test game area](/documentation/testing/javascript_testing/javascript_manual_test_tableBuild_function_b.png)
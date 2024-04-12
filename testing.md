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
![makeDivs test gamearea](/documentation/testing/javascript_testing/javascript_manual_test_makeDivs_function_b.png)
// Global variables
const cards = [
    'ac.png', 
    '2c.png', 
    '3c.png', 
    '4c.png', 
    '5c.png', 
    '6c.png', 
    '7c.png', 
    '8c.png', 
    '9c.png', 
    '10c.png', 
    'jc.png', 
    'qc.png',
    'kc.png'
];
let shuffledCards;
let sequenceLength;

// This shuffling algorithm was made with help from stack overflow and Bro Code on YouTube, see README.md for links
/**
 * Fischer Yates Algorithm for shuffling 
 */
function shuffle(array) {
    // Loop through elements of array from end to beginning
    // array.lenth - 1 because the last item is the index of length -1
    // continue whilst i > 0
    // i decreases by 1 each time
    for (let i = array.length - 1; i > 0; i--) {
        // Make a random number 1-array.length
        const random = Math.floor(Math.random() * (i + 1));
        // Shuffle the values
        [array[i], array[random]] = [array[random], array[i]];
      }
    return array;
    }

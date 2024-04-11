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

const assertEqual = require('./assertEqual')

let countLetters = function(stringToCount) {
  // Create an object that will stock letters as keys and numbers of counts as values
  const stringByLetters = {};
  // Create a for...of loop that will check each letters of the string without its spaces.
 // Create a variable letter to represent each unit of the string 
  for (const letter of stringToCount.replace(/\s/g,'')) {
// Increment the count of each letter into stringByLetters as we encounter each string item in the array.
// Set a property with that string key to the value that was already there 
// (or zero if nothing there) with 1 added to it.
if (stringByLetters[letter]) {
  stringByLetters[letter] += 1;
} else {
  stringByLetters[letter] = 1;
}
  }
// Return the now full const 
  return stringByLetters
};

module.exports = countLetters;
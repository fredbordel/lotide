const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }

};


let countLetters = function(stringToCount) {
  // Create an object that will stock letters as keys and numbers of counts as values
  const stringByLetters = {};
  // Create a for...of loop that will checks each letters of the string
  for (const letter of stringToCount.replace(/\s/g,'')) {
if (stringByLetters[letter]) {
  stringByLetters[letter] += 1;
} else {
  stringByLetters[letter] = 1;
}
  }
  return stringByLetters
};

console.log(countLetters("Lighthouse labs is in the house"));


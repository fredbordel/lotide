const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function (words) {
  return words.slice(1);
};

const words = ["Lighthouse", "Labs", "hey"];
tail(words);
assertEqual(words.length, 3);
console.log(tail(["Hello", "Words", "Okay", 1, 3, 4]));
const eqArrays = require("./eqArrays")

const assertArraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(`❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return console.log(`❌Assertion Failed: ${arr1} !== ${arr2}`);
     } 
    }
    return console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
};


module.exports = assertArraysEqual;
/*
assertArraysEqual([0, 3, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2]); // => should PASS
*/

const assertEqual = require("./assertEqual");

function eqArrays(arrayA , arrayB) {
  if (arrayA.length != arrayB.length) {
    // not the same qty of elements
    return false;
  } else {
    let i = 0;
    while (i < arrayA.length) {
      if (arrayA[i] !== arrayB[i]) {
        return false;
      }
      i++;
    }return true;
  }
}
module.exports = eqArrays;
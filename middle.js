const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
   } 
  }
  return true
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }

};


let middle = function (arrToFind){
  let middleOfArr = [];
  if (arrToFind.length <= 2) {
    return middleOfArr;
  } else if (arrToFind.length > 2) {
    for (let i = 0; i < arrToFind.length; i++) {
      if (arrToFind.length % 2 === 0) {
        middleOfArr.push(arrToFind[arrToFind.length / 2 - 1])
        middleOfArr.push(arrToFind[arrToFind.length / 2])
        return middleOfArr;
      }
      else {
          middleOfArr.push(arrToFind[Math.round(arrToFind.length / 2 - 1)])
          return middleOfArr;
      }
    }
  }
};
console.log(middle([1]));
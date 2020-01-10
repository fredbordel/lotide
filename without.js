const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }

};

let eqArrays = function (arr1, arr2) {
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


/*const without = function(sourceArray, itemsToRemove) {
  let newArr = []; 
  
  for (let item of sourceArray) {
    if (sourceArray[item] != itemsToRemove[item]) {
     newArr.push(sourceArray[item]);
      
    }
    console.log(newArr)
  }
 
  return newArr;
};
*/

const without = function(sourceArray, itemsToRemove){
  const newArray = [];
  sourceArray.forEach((item1) => itemsToRemove.forEach((item2) => {
    if (item1 !== item2) {
      newArray.push(item1)
    }
  }))
  return newArray
};

console.log(without(["hello", "lighthouse", "world"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

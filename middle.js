const assertArraysEqual = require("./assertArraysEqual")


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



module.exports = middle;


const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const without = function(sourceArray, itemsToRemove){
  const newArray = [];
  sourceArray.forEach((item1) => itemsToRemove.forEach((item2) => {
    if (item1 !== item2) {
      newArray.push(item1)
    }
  }))
  return newArray
};

module.exports = without;

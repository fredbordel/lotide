const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${expected}`);
  } else if (eqObjects(actual, expected)) {
    console.log(`❌Assertion Failed: ${inspect(actual)} !== ${expected}`);
  }
};

module.exports = assertObjectsEqual;

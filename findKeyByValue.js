const assertEqual = require('./assertEqual');

let findKeyByValue = function(object, value) {
  for (const eachKey in object) {
    if (object[eachKey] === value) {
      return eachKey;
    }
   }
};

module.exports = findKeyByValue;
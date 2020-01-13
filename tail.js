const assertEqual = require("./assertEqual")

const tail = function (words) {
  return words.slice(1);
};

const words = ["Lighthouse", "Labs", "hey"];
tail(words);
assertEqual(words.length, 3);
console.log(tail(["Hello", "Words", "Okay", 1, 3, 4]));

module.exports = tail;
const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Lighthouse", "Labs", "hey"];
tail(words);
assertEqual(tail(words).length, 2);
console.log(tail(["Hello", "Words", "Okay", 1, 3, 4]));
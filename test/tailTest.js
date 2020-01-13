const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require('chai').assert;


//assertEqual(tail(["Hello", "Words", "Okay", 1, 3, 4]).length, 5);

describe("#tail", () => {
  it("returns ['Words', 'Okay'] for ['Hello', 'Words', 'Okay']", () => {
    assert.deepEqual(tail(["Hello", "Words", "Okay"]), ['Words', 'Okay']);
  })
  it("returns [1, 2, 4, 6] for [0, 1, 2, 4, 6]", () => {
    assert.deepEqual(tail([0, 1, 2, 4, 6]), [1, 2, 4, 6]);
  })
});
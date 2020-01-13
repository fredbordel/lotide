const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns ['Words', 'Okay'] for ['Hello', 'Words', 'Okay']", () => {
    assert.deepEqual(tail(["Hello", "Words", "Okay"]), ['Words', 'Okay']);
  })
  it("returns [1, 2, 4, 6] for [0, 1, 2, 4, 6]", () => {
    assert.deepEqual(tail([0, 1, 2, 4, 6]), [1, 2, 4, 6]);
  })
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  })
});
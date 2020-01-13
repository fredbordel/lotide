const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })
  it("returns [34, 56] for [0, 5, 34, 56, 98, 29]", () => {
    assert.deepEqual(middle([0, 5, 34, 56, 98, 29]), [34, 56]);
  })
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  })

});
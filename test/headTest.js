const assertEqual = require('../assertEqual');
const head = require('../Head');
const assert = require('chai').assert;


describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), "Hello"); 
  });
  it("returns '5' for [5]", () => {
    assert.strictEqual(head(['5']), '5')
  })
  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined)
  })
});


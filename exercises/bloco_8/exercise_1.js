const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten (acc, currentV) {
  return arrays.reduce((acc, currentV) => {
    return acc.concat(currentV);
  })
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
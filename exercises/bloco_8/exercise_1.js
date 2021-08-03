const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten () {
  return arrays.reduce((acc, currentV) => acc.concat(currentV));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// Referência concat = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
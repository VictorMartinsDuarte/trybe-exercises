const assert = require('assert');
const books = require('./database');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, cur, i, arr) => i === arr.length - 1 ? `${acc}${cur.author.name}.` : `${acc}${cur.author.name}, `, '');
};

assert.strictEqual(reduceNames(), expectedResult);
console.log(reduceNames())
const assert = require('assert');
const books = require('./database');

const expectedResult = 43;

function averageAge() {
  const authorAges = books.reduce((acc, curV) => acc + (curV.releaseYear - curV.author.birthYear), 0);

  return authorAges/books.length;
};

assert.strictEqual(averageAge(), expectedResult);
console.log(averageAge());
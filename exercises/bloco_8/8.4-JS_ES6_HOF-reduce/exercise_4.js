const assert = require('assert');
const books = require('./database');


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, curV) => acc.length < curV.name.length ? curV : acc, '');
};

assert.deepStrictEqual(longestNamedBook(), expectedResult);
console.log(longestNamedBook());
// console.log(books)
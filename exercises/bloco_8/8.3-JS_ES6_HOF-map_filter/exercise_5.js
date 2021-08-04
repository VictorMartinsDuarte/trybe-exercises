const assert = require('assert');
const { toNamespacedPath } = require('path/posix');
const books = require('./database');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books.filter((value) => value.genre === 'Fantasia' || value.genre === 'Ficção Científica').map((element) => element.author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(),expectedResult);
console.log(fantasyOrScienceFictionAuthors());
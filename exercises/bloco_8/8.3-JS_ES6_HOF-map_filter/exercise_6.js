const assert = require('assert');
const books = require('./database');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return books.filter((value) => value.releaseYear < 1961).map((element) => element.name)
}

assert.deepStrictEqual(oldBooks(), expectedResult);
console.log(oldBooks());
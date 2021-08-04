const assert = require('assert');
const books = require('./database');

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const formatedBookNames = () => books.map((value) => `${value.name} - ${value.genre} - ${value.author.name}`);

assert.deepStrictEqual(formatedBookNames(), expectedResult);
console.log(formatedBookNames());
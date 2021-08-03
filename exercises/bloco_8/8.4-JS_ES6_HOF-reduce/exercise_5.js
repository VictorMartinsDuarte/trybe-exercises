const assert = require('assert');
const books = require('./database');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curV) => acc + curV).split('').filter((value) => value.toLowerCase() === 'a').length;
}

assert.deepStrictEqual(containsA(), 20);
console.log(containsA());
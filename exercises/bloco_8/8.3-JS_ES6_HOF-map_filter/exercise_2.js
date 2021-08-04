const assert = require('assert');
const books = require('./database');

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  let result = books.map((value) => ( 
      {
        age: (value.releaseYear - value.author.birthYear),
        author: value.author.name,
      }
    )
  )

  return result.sort((a, b) => a.age - b.age);
  // Ajuda do Matheus Sza.
}
    
assert.deepStrictEqual(nameAndAge(), expectedResult);
console.log(nameAndAge());
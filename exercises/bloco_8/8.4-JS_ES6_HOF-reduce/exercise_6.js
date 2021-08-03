const assert = require('assert');
const books = require('./database');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const media = grades.map((element) => element.reduce((acc, grades) => acc + grades)/element.length)
  
  return students.reduce((acc, curV, i) => {
    acc.push({name: curV, average: media[i]});
    return acc
  }, [])
}
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage())
assert.deepStrictEqual(studentAverage(), expected);
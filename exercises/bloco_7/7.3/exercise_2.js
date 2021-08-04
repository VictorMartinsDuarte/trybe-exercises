// 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array.
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// a) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.
  assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Não retornou corretamente!');
// b) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
  assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Retornou [1, 2, 3, 4]');
// c) Verifique se o array passado por parâmetro não sofreu alterações, após a função rodar.
let newArr = myRemove([1, 2, 3, 4], 0);
  assert.deepStrictEqual(newArr.length, 4, 'Modificou o array!');
// d) Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
  assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Retornou o array esperado!');
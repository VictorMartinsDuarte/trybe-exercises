// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let a = 'Arura'.toLowerCase();

function isPalindrome (a) {
    for (let index = 1; index <= a.length; index += 1) {
        if (a[index - 1] != a[a.length - index]) {
            return ' não é um palíndromo!';
        }
    return ' é um palíndromo!'; 
    }   
}

console.log(a.toUpperCase() + isPalindrome(a));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .


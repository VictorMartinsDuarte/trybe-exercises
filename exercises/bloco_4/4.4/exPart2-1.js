// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
} //Função que o Michael encontrou sobre como deixar a primeira letra da palavra maiúscula.

let word = 'arara'.toLowerCase();

function isPalindrome (a) {
    for (let index = 1; index <= a.length; index += 1) {
        if (a[index - 1] != a[a.length - index]) {
            return ' não é um palíndromo!';
        }
    }
return ' é um palíndromo!';
}

console.log(word.capitalize() + isPalindrome(word));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let number = [2, 3, 6, 7, 10, 1];

    function verificaMaior(n) {
        let maior = 0;
        for (let index in n) {
            if (n[maior] < n[index]) {
                maior = index;
            }
        }
    return maior;
    }

console.log(verificaMaior(number));

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// * Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// * Valor esperado no retorno da função: 6 .

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// * Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// * Valor esperado no retorno da função: Fernanda .


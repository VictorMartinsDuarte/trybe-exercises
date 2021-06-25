// Questão: Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let result = [];

for (let index = 1; index <= 25; index += 1) {
    result[index - 1] =  index;
}

console.log(result);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let divResult = [];

for (let index = 0; index < result.length; index += 1) {
    divResult[index] = (result[index] / 2);
}

console.log(divResult);
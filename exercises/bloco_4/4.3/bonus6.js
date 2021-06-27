// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let n = 29;
let divisores = [];

for (let numberIndex = 1; numberIndex <= n; numberIndex += 1) {
    if (n % numberIndex === 0) {
        divisores.push(numberIndex); 
    }
}

if (divisores.length > 2) {
    console.log(n + ' não é número primo.');
} else {
    console.log(n + ' é primo!');
}
console.log(divisores);

console.log(Array.isArray(divisores));

// let n = 100;
// let qntPrimos = null;
// let nPrimos = [0];

// for (let index = 1; index <= n; index += 1) {
//     if ((index % 2) != 0 && (index % 3) != 0 && (index % 5) != 0 && (index % 7) != 0 && (index % 9) != 0 && (index % 11) != 0) {        
//         qntPrimos += 1;
//         console.log(qntPrimos);
//         nPrimos[qntPrimos] = index;  
//     }  
// }
// console.log(nPrimos);


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// let sumNumbers = null;

// for (let index = 0; index < numbers.length; index += 1) {
//     sumNumbers = sumNumbers + numbers[index];
// }

// console.log(sumNumbers);

// let average = (sumNumbers/numbers.length);
// console.log(average);

// if (average > 20) {
//     console.log("Valor maior que 20.");
// } else {
//     console.log("Valor menor ou igual a 20.");
// }

let maiorNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (maiorNumber < numbers[index]) {
        maiorNumber = numbers[index];
    }
}

console.log(maiorNumber);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

let sumNumbers = null;

for (let index = 0; index < numbers.length; index += 1) {
    sumNumbers = sumNumbers + numbers[index];
}

// console.log(sumNumbers);

console.log(sumNumbers/numbers.length);
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((value) => value % 3 && value % 5); 

console.log(findDivisibleBy3And5())
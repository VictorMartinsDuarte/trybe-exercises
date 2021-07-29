const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find((value) => value.length === 5);

console.log(findNameWithFiveLetters());
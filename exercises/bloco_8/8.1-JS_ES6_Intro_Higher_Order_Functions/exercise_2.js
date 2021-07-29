// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkIfEqual = (a, b) => (a === b) ? `Parabéns você ganhou` : `Tente novamente`;

const result = (apostado, checker) => {
  const sorted = Math.ceil(Math.random() * 5);
  return checker(apostado, sorted);
}
console.log(result(2, checkIfEqual));

// Referência para todos os números terem a mesma chance de aparecer = Math.round(Math.random() * (max - min + 1) + min);
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// 1. Produza o mesmo resultado acima, porém utilizando array destructuring

const [oi, tchau] = saudacoes;

tchau(oi)

// -------------------------

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// 2. Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando

console.log(comida, animal, bebida); // arroz gato água

// ------------------------


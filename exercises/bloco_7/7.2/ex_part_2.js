const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addKey(a, b, c) {
  // let obj = a;
  // let key = b;
  // let value = c;
  a[b] = c;
} addKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function keysList(obj) {
  const list = Object.keys(obj);
  return list;
} console.log(keysList(lesson3));

// 3. Crie uma função para mostrar o tamanho de um objeto.
function objSize(obj) {
  const list = keysList(obj);
  return list.length;
} console.log(objSize(lesson3));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function objValues(obj) {
  const values = Object.values(obj);
  return values;
} console.log(objValues(lesson3));

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// const allLessons2 = {lesson1, lesson2, lesson3}; *** Assign não serviu pra nada nesse caso!

console.log(allLessons);
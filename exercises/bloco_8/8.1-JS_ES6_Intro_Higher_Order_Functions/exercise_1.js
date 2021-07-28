const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: colaborador('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    // id3 = exemplo do que está ocorrendo, a função toma o lugar do parâmentro.
  }
  return employees;
};

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// Feito em conjunto com Henrique A., Diogo F., Michael C., Leonardo Eli, Thiago F. e Luiz G.
const colaborador = (nomeCompleto) => {
  const nomeColaborador = nomeCompleto.toLowerCase().replace(' ', '_');

  return { Nome: nomeCompleto, Email: `${nomeColaborador}@trybe.com`, }
}

// console.log(newEmployees(colaborador('Pedro Guerra'), colaborador('Luiza Drumond'), colaborador('Carla Paiva')));
// pra usar essa forma é necessário que o 'newEmployees' tenha 3 parâmetros (a, b, c) e os valores dos objetos sejam os parâmetros em ordem
newEmployees(colaborador);
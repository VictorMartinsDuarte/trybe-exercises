// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

// Olha o RPG aí!

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const randomDmg = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const dragonDmg = (minDmg, dragStrength) => {
  return randomDmg(minDmg, dragStrength);
}

console.log(`Dano do Dragão foi: ${dragonDmg(15, dragon.strength)}`)

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDmg = (warStrength, weaponDmg) => {
  return randomDmg(warStrength, (warStrength * weaponDmg));
}

console.log(`Dano do Warrior foi: ${warriorDmg(warrior.strength, warrior.weaponDmg)}`)

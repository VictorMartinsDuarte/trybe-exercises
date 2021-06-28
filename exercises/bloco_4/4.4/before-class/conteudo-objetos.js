let player1 = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};
player1['fullName'] = player1.name + ' ' + player1.lastName;

console.log('A jogadora ' + player1.fullName + ' tem ' + player1.age + ' anos de idade.');

console.log('A jogadora ' + player1.fullName + ' foi eleita a melhor do mundo por ' + player1.bestInTheWorld.length + ' vezes!');

console.log('A jogadora possui ' + player1.medals.golden + ' medalhas de ouro e ' + player1.medals.silver + ' medalhas de prata!');
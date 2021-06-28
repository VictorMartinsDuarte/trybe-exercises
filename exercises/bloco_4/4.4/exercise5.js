let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    info2: {
        personagem: 'Margarida e Tio Patinhas',
        origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
        recorrente: 'Sim',
    }
};

for (let index in info) {
    if (info[index] === info.info2[index]) {
        console.log('Ambos recorrentes')
        break;
    } else {
    console.log(info[index] + ' e ' + info.info2[index])
    }
}
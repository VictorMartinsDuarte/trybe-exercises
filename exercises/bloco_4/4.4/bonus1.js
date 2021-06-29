let roma = {
    I: 1,
    V: 5,
    X: 10, 
    L: 50,
    C: 100, 
    D: 500,
    M: 1000 
}
let valorReal = [];

let valor = 'MCXVI'

    function calculo(valor) {
        let objetoDesmembrado = [];
        let valoresRoma = [];
        let valorDesmembrado = [];
        let resultado = 0;
        for (let index in roma) {
            console.log(index);
            objetoDesmembrado.push(index);
            valoresRoma.push(roma[index]);
        }
        for (let index in valor) {
            console.log(index);
            valorDesmembrado.push(valor[index]);
        }
        for (let iValor = 0; iValor < valorDesmembrado.length; iValor += 1) {
            for (let iObjDesmembrado = 0; iObjDesmembrado < objetoDesmembrado.length; iObjDesmembrado += 1){
                if (valorDesmembrado[iValor] == objetoDesmembrado[iObjDesmembrado]) {
                    valorReal.push(valoresRoma[iObjDesmembrado]);
                }
            }
        }
        for (let index = 1; index <= valorReal.length; index += 1) {
            if (valorReal[0] > [valorReal.length - 1]) {
                resultado += valorReal[index -1];
            } else if (valorReal[index] === valorReal[valorReal.lentgh - 1]) {
                resultado += valorReal[index - 1];
            } else {
                resultado -= valorReal[index - 1];
            }
        }
        console.log(objetoDesmembrado);
        console.log(valoresRoma);
        console.log(valorDesmembrado)
        console.log(valorReal);
        return resultado;
    }

console.log(calculo(valor));
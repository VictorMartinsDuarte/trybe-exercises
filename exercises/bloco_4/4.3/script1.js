// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 3;

for (let indexLin = 0; indexLin < n; indexLin += 1) {
   let linha = "";
   for (let indexCol = 0; indexCol < n; indexCol += 1) {
    linha += "*";
   }
   console.log(linha);
}


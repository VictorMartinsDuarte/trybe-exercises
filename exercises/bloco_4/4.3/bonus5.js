// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 7;
let meio = (n + 1) / 2;

for (let altura = 0; altura < meio; altura += 1) {
    let resultado = "";
    for (let posicaoNaLinha = 1; posicaoNaLinha <= n; posicaoNaLinha += 1) {
        if (posicaoNaLinha === (meio + altura) || posicaoNaLinha === (meio - altura) || altura === (meio - 1)) {
            resultado += "*";
        } else {
            resultado += " ";
        }
    }
    console.log(resultado);
}

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******
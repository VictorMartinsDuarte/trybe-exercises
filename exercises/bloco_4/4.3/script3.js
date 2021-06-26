// 3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;

for (let limiteDaLinha = 1; limiteDaLinha <= n; limiteDaLinha += 1) {
    let resultado = "";

    for (let vaziosNaLinha = n; vaziosNaLinha >= 1; vaziosNaLinha -= 1) {
        if (limiteDaLinha < vaziosNaLinha) {
            resultado += " ";
        } else {
            resultado += "*";
        }
    }
    console.log(resultado);
}
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
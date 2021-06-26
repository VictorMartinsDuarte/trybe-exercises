let n = 7;
let meio = (n + 1) / 2;
let ladoEsq = meio;
let ladoDir = meio;
let asterisco = "*";

for (let limiteLinha = 1; limiteLinha <= meio; limiteLinha += 1) {
    let resultado = "";
    for (let coluna = 1; coluna <= n; coluna += 1) {
        if (coluna == ladoEsq || coluna == ladoDir || limiteLinha == meio) {
            resultado += asterisco;
        } else {
            resultado += " ";
        }
    }

    ladoEsq -= 1;
    ladoDir += 1;
    console.log(resultado);
}

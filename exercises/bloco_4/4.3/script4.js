// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 7;

for (let qntLinhas = 0; qntLinhas < n; qntLinhas += 2) {
    let resultado = "";
    
    for (let espaçosVazios = 1; espaçosVazios < (n - qntLinhas); espaçosVazios += 2) {
        resultado += " ";
    }
    for (let asteriscos = (n + qntLinhas); asteriscos > (n-1); asteriscos -= 1) {
        resultado += "*";
    }
    console.log(resultado);
}
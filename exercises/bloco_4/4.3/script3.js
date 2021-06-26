// 3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;

for (let index = 1; index <= n; index += 1) {
    let line = "";
    let asterisco = n - index;

    for (let index2 = 0; index2 < n; index2 += 1) { 
        if (line.length < asterisco) {
            line += " ";
        } else {
            line += "*";
        }  
    }
    console.log(line);
}

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;

for (let index = (n-1); index >= 0; index -= 2) {
    linha = '';
    for(let colunaVazia = 1; colunaVazia <= index; colunaVazia += 2){
        linha += ' ';
}
    for (let colunaAsterisco = index; colunaAsterisco < n; colunaAsterisco += 1) {
        linha += '*';
} 
    console.log(linha);
}
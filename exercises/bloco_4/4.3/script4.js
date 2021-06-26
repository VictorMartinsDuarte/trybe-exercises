// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;

for (let index = (n-1); index >= 0; index -= 2) {
    linha = '';
    for(let columnI = 1; i <= index; columnI += 2){
        linha += ' ';
}
    for (let i = index; i < n; i += 1) {
        linha += '*';
} 
    console.log(linha);
}
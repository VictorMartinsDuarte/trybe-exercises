6.1 HTML e CSS - Forms
De modo geral, estes são os types que podem ser usados de acordo com a aplicação do campo input:
button : define um botão;
checkbox : permite que o usuário selecione ZERO ou MAIS opções de um número limitado de escolhas;
color : campos de entrada que devem conter uma cor para selecionar;
date : campos de entrada que devem conter uma data;
datetime-local : campo de entrada de data e hora, sem fuso horário;
email : campos de entrada que devem conter um endereço de e-mail;
file : campo de seleção de arquivo e um botão "Procurar" para uploads de arquivos;
month : permite ao usuário selecionar um mês e ano;
number : define um campo de entrada numérico;
password : os caracteres do campo de senha são mascarados (mostrados como asteriscos ou círculos);
radio : permite que um usuário selecione APENAS UMA de um número limitado de opções;
range : define um controle para inserir um número (como um controle deslizante). Intervalo padrão é de 0 a 100;
reset : redefinirá todos os valores do formulário para seus valores padrão;
search : usado para campos de pesquisa;
submit : envia dados de formulário a um manipulador de formulários(especificado na action do form );
tel : campos de entrada que devem conter um número de telefone;
text : campo de entrada de texto de linha única;
time : permite que o usuário selecione um horário (sem fuso horário);
url : campos de entrada que devem conter um endereço URL;
week : permite ao usuário selecionar uma semana e um ano.

value : especifica um valor inicial para um campo de entrada;
readonly : especifica que um campo de entrada é somente leitura;
disabled : especifica que um campo de entrada deve ser desativado;
size : especifica a largura visível, em caracteres, de um campo de entrada;
maxlength : especifica o número máximo de caracteres permitidos em um campo de entrada;
min e max : especificam os valores mínimo e máximo para um campo de entrada;
multiple : especifica que o usuário tem permissão para inserir mais de um valor em um campo de entrada;
pattern : especifica uma expressão regular em relação à qual o valor do campo de entrada é verificado;
placeholder : especifica uma dica curta que descreve o valor esperado de um campo de entrada;
required : especifica que um campo de entrada deve ser preenchido antes de enviar o formulário;
step : especifica os intervalos de números válidos para um campo de entrada;
autofocus : especifica que um campo de entrada deve obter foco automaticamente quando a página é carregada;
height e width : especificam a altura e a largura de um elemento;
autocomplete : especifica se um campo de entrada deve ter o preenchimento automático ativado ou desativado.
6.3 - CSS Flexbox Parte 1

6.4 - CSS Flexbox Parte 2

align-items - Alinha no eixo cross/perpendicular
a:hover - Opacity
color: inherit - Herda cor do elemento pai
TAG hero - Parte de destaque no site
background-image - URL('pasta/imagem.extensao')
CSS Units -> vh - Relative to 1% of the height of the viewport*
background-size - cover

img - object-fit e width

flex-basis - xx%

z-index

6.5 CSS Responsivo - Mobile First

7.1
O ESlint aponta para trocar o 'let' por 'const' no caso: let criandoElementoX = document.createElement('x'); / mesmo que eu coloque caminhoElemento.appendChild(criandoElementoX); / e após esse appendChild, a variável fica com o valor do caminho para o próprio elemento criado, e achei que 'const' impediria essa mudança.

Oi, Victor! Nesse caso é porque você não está alterando o valor de criandoElementoX propriamente dito. Você está acessando uma função de um elemento HTML armazenado em criandoElementoX. Seria parecido com o código que o Hugo executou na aula adicionando uma propriedade ao objeto person, mesmo tendo criando o objeto utilizando const. Ou seja, ele não alterou o valor de person propriamente dito, ele só adicionou uma propriedade ao objeto que está em person! Ficou nítido? :)

7.2
Slido aula:
Pergunta: Estaria certo falar que o Array é um Objeto com as chaves anônimas/padronizadas? Ex.: O índice sempre 0,1,2,3...
Resposta: Oi, Victor! Segundo o que consta na documentação, a definição de Array é: "Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos são fixos." Para mais informações, consulte aqui: developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
Conclusão: Humm, esse parágrafo aqui esclareceu -> Arrays não podem usar strings como índices (como em um array associativo), devem ser usados números inteiros... No caso, eles têm obrigações padronizadas pro índice, e propriedades a mais. Obrigado!

8.1 JS-ES6 Higher Order Functions
HOF = Função que utiliza outra como parâmetro, ou retorna uma função.

Dica pra aula: Começar a utilizar nomes de parâmentros como 'a' ou 'b', letras únicas pra ficar menos confuso, quando for simplesmente a indicação de que deve receber o parâmetro.
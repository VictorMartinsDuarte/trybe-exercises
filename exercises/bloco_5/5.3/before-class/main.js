const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//  Copie esse arquivo e edite apenas ele;
//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let bodyDiv = document.body.querySelector('div').children
function classTech(event) {
  for (let index = 0; index < bodyDiv.length; index += 1) {
    bodyDiv[index].classList.remove('tech');
  }
  event.target.classList.add('tech');
}
firstDiv.addEventListener('click', classTech)
secondDiv.addEventListener('click', classTech)
thirdDiv.addEventListener('click', classTech)
//  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
// function changeText (a) {
// document.querySelector('.tech').innerText = a.target.value;
// }
// input.addEventListener('input', changeText) *** Alternativa atalho
function techText (){
  let tech = document.querySelector('.tech');
  tech.innerText = input.value;
  }
  input.addEventListener('keyup', techText); 
// *** Alternativa Vinicius S.
//  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function () {
  window.open('https://blog.betrybe.com/');
});
//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function () {
  myWebpage.style.color = 'red';
})
myWebpage.addEventListener('mouseleave', function () {
  myWebpage.style.color = '';
  // $('#theinput').css('color', ''); ***Alternativa = https://stackoverflow.com/questions/2500500/reset-element-color-to-default-stylesheet-color-jquery-javascript
})
// myWebpage.addEventListener('mouseleave' function () {
// })
// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
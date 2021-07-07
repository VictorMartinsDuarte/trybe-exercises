function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Ex1.: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// domingo, segunda....
const ulDays = document.querySelector('#days');

// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

for (element of dezDaysList) {
  let ulDaysLi = document.createElement('li');
  ulDays.appendChild(ulDaysLi);
  ulDaysLi.innerText = element;
  ulDaysLi.className = 'days';
  
  if (element == 24 || element == 25 || element == 31) {
    ulDaysLi.className += ' holiday'; //ou li.className = 'day holiday'
  }
  if (element == 4 || element == 11 || element == 18 || element == 25) {
    ulDaysLi.className += ' friday';
  }
} 
// *** Alternativa - Giovanni N. = Uso do for/of

// Ex2.: Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function newButton(a) {
  let divButtons = document.querySelector('.buttons-container');
  let createButton = document.createElement('button');
  divButtons.appendChild(createButton).id = 'btn-holiday';
  createButton.innerText = a;
  // document.querySelector('.buttons-container').appendChild(document.querySelector)
}
newButton('Feriados');

// Ex3.: Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function addClick() {
  document.querySelector('#btn-holiday').addEventListener('click', function () {
    let daysHoliday = document.querySelectorAll('.holiday');
    for (let index = 0; index < daysHoliday.length; index += 1)
      if (daysHoliday[index].style.backgroundColor == 'red') {
        daysHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
      daysHoliday[index].style.backgroundColor = 'red';
      }
  });
}
addClick();
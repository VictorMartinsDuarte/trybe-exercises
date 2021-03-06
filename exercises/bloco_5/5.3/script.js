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

const ulDays = document.querySelector('#days');

// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

for (element of dezDaysList) {
  let ulDaysLi = document.createElement('li');
  ulDays.appendChild(ulDaysLi);
  ulDaysLi.innerText = element;
  ulDaysLi.className = 'day';
  
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

document.querySelector('#btn-holiday').addEventListener('click', function () {
  let daysHoliday = document.querySelectorAll('.holiday');
  for (let index = 0; index < daysHoliday.length; index += 1)
    if (daysHoliday[index].style.backgroundColor == 'red') {
      daysHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
    daysHoliday[index].style.backgroundColor = 'red';
    }
});

// Ex4.: Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createFridayButton(a) {
  document.querySelector('.buttons-container').appendChild(document.createElement('button')).id = 'btn-friday';
  document.querySelector('#btn-friday').innerText = a;
}
createFridayButton('Sexta-feira');

// Ex5.: Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeTextFriday(a) {
    document.querySelector('#btn-friday').addEventListener('click', function () {;
    let daysFriday = document.querySelectorAll('.friday');
    for (let index = 0; index < daysFriday.length; index += 1) {
      if (daysFriday[index].innerText == a) {
        daysFriday[index].innerText = parseInt(daysFriday[index].nextElementSibling.innerText - 1);
      } else {
        daysFriday[index].innerText = a;
      }
    }})
}
changeTextFriday('Sextou!');

 //   for (let content of daysFriday) {
  //     if (content.innerText == 4 || content.innerText == 11 || content.innerText == 18 || content.innerText == 25) {
  //       content.innerText = a;
  //     } else {
  //       content.innerText = parseInt(content.nextElementSibling.innerText - 1);
  //     }
  //   }
  // }) // *** Alternativa bolada pelo Giovanni Nunes

// document.querySelector('#btn-friday').addEventListener("click", changeTextFridayDays);

// function changeTextFridayDays () {
//   let fridayDays = document.querySelectorAll('.friday');

//   for (let index = 0; index < fridayDays.length; index += 1) {
//     let originalText = parseInt(fridayDays[index].nextElementSibling.innerText - 1);

//     if (fridayDays[index].innerText != "It's Friday!") {
//       fridayDays[index].style.backgroundColor = "yellow";
//       fridayDays[index].innerText = "It's Friday!"
//     } else {
//       fridayDays[index].innerHTML = originalText;
//       fridayDays[index].style.backgroundColor = "rgb(238,238,238)";
//     }
//   } 
// } // *** Alternativa da Juliana Braga. Code review com o Giovanni Nunes


// Ex6.: Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

// function zoomIn() {
//   ulDays.addEventListener('mouseover', function (event) {
//     event.target.style.fontSize = '3em';
//   })
// }  zoomIn();

// function zoomOut() {
//   ulDays.addEventListener('mouseout', function (event) {
//     event.target.style.fontSize = '1em';
//   })
// }  zoomOut();
// *** Alternativa bolada pelo Giovanni Nunes

let ulDaysLi = document.querySelectorAll('.day');
function zoomIn() {
  for (let content of ulDaysLi) {
    content.addEventListener('mouseover', function () {
      content.style.fontSize = '3em';
    })
  }
}; zoomIn();
function zoomOut() {
  for (let content of ulDaysLi) {
    content.addEventListener('mouseout', function () {
      content.style.fontSize = '';
    })
  }
}; zoomOut(); 
// *** Alternativa minha

// Ex7.: Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function createTask(a) {
  let taskDiv = document.querySelector('.my-tasks');
  let newTask = document.createElement('span');
  taskDiv.appendChild(newTask).innerText = a;
  // newTask.appendChild(document.createElement('br')); // Dica do Giovanni Nunes
}
createTask('Cozinhar');
// createTask('Limpar a Casa');

// Ex8.: Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function subtitleTaskColor(a) {
  let taskDiv = document.querySelector('.my-tasks');
  let bgColorTasks = document.createElement('div')
  taskDiv.appendChild(bgColorTasks).className = 'task';
  bgColorTasks.style.backgroundColor = a;
}
subtitleTaskColor('green');

// Ex9.: Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

document.querySelector('.task').addEventListener('click', function(event) {
  // let task1 = document.querySelector('.task');
  // if (task1.className == 'task selected') {
  //   task1.classList.remove('selected');
  // } else {
  //   task1.className = 'task selected';
  // } // *** Alternativa sem event.target
  if (event.target.className == 'task selected') {
    event.target.classList.remove('selected');
  } else {
    event.target.classList = 'task selected';
  }
});

// Ex10.: Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function changeDayColor() {
  let pathColor = document.querySelector('.task').style.backgroundColor;
  for (let content of ulDaysLi) {
    content.addEventListener('click', function () {
      if (document.querySelector('.task').className == 'task selected' && content.style.backgroundColor == pathColor) {
        content.style.backgroundColor = 'rgb(238,238,238)';
      } else if (document.querySelector('.task').className == 'task selected'){ 
        content.style.backgroundColor = pathColor;
      }
    })
  }
}; changeDayColor();

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode .
let btnCommitment = document.querySelector('#btn-add');
let textCommitment = document.querySelector('#task-input');

textCommitment.addEventListener('keydown', function(event){
  if (event.which == '13' && textCommitment.value == '') {
    alert('Erro! Preencha a caixa de texto.')
  } else if (event.which == '13') {
    let newCommitment = document.createElement('div');
    document.querySelector('.input-container').appendChild(newCommitment)
    newCommitment.innerText = textCommitment.value;
  }
});
btnCommitment.addEventListener('click', function(){
  let newCommitment = document.createElement('div');
  document.querySelector('.input-container').appendChild(newCommitment)
  if (textCommitment.value == '') {
    alert('Erro! Preencha a caixa de texto.')
  } else {
    newCommitment.innerText = textCommitment.value;
  }
});
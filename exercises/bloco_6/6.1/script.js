let submitButton = document.querySelector('#submit-button');
let form1 = document.querySelector('#id-form')
let cleanButton = document.querySelector('#reset-button');

window.onload = () => {
  createStateOptions();
}
function createStateOptions () {
  const stateList = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro ", "Rio Grande do Norte", "Rio Grande do Sul ", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
  // for (let index = 0; index < stateList.length; index += 1) {
  //   let createOption = document.createElement('option');
  //   document.querySelector('#input-state').appendChild(createOption);
  //   createOption.innerText = stateList[index];
  // }
  for (let state of stateList) {
    let createOption = document.createElement('option');
    document.querySelector('#input-state').appendChild(createOption);
    createOption.innerText = state;
  }
}
// * Referência https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dateString = document.querySelector('#input-date').value;
  let dateParts = dateString.split("/");

  let day = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]);
  let year = parseInt(dateParts[2]);
  

  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    monthLength[1] = 29;
  }
  
  if(year < 1950 || year > 2021 || month < 1 || month > 12 || day < 1 || day > monthLength[month]) {
    alert('Insira um valor válido!')
  }
})

// * Referência = https://www.learnwithjason.dev/blog/get-form-values-as-json
// function handleSubmit(event) {
//   event.preventDefault();
//   // const data = new FormData(event.target);
//   // const value = data.get('role');
//   // console.log({ value });
//   let data = {};
//   let dataContainer = document.querySelectorAll('input')[0];
//   for (let index = 0; index < dataContainer.maxLength; index += 1){
//   }
//   dataContainer.textContent = JSON.stringify(data, null, ' ');
// }

// tagForm.addEventListener('submit', handleSubmit);

function saveData(event) {
  event.preventDefault();
  let arrayKey = ['Name: ', 'E-mail: ', 'CPF: ', 'Endereço: ', 'Cidade: ', 'Estado: ', 'Trocar para variável: ', 'Currículo: ', 'Cargo: ', 'Funções do Cargo: ', 'Data de Início: '];

  let arrayValue = [];
  // let arrayDosInputs = document.querySelectorAll('input');
  // for (let index = 0; index < arrayDosInputs.length; index++) {
  //   arrayNovo.push(arrayDosInputs[index].value);
  // }
  arrayValue.push(document.querySelector("#input-name").value);
  arrayValue.push(document.querySelector("#input-email").value);
  arrayValue.push(document.querySelector("#input-cpf").value);
  arrayValue.push(document.querySelector("#input-address").value);
  arrayValue.push(document.querySelector("#input-city").value);
  arrayValue.push(document.querySelector("#input-state").value);
  arrayValue.push(document.querySelector("input[name='input-radio']:checked").value);
  arrayValue.push(document.querySelector("#text-resume").value);
  arrayValue.push(document.querySelector("#input-role").value);
  arrayValue.push(document.querySelector("#role-description").value);
  arrayValue.push(document.querySelector("#input-date").value);
    
  let divForm = document.createElement('div');
  document.querySelector('main').appendChild(divForm).classList.add('formDataDiv');

  for (let index = 0; index < arrayKey.length; index += 1) {
    let createP = document.createElement('p');
    divForm.appendChild(createP);
    createP.innerText = arrayKey[index] + arrayValue[index];
  }
}
submitButton.addEventListener('click', saveData);

cleanButton.addEventListener('click', () => {
  document.querySelector('#form1').reset();
  document.querySelector('.formDataDiv').remove();
})
// * Referência para captar info dos radio buttons - https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button

const buttonFormHeader = document.getElementById('buttonHeader');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function activeHeader() {
  if (
    emailInput.value === 'tryber@teste.com'
    && passwordInput.value === '123456'
  ) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonFormHeader.addEventListener('click', activeHeader);

const checkSubmit = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');

function buttonEnable(event) {
  // https://www.w3schools.com/jsref/prop_checkbox_checked.asp
  // https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
  if (event.target.checked === true) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

checkSubmit.addEventListener('click', buttonEnable);

const textValue = document.getElementById('textarea');
const caracterTextArea = document.getElementById('counter');

function counterText() {
  caracterTextArea.innerText = 500 - textValue.value.length;
}

textValue.addEventListener('keyup', counterText);

const name = document.getElementById('input-name');
const surname = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByClassName('family');
const contents = document.getElementsByClassName('subject');
const evaluation = document.getElementsByClassName('evaluation');
const form = document.getElementById('evaluation-form');

function labelNameFunction() {
  const labelName = document.createElement('label');
  labelName.innerText = `Nome: ${name.value} ${surname.value}`;
  return labelName;
}

function labelEmailFunction() {
  const labelEmail = document.createElement('label');
  labelEmail.innerText = `Email: ${emailForm.value}`;
  return labelEmail;
}

function labelCasaFunction() {
  const labelCasa = document.createElement('label');
  labelCasa.innerText = `Casa: ${house.value}`;
  return labelCasa;
}

function labelFamilyFunction() {
  const labelFamily = document.createElement('label');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      labelFamily.innerText = `Família: ${family[index].value}`;
    }
  }
  return labelFamily;
}

function labelContentsFunction() {
  const labelContents = document.createElement('label');
  labelContents.innerText = 'Matérias:';
  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked === true) {
      labelContents.innerText += ` ${contents[index].value},`;
    }
  }
  return labelContents;
}

function labelEvaluationFunction() {
  const labelEvaluation = document.createElement('label');
  for (let index = 0; index < evaluation.length; index += 1) {
    if (evaluation[index].checked === true) {
      labelEvaluation.innerText = `Avaliação: ${evaluation[index].value}`;
    }
  }
  return labelEvaluation;
}

function labelTextValueFunction() {
  const labelTextValue = document.createElement('label');
  labelTextValue.innerText = `Observações: ${textValue.value}`;
  return labelTextValue;
}

function formLabel(event) {
  event.preventDefault();
  const labelFamily = labelFamilyFunction();
  const labelContents = labelContentsFunction();
  const labelEvaluation = labelEvaluationFunction();
  form.innerText = '';
  form.appendChild(labelNameFunction());
  form.appendChild(labelEmailFunction());
  form.appendChild(labelCasaFunction());
  form.appendChild(labelFamily);
  form.appendChild(labelContents);
  form.appendChild(labelEvaluation);
  form.appendChild(labelTextValueFunction());
}

buttonSubmit.addEventListener('click', formLabel);

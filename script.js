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

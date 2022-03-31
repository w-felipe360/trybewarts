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

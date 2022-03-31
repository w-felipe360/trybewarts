let buttonFormHeader = document.getElementById("buttonHeader");
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

buttonFormHeader.addEventListener('click', activeHeader);

function activeHeader(event){
    if(emailInput.value === "tryber@teste.com" && passwordInput.value === "123456"){
        window.alert("Olá, Tryber!");
    }else {
        window.alert("Email ou senha inválidos.");
    }
}
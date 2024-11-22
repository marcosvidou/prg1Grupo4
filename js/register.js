let formulario = document.querySelector(".formR");

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emailError = document.querySelector(".email");
let passwordError = document.querySelector(".password");

let mensajeEmail = "Por favor complete el campo.";
let mensajePassword = "Por favor complete el campo.";
emailError.style.color = "red";
passwordError.style.color = "red";

let esValido = false;
formulario.addEventListener('submit', function(event) {

    event.preventDefault();
    if (email.value == "") {
        emailError.innerText = mensajeEmail;
        esValido = true;
    } else {
        emailError.innerText = "";
    }

    if (password.value == "") {
        passwordError.innerText = mensajePassword;
        esValido = true;
    } else {
        passwordError.innerText = "";
    }

    if (esValido == false){
        this.submit();
    }
});

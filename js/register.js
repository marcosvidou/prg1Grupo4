let formulario = document.querySelector(".formR");

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emailError = document.querySelector(".email");
let passwordError = document.querySelector(".password");

let mensajeEmail = "Por favor complete el campo.";
let mensajePassword = "Por favor complete el campo.";
emailError.style.color = "red";
passwordError.style.color = "red";

let erroresBool1 = false;
let erroresBool2 = false;
formulario.addEventListener('submit', function(event) {

    event.preventDefault();
    if (email.value == "") {
        emailError.innerText = mensajeEmail;
        erroresBool1 = true;
    } else {
        emailError.innerText = "";
        erroresBool1 = false;
    }

    if (password.value == "") {
        passwordError.innerText = mensajePassword;
        erroresBool2 = true;
    } else {
        passwordError.innerText = "";
        erroresBool2 = false;
    }

    if (erroresBool1 == false && erroresBool2 == false){
        this.submit();
    }
});

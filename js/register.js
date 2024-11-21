let formulario = document.querySelector(".formRegistrarse");

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emailError = document.querySelector(".error-email");
let passwordError = document.querySelector(".error-password");

formulario.addEventListener("submit", function (event) {
    let esValido = true;

    if (email.value === "") {
        emailError.textContent = "Por favor complete el campo.";
        esValido = false;
    } else {
        emailError.textContent = "";
    }

    if (password.value === "") {
        passwordError.textContent = "Por favor complete el campo.";
        esValido = false;
    } else {
        passwordError.textContent = "";
    }

    if (!esValido) {
        event.preventDefault();
    }
});

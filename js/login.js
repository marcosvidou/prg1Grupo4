let formulario = document.querySelector(".formLogin");

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let erroresBool1 = false;
let erroresBool2 = false;

formulario.addEventListener('submit', function(event){
	event.preventDefault();  //Detenemos el comportamiento default del formulario que es enviarse.
	if(email.value == ''){
        alert("Por favor complete el campo email");
        erroresBool1 = true;
    } else {
        erroresBool1 = false;
    }

    if(password.value == ''){
        alert("Por favor complete el campo contraseña");
        erroresBool2 = true;
    } else {
        erroresBool2 = false;
    }

    if(erroresBool1 == false && erroresBool2 == false){
        this.submit();
    }
})


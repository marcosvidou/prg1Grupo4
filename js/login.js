let formulario = document.querySelector(".formLogin");

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let erroresBool = false;

formulario.addEventListener('submit', function(event){
	event.preventDefault();  //Detenemos el comportamiento default del formulario que es enviarse.
	if(email.value == ''){
        alert("Por favor complete el campo email");
        erroresBool = true;
    } else {
        erroresBool = false;
    }

    if(password.value == ''){
        alert("Por favor complete el campo contraseña");
        erroresBool = true;
    } else {
        erroresBool = false;
    }

    console.log(erroresBool)

    if(erroresBool == false){
        this.submit();
    }
})


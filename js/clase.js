document.addEventListener("DOMContentLoaded", function () {

    var nombre = "karol";
    var edad = 34;
    var esMayorEdad = false;
    //propiedad?
    console.log(nombre.length);

    //metodo

    console.log(nombre.includes("m"));

    var Persona = {
        nombre: "Karol",
        edad: 34,
        esMayorEdad: true
    }

    console.log(Persona.edad);
    var resultado = suma(1, 5);
    console.log("Resultado " + resultado);
    resta(6, 1);
    saludo();


    function suma(numero, numero2) {
        return numero + numero2;
    }


    function resta(numero, numero2) {
        console.log(numero - numero2);
    }

    function saludo() {
        var nombre = "Tatiana";
        console.log("Hola!" + nombre);
    }

    console.log("Hola!" + nombre);

    if (edad > 17) {
        console.log("es mayor de edad");
    } else {
        console.log("es menor de edad");
    }
    edad = 14;
    var resultado = edad > 17 ? "es mayor de edad" : "es menor de edad";



    console.log(resultado);

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    let array = [1, 243, 5, 67, 8, 3];

    for (let x in array) {
        console.log(array[x]);
    }

    edad = 40;
    do {
        edad += 1;
        console.log(edad);
    } while (edad < 50);


    edad = 40;
    while (edad < 50) {
        edad += 1;
        console.log(edad);
    }

    var titulo = document.getElementById("titulo");
    titulo.innerText = "nuevo titulo0";

    titulo.style = "display:none;";
    console.log(titulo.style);

    var miBoton = document.getElementById("btnEnviar");

    miBoton.addEventListener("click", function () {
        var name = document.getElementById("name");
        if(name.value == ""){
            alert("Error faltan datos")
        }
    })
    function logintudSeguraClave(clave) {
        if (clave.length < 8) {
            return "La contraseña es demasiado corta";
        } else {
            return "La contraseña tiene una longitud adecuada";
        }
    }
    console.log(logintudSeguraClave("Karol"));
    console.log(logintudSeguraClave("Karol2024"));

    function rangoValido(edad) {
        if (edad >= 18 && edad <= 65) {
            return "La edad está en el rango permitido";
        } else {
            return "La edad no está en el rango permitido";
        }
    }
    console.log(rangoValido(5));
    console.log(rangoValido(55));

    /*
    var nuevoElemento = document.createElement("h2");
    nuevoElemento.innerText = "Hola este es un nuevo titulo";
    document.getElementById("imagenPrincipal").appendChild(nuevoElemento);

    var miBoton = document.getElementById("boton_envio");

    miBoton.addEventListener("mouseover", function () {
        miBoton.value = "Enviando..";
    })

    miBoton.addEventListener("mouseout", function () {
        miBoton.value = "Enviar";
    })
    */

    let emailInput = document.getElementById("email");

    emailInput.addEventListener("change", function() {
        validateEmail(emailInput.value);
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            console.log("Formato de correo electrónico inválido");
        } else {
            console.log("Formato de correo electrónico válido");
        }
    }
});


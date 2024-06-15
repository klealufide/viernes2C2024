// EJERCICIOS #1

const edadLegal = 18;
const notaAprobatoria = 70;
let contador = 0;

function esMayorDeEdad(edad) {
    if (edad >= edadLegal) {
        return "La persona es mayor de edad para beber.";
    } else {
        return "La persona no es mayor de edad para beber.";
    }
}

console.log(esMayorDeEdad(20)); 
console.log(esMayorDeEdad(17)); 

function diaDeLaSemana(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número inválido. Debe ser del 1 al 7.";
    }
}


console.log(diaDeLaSemana(1)); 
console.log(diaDeLaSemana(5)); 
console.log(diaDeLaSemana(8)); 


function aproboEstudiante(nota) {
    if (nota >= notaAprobatoria) {
        return "El estudiante aprobó.";
    } else {
        return "El estudiante no aprobó.";
    }
}

console.log(aproboEstudiante(75)); 
console.log(aproboEstudiante(50));

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return "El número mayor es "+num1+" y el número menor es "+num1+".";
    } else if (num1 < num2) {
        return "El número mayor es "+num2+" y el número menor es "+num1+".";
    } else {
        return "Ambos números son iguales.";
    }
}


console.log(compararNumeros(10, 5)); 
console.log(compararNumeros(3, 8)); 
console.log(compararNumeros(7, 7)); 


function cuentaRegresiva() {
    let numero = 10;
    while (numero > 0) {
        console.log(numero);
        numero--;
    }
}

cuentaRegresiva();

function tablaDeMultiplicarDel7() {
    let numero = 7;
    for (let i = 1; i <= 10; i++) {
        console.log(numero+" x " +i+" = "+numero*i);
    }
}

tablaDeMultiplicarDel7();


//document.addEventListener("DOMContentLoaded", function() {
    let imagen = document.getElementById("imagen");
    let imagenOriginal = "./images/servicio3.jpg";
    let imagenNueva = "./images/servicio2.jpg";

    imagen.addEventListener("mouseover", function() {
        imagen.src = imagenNueva;
    });

    imagen.addEventListener("mouseout", function() {
        imagen.src = imagenOriginal;
    });
//});

document.getElementById("btnEnviar").addEventListener("click", function() {
    contador++;
    document.getElementById("contador").innerText = contador;
});
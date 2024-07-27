$(document).ready(function(){
    $('#nombreError').hide();
    $('#emailError').hide();
    $('#fechaError').hide();
});

function showInfo(id) {
    var element = $("#" + id);
    if (element.length) {
        element.css("display", "block");
    }
}

function validarFormulario() {
    var isValid = true;
    var nombre = $('#nombre').val();
    var fecha = $('#fecha').val();
    var email = $('#email').val();

    if (nombre == '') {
        $('#nombreError').show();
        isValid = false;
    } else {
        $('#nombreError').hide();
    }

    if (email == '') {
        $('#emailError').show();
        isValid = false;
    } else {
        $('#emailError').hide();
    }

    if (fecha === '') {
        $('#fechaError').show();
        isValid = false;
    } else {
        $('#fechaError').hide();
    }


    if (isValid) {
        alert('Formulario enviado correctamente.');
    }
}

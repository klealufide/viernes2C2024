$(document).ready(function(){

    $("#enviar_formulario").click(function(){
        const url = "procesar_contacto.php";
        let data = {
            nombre : $("#nombre").val(),
            email : $("#email").val(),
            mensaje : $("#mensaje").val(),
            accion: 'add'
        };

        $.post(url, data, function(result){
            if(result == "99"){
                alert("error al guardar la informacion")
            } 
            if(result == "00") {
                alert("informacion guardada correctamente")
            }
        })
    })

});

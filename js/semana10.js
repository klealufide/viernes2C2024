$(document).ready(function(){
    $('#nombre').val("Tatiana");
    $("footer").addClass("footer2");
    $("footer").removeClass("footer2");

    $("img").attr("src","../images/servicio2.jpg");


    $('#sendForm').click(function(){
        alert("Se ha enviado el formulario");
        $("img").attr("src","../images/image1.jpg");
        var elemento = $('#nombre').val();
        console.log(elemento);
    });

    $('#email').keypress(function(event){
        if(event.key == 'x'){
            alert("Letra prohibida");
        }
    });

    $('#email').mouseenter(function(){
        console.log("Mouse entro")
    });


    $('#email').change(function(){
        console.log("Focus emmail")
    });
});


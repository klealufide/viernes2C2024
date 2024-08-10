$(document).ready(function(){
    $("#mostrar").click(function(){
        $("#cuadrado").fadeIn(1000);
    });
    $("#ocultar").click(function(){
        $("#cuadrado").fadeOut(1000);
    });
    $("#crecer").click(function(){
        $("#cuadrado").animate({
            width: 400,
            heigth: 400,
            opacity: 0.5,
        }, 1000);
    });
    $("#parrafo").prepend("<h2>Este es un titulo Inicio</h2>");
    $("#parrafo").append("<h3>Este es un titulo Final</h3>");

    $("#aumentar").click(function(){
        console.log("test");
        $("img").addClass("aumentar");
    });

    $("#igual").click(function(){
        $("img").removeClass("aumentar");
    });

    $("#borde").click(function(){
        $("#imagen").toggleClass("aumentar");
    });

    $("h2").css("color","blue");
})
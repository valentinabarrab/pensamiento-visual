$(document).ready(function(){
    var foto= $(".margen");


    foto.mouseenter(function (){
        $(this).fadeTo("slow",0);
        $(this).fadeTo("slow",1);
    
    });
    
    var texto= $(".textoayudantia");

    texto.click(function(){
        $(this).append("HOLA");
        $(this).css("color","magenta");
    
    });

});

//manera corta de la funcion ready(), para esperar a que los elementos del DOM carguen.
$(function(){

    $('li[id!="one"]').hide().delay(500).fadeIn(1500);
    //console.log()
});
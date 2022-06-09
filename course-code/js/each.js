$(function(){  
   
   $('li').each(function(){

        var ids = this.id;
        $(this).append( `<span class="order"> ${ids} </span>` );
   });

    //var ids = $('li').attr('id');
    //$('li').append(`<span class="order"> ${ids} </span>`);

});


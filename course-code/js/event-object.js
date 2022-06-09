$(function(){  
   
    $('li').on('click',function( e ){
        
        $('li span').remove();
        var date = new Date();
        //date.setTime(e.timeStamp);
        var clicked = date.toDateString();

        $(this).append(`<span class="date"> This element was clicked ${clicked} ${e.type} </span>`);

    });
    
});
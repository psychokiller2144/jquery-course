$(function() {
        
    var listItem, itemStatus, eventType;

    jQuery('ul').on(
        'click mouseover', //eventos a los que voy a reaccionar (1)
        ':not(#four)', // filtro (2)
         {status : 'important'}, //objecto js, para informacion adicional
         function(event){

            listItem = `Item: ${event.target.textContent} <br>`;
            itemStatus = `Status: ${event.data.status} <br>`;
            eventType = `Event: ${event.type}`;

            jQuery('#notes').html(listItem + itemStatus + eventType);

         }
    );
  
      
});   


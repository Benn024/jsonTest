$(document).ready(function(){
    
    $.getJSON("hamta.php",function(data){
        
        console.log(data);
        $.each(data,function(key, value){          
            $('<p/>' + key + '').text(value).appendTo('body');          
        });
        
        
    });      
});



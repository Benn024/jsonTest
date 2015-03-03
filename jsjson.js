$(document).ready(function(){
    console.log("ok");
    $.getJSON("hamta.php",function(data){
        
        console.log(data.muffins);
        $.each(data.muffins,function(key, muffin){          
            $('<p/>' + muffin + '').text(muffin.smak).appendTo('body');          
        });
        
        
    });      
});



$(document).ready(function() {
    console.log("JS fungerar");
    
    var urlen = "newjson.json";
    $.getJSON(urlen, function(data) {
        
        $('<ul/>', {'class': 'lista'}).text('Min Lista:').appendTo('#div1');
            $.each(data.name, function(key, val){
                $('<li>' + key + '').text(val).appendTo('#div1');
            });
            
    });
    
    

});


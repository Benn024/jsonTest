$(document).ready(function(){
    console.log("JS fungerar");
    
//    $('<ul/>', {'class': 'lista'}).html('<li>Min Lista:<li/>').appendTo('.lista');
    
//    $.get('newjson.json', function(newjson){
//        console.log(newjson);
//    });
var urlen = "newjson.json";
    $.getJSON(urlen, function(newjson){
       console.log(newjson); 
    });
});


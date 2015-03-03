$(document).ready(function() {
    console.log("JS fungerar");

    var urlen = "newjson.json";
//    $.getJSON(urlen, function(data) {
//        
//
//        $('<ul/>', {'class': 'lista'}).text('Min Lista:').appendTo('#div1');
//        $.each(data.name, function(key, val) {
//            $('<li>' + key + '').text(val).appendTo('#div1');
//        });
//
//    });



    $('.grupp').change(function() {
        $.getJSON(urlen, function(data) {
            $('.undergrupp option').remove();
            var gruppvarde = parseInt($('.grupp').val());
            $.each(data.djur[gruppvarde], function(key, ras) {
                $('.undergrupp').append('<option value="">' + ras + '</option>');
            });
        });
    });

});


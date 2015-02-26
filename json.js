$(document).ready(function() {
    console.log("JS fungerar");

    var urlen = "newjson.json";
    $.getJSON(urlen, function(data) {

        $('<ul/>', {'class': 'lista'}).text('Min Lista:').appendTo('#div1');
        $.each(data.name, function(key, val) {
            $('<li>' + key + '').text(val).appendTo('#div1');
        });

    });



    $('.grupp').change(function() {
//           console.log("change triggad");
        $.getJSON(urlen, function(data) {
            $('.undergrupp option').remove();
            console.log($('.grupp').val());
            var gruppvarde = parseInt($('.grupp').val());
            switch (gruppvarde) {
                case 0:
                    $('.undergrupp').append('<option value="">Ras/art</option>');
                    break;
                case 1:
                    $('.undergrupp').append('<option value="">Välj hundras</option>');
                    $.each(data.djur[gruppvarde], function(data) {
                        $('.undergrupp').append('<option value="">'+djur[0]+'</option>');
                    });
//                                $('.undergrupp').append('<option value="">Schäfer</option>');
//                                $('.undergrupp').append('<option value="">Rottweiler</option>');
//                                $('.undergrupp').append('<option value="">Dalmatin</option>');
//                                $('.undergrupp').append('<option value="">Labrador</option>');
//                                $('.undergrupp').append('<option value="">Husky</option>');
                    break;
                case 2:
                    $('.undergrupp').append('<option value="">Välj kattras</option>');
                    $('.undergrupp').append('<option value="">svensk katt</option>');
                    $('.undergrupp').append('<option value="">norsk katt</option>');
                    $('.undergrupp').append('<option value="">tysk katt</option>');
                    $('.undergrupp').append('<option value="">finsk katt</option>');
                    $('.undergrupp').append('<option value="">holländsk katt</option>');
                    break;
                case 3:
                    $('.undergrupp').append('<option value="">Välj fågelart</option>');
                    $('.undergrupp').append('<option value="">Papegoja</option>');
                    $('.undergrupp').append('<option value="">Undulat</option>');
                    $('.undergrupp').append('<option value="">Skata</option>');
                    $('.undergrupp').append('<option value="">Örn</option>');
                    $('.undergrupp').append('<option value="">Hök</option>');
                    break;
                case 4:
                    $('.undergrupp').append('<option value="">Välj Dinosaurie</option>');
                    $('.undergrupp').append('<option value="">Tyrannosaurus Rex</option>');
                    $('.undergrupp').append('<option value="">Spinosaurus</option>');
                    $('.undergrupp').append('<option value="">Brachiosaurus</option>');
                    $('.undergrupp').append('<option value="">Stegosaurus</option>');
                    $('.undergrupp').append('<option value="">Velociraptor</option>');
            }
            ;
        });
    });

});


'use strict';


$(document).ready(function () {
    $(".header").on("click", "a", function (event) {


        var id = $(this).attr('href'),
            top = $(id).offset().top - 300;
        $('body,html').animate({ scrollTop: top }, 1500);

    });

});


$(document).ready(function () {
    $("#leadb").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top - 240;
        $('body,html').animate({ scrollTop: top }, 1500);

    });

});

$(document).ready(function () {
    $(".services").on("click", "a", function (event) {


        var id = $(this).attr('href'),
            top = $(id).offset().top - 130;
        $('body,html').animate({ scrollTop: top }, 1500);

    });

});




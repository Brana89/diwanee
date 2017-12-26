$(document).ready(function() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });
});

$(document).ready(function() {
    $('.toggle').click(function() {
        $('.responsive-menu').toggleClass('expand');
    });
});

$(document).ready(function() {
    $(window).bind('scroll', function() {
        var distance = 100;
        if ($(window).scrollTop() > distance) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
});
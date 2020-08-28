$(function () {
    // Burger menu

    let navToggle = $('#navToggle');
    let nav = $('#nav');


    navToggle.on('click', function (event) {
        event.preventDefault();

        $("body").toggleClass('show-nav');
        $(this).toggleClass('active');
        nav.toggleClass('show');

    });

    $(window).on("resize", function () {
        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
    });

    //Scroll up

    $('.scroll').click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })

    // при прокрутке окна (window)
    $(window).scroll(function () {
        // если прокрутили на 600px
        if ($(this).scrollTop() > 600) {
            // то сделать кнопку scroll видимой
            $('.scroll').fadeIn();
        }
        // иначе скрыть кнопку scroll
        else {
            $('.scroll').fadeOut();
        }
    });

})


$(function () {

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


    let filter = $("[data-filter]");

    filter.on("click", function (e) {
        e.preventDefault();


        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {

            $("[data-cat]").each(function () {


                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }

                console.log(workCat);
            })
        }
    });

    // View All

    function worksHide() {

        let works = document.querySelectorAll('.works-item');

        if (works.length > 6) {
            for (let i = works.length - 1; i >= 6; i--) {
                works[i].classList.add('hideTwo');
            }
        }
    }

    worksHide();

    function show() {
        let works = document.querySelectorAll('.works-item');
        for (let i = works.length - 1; i >= 6; i--) {
            works[i].classList.toggle('show');
        }
    }

    document.querySelector('.works-view').onclick = show;

    /* Modal
  ======================================*/

    $('[data-modal]').on("click", function (event) {
        event.preventDefault();

        let modal = $(this).data('modal');
        console.log(modal);

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        //Анимация модального окна
        setTimeout(function () {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        }, 100);


    });

    $(' [data-modal-close]').on('click', function (event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');

        modalClose(modal);


    });

    $('.modal').on('click', function () {
        let modal = $(this);

        modalClose(modal);
    });

    $('.modal__content').on('click', function (event) {
        event.stopPropagation(); //При клике на этот элемент не будет срабатывать событые клика по его родителю
    })

    function modalClose(modal) {
        modal.find('.modal__content').css({
            transform: 'scale(0.1)',
            opacity: '0'
        });

        setTimeout(function () {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }


    // Slick slider
    //====================================

    let reviewsSlider = $("#teamSlider");

    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
    });



})
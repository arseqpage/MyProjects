$(function () {


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
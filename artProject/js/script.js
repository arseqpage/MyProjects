jQuery(function($) {
  "use strict";

  if ($(".slider__items").length) {
    $(".slider__items").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".left"),
      nextArrow: $(".right")
    });
  }
});

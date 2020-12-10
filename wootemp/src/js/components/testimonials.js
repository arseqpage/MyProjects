import Swiper, {
  Navigation,
  EffectFade
} from "swiper";

Swiper.use([Navigation, EffectFade]);

var testimSlider = new Swiper('.testimonials-slider__block', {

  slidesPerView: 1,

  effect: 'fade',

  navigation: {
    nextEl: '.testimonals__arrow--next',
    prevEl: '.testimonals__arrow--prev',
  },


});

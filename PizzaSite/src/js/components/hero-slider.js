import Swiper, {
  Navigation,
  Pagination,
  Autoplay
} from "swiper";

import vars from "../_vars";

Swiper.use([Navigation, Pagination, Autoplay]);

const heroSlider = new Swiper(vars.$heroSlider, {
  loop: true,
  slidesPerView: 2,
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".hero-slider__pag",
    type: "bullets",
    clickable: true,
  },


});

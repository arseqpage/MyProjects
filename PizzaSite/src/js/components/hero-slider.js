import Swiper, { Navigation, Pagination } from "swiper";
import vars from "../_vars";

Swiper.use([Navigation, Pagination]);

const heroSlider = new Swiper(vars.$heroSlider, {
  loop: true,
  slidesPerView: 1,
});

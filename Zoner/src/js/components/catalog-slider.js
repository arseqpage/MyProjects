import Swiper, { Navigation, Pagination } from "swiper";
import vars from "../_vars";

Swiper.use([Navigation, Pagination]);
const bannerSlider = new Swiper(vars.$catalogSlider, {
  loop: true,
  slidesPerView: 1,
});

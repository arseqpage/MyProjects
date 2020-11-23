import Swiper, { Navigation, Pagination } from "swiper";
import vars from "../_vars";

Swiper.use([Navigation, Pagination]);
const bannerSlider = new Swiper(vars.$catalogSlider, {
  loop: true,
  slidesPerView: 1,
  containerModifierClass: "hero-catalog__slider",
  navigation: {
    nextEl: ".hero-next-btn",
    prevEl: ".hero-prev-btn",
  },
  pagination: {
    el: ".hero-pag",
    type: "bullets",
    clickable: true,
  },
});

const relatedSlider = new Swiper(vars.$cardRelatedSlider, {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".related-pag",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    786: {
      slidesPerView: 4,
    },
  },
});

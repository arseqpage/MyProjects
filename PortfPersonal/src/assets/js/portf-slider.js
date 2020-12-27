import Swiper, {
  Navigation,
  Pagination
} from 'swiper';



Swiper.use([Navigation, Pagination]);

var mySlider = new Swiper('.portf-item__slider', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})
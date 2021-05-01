import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  EffectCoverflow
} from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade,
  Autoplay, EffectCoverflow
]);




var mySwiper = new Swiper('.hero-slider__container', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.pag-nav',
  },
});

var aboutSlider = new Swiper('.about-swiper-slider', {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "1",
  loop: true,
  allowSlidePrev: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 400,
    depth: 450,

    slideShadows: true,

  },
  navigation: {
    nextEl: '.about-next',
  },
  pagination: {
    el: '.swiper-pag',

  },
  breakpoints: {
    576: {
      allowSlidePrev: true,
      coverflowEffect: {
        rotate: 20,
        stretch: 450,
        depth: 500,
        modifier: 1,
        slideShadows: true,

      },
    }
  }

});

const tabName = document.querySelectorAll('.features__tab-name'),
  tabText = document.querySelectorAll('.features__tab-text'),
  tabItem = document.querySelectorAll('.features__tab');

tabName.forEach((tab, i) => {
  tab.addEventListener('click', () => {

    tabText[i].classList.toggle('show');
    tabItem[i].classList.toggle('active');
    tabName[i].classList.toggle('active');
  });
});

const sr = ScrollReveal({
  distance: '5px',
  duration: 1500,
  reset: true
});

sr.reveal(`.header__content`, {
  origin: 'top',
  interval: 200
});

sr.reveal(`.about__text, .system__grid, .quotes__text, .news__img`, {
  origin: 'left',
  interval: 200
});

sr.reveal(`.about__slider, .features__text, .quotes__item, .news__text`, {
  origin: 'right',
  interval: 200
});

sr.reveal(`.system__subtitle, .system__title, .footer__logo, .footer__nav, .footer__nav-social`, {
  origin: 'bottom',
  interval: 200
});
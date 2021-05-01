import mixitup from 'mixitup';

var containerMenu = document.querySelector('.menu__items');

var mixer = mixitup(containerMenu, {
  selectors: {
    target: '.menu__item'
  },
  "animation": {
    "duration": 250,
    "nudge": false,
    "reverseOut": false,
    "effects": "fade scale(0.01)"
  }
});

const nav = document.querySelector('nav'),
  burger = document.querySelector('.burger'),
  navClose = nav.querySelector('.nav__close'),
  navLink = nav.querySelectorAll('.nav__link');


burger.addEventListener('click', () => {
  nav.classList.add('show');
  document.body.classList.add('no-scroll');
});

navClose.addEventListener('click', hideNav);
navLink.forEach(link => {
  link.addEventListener('click', hideNav)
});

function hideNav() {
  nav.classList.remove('show');
  document.body.classList.remove('no-scroll');
}
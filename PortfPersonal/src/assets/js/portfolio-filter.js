import mixitup from 'mixitup';

let portfolioItems = document.querySelector('.portfolio__items'),
  portfolioBtns = document.querySelectorAll('.portfolio__btn'),
  current;



portfolioBtns.forEach(item => {

  if (item.classList.contains('portfolio__btn--current')) {
    current = item;
  }

  item.addEventListener('click', () => {
    if (item.classList != 'portfolio__btn--current') {
      current.classList.remove('portfolio__btn--current')
      current = item;
      current.classList.add('portfolio__btn--current');
    }
  });
});


if (portfolioItems) {
  var mixer = mixitup(portfolioItems, {
    selectors: {
      target: '.portfolio__item'
    },
    animation: {
      duration: 300
    }
  });
};
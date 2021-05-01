const burger = document.querySelector('.burger'),
  navMenu = document.querySelector('.nav'),
  navClose = document.querySelector('.close');

burger.addEventListener('click', () => {
  navMenu.classList.add('show');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

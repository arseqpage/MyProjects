let header = document.querySelector('.header'),
  hamburgerMenu = header.querySelector('.hamburger-menu');

window.addEventListener('scroll', function () {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition)
});

hamburgerMenu.addEventListener('click', () => {
  header.classList.toggle('menu-open')
});
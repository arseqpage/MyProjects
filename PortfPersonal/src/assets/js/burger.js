let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let body = document.querySelector('body');

burger.addEventListener('click', (e) => {
  e.preventDefault();

  nav.classList.toggle('show');
  body.classList.toggle('no-scroll')
});

// vars.$navClose.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (vars.$nav.classList.contains('show')) {
//     vars.$nav.classList.remove('show');
//   }
// });
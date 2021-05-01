const sr = ScrollReveal({
  distance: '10px',
  duration: 1000,
  reset: false
});





sr.reveal(`.description__title, .description__item`, {
  origin: 'top',
  interval: 50,
  reset: true
});

sr.reveal(`.menu__item`, {
  origin: 'top',
  interval: 80
});
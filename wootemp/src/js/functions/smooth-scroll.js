const anchors = document.querySelectorAll('.nav a');

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - document.querySelector('.nav').clientHeight,
  });
}

anchors.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    let id = e.currentTarget.getAttribute('href');

    scrollTo(document.querySelector(id))
  });
});

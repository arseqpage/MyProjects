let lang = document.querySelector('.lang'),
  langSubmenu = lang.querySelector('.lang__submenu'),
  langItem = langSubmenu.querySelectorAll('[data-lang]'),
  langCurrent = lang.querySelector('.lang__current'),
  langToggle,
  burger = document.querySelector('.burger'),
  navHeader = document.querySelector('.nav-burger');



lang.addEventListener('click', () => {
  langSubmenu.classList.toggle('active');

});

langSubmenu.addEventListener('mouseleave', () => {
  langSubmenu.classList.remove('active');

});

langItem.forEach(item => {

  checkCurr(item, langCurrent);


  item.addEventListener('click', () => {
    langToggle.parentElement.classList.remove('hide');
    langCurrent.innerHTML = item.dataset.lang;

    checkCurr(item, langCurrent);
  });

});

function checkCurr(item, current) {
  if (item.dataset.lang == current.innerHTML) {
    item.parentElement.classList.add('hide');
    langToggle = item;
  }
}


burger.addEventListener('click', (e) => {
  e.preventDefault();

  navHeader.classList.toggle('show');
  burger.classList.toggle('burger--active');
  document.body.classList.toggle('no-scroll');
});

const navLink = document.querySelectorAll('.nav-burger__link');

function linkAction() {
  const navMenu = document.getElementById('nav-burger');
  navMenu.classList.remove('show');
  burger.classList.remove('burger--active');
  document.body.classList.remove('no-scroll');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Scroll */
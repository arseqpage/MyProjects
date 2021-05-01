const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// Burger click and hide nav
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Active link */

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;
  // console.log(scrollY);

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;

    const sectionTop = current.offsetTop - 50;
    console.log(scrollY, sectionTop);
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/* Change BG header*/

function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');

  if (this.scrollY >= 560) {
    scrollTop.classList.add('scroll-show');
  } else {
    scrollTop.classList.remove('scroll-show');
  }
}

window.addEventListener('scroll', scrollTop);

// Dark theme

// Получаем кнопку и классы
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Получаем тему ключ с локального хранилища
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Функции, добавляющие значение к ключам в лок.хранилище
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// Если есть ключ selectedItem...
if (selectedTheme) {
  // ...то body  добавляется или удаляется класс в зависимости от того, какое значение у ключа selectedTheme в локальном хранилище

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Слушае кнопку
themeButton.addEventListener('click', () => {
  // Тоглим класс с темой
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Сохраняем в лок.хранилище ключ со значением, возвращенное из функции getCurrentTheme()
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// Scroll

const sr = ScrollReveal({

  distance: '30px',
  duration: 1500,
  reset: true,

});

sr.reveal(`.home__data`, {
  origin: 'right',
  interval: 50
})
sr.reveal(`.home__img`, {
  origin: 'left',
  interval: 100
})

sr.reveal(`.about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
  origin: 'top',
  interval: 150
});
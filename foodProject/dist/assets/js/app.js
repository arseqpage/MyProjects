/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const showMenu = (toggleId, navId) => {\r\n  const toggle = document.getElementById(toggleId),\r\n    nav = document.getElementById(navId);\r\n\r\n  if (toggle && nav) {\r\n    toggle.addEventListener('click', () => {\r\n      nav.classList.toggle('show-menu');\r\n    });\r\n  }\r\n};\r\n\r\nshowMenu('nav-toggle', 'nav-menu');\r\n\r\n// Burger click and hide nav\r\nconst navLink = document.querySelectorAll('.nav__link');\r\n\r\nfunction linkAction() {\r\n  const navMenu = document.getElementById('nav-menu');\r\n  navMenu.classList.remove('show-menu');\r\n}\r\nnavLink.forEach(n => n.addEventListener('click', linkAction));\r\n\r\n/* Active link */\r\n\r\nconst sections = document.querySelectorAll('section[id]');\r\n\r\nfunction scrollActive() {\r\n  const scrollY = window.pageYOffset;\r\n  // console.log(scrollY);\r\n\r\n  sections.forEach(current => {\r\n    const sectionHeight = current.offsetHeight;\r\n\r\n    const sectionTop = current.offsetTop - 50;\r\n    console.log(scrollY, sectionTop);\r\n    sectionId = current.getAttribute('id');\r\n\r\n    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {\r\n      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');\r\n    } else {\r\n      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');\r\n    }\r\n  });\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollActive);\r\n\r\n/* Change BG header*/\r\n\r\nfunction scrollHeader() {\r\n  const nav = document.getElementById('header');\r\n\r\n  if (this.scrollY >= 200) {\r\n    nav.classList.add('scroll-header');\r\n  } else {\r\n    nav.classList.remove('scroll-header');\r\n  }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollHeader);\r\n\r\nfunction scrollTop() {\r\n  const scrollTop = document.getElementById('scroll-top');\r\n\r\n  if (this.scrollY >= 560) {\r\n    scrollTop.classList.add('scroll-show');\r\n  } else {\r\n    scrollTop.classList.remove('scroll-show');\r\n  }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollTop);\r\n\r\n// Dark theme\r\n\r\n// Получаем кнопку и классы\r\nconst themeButton = document.getElementById('theme-button');\r\nconst darkTheme = 'dark-theme';\r\nconst iconTheme = 'bx-sun';\r\n\r\n// Получаем тему ключ с локального хранилища\r\nconst selectedTheme = localStorage.getItem('selected-theme');\r\nconst selectedIcon = localStorage.getItem('selected-icon');\r\n\r\n// Функции, добавляющие значение к ключам в лок.хранилище\r\nconst getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';\r\nconst getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';\r\n\r\n// Если есть ключ selectedItem...\r\nif (selectedTheme) {\r\n  // ...то body  добавляется или удаляется класс в зависимости от того, какое значение у ключа selectedTheme в локальном хранилище\r\n\r\n  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)\r\n  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);\r\n}\r\n\r\n// Слушае кнопку\r\nthemeButton.addEventListener('click', () => {\r\n  // Тоглим класс с темой\r\n  document.body.classList.toggle(darkTheme);\r\n  themeButton.classList.toggle(iconTheme);\r\n\r\n  // Сохраняем в лок.хранилище ключ со значением, возвращенное из функции getCurrentTheme()\r\n  localStorage.setItem('selected-theme', getCurrentTheme());\r\n  localStorage.setItem('selected-icon', getCurrentIcon());\r\n});\r\n\r\n// Scroll\r\n\r\nconst sr = ScrollReveal({\r\n\r\n  distance: '30px',\r\n  duration: 1500,\r\n  reset: true,\r\n\r\n});\r\n\r\nsr.reveal(`.home__data`, {\r\n  origin: 'right',\r\n  interval: 50\r\n})\r\nsr.reveal(`.home__img`, {\r\n  origin: 'left',\r\n  interval: 100\r\n})\r\n\r\nsr.reveal(`.about__data, .about__img,\r\n            .services__content, .menu__content,\r\n            .app__data, .app__img,\r\n            .contact__data, .contact__button,\r\n            .footer__content`, {\r\n  origin: 'top',\r\n  interval: 150\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// console.log('file 2');\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\DiskD\\Lessons\\MyProjects\\foodProject\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\DiskD\\Lessons\\MyProjects\\foodProject\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });
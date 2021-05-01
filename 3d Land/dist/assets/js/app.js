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

eval("const navMenu = document.getElementById('nav-menu'),\r\n  toggleMenu = document.getElementById('nav-toggle'),\r\n  closeMenu = document.getElementById('nav-close');\r\n\r\ntoggleMenu.addEventListener('click', () => {\r\n  navMenu.classList.toggle('show');\r\n});\r\ncloseMenu.addEventListener('click', () => {\r\n  navMenu.classList.remove('show');\r\n});\r\n\r\ndocument.addEventListener('mousemove', move);\r\n\r\nfunction move(e) {\r\n  this.querySelectorAll('.move').forEach(layer => {\r\n    const speed = layer.getAttribute('data-speed');\r\n\r\n    const x = (window.innerWidth - e.pageX * speed) / 120;\r\n\r\n    const y = (window.innerWidth - e.pageY * speed) / 120;\r\n\r\n    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;\r\n\r\n\r\n  });\r\n}\r\n\r\ngsap.from('.nav__logo, .nav__toggle', {\r\n  opacity: 0,\r\n  duration: 1,\r\n  delay: 2,\r\n  y: 10\r\n})\r\ngsap.from('.nav__item', {\r\n  opacity: 0,\r\n  duration: 1,\r\n  delay: 2.1,\r\n  y: 30,\r\n  stagger: 0.2\r\n})\r\n\r\n// Home\r\ngsap.from('.home__title', {\r\n  opacity: 0,\r\n  duration: 1,\r\n  delay: 1.6,\r\n  y: 30,\r\n\r\n})\r\ngsap.from('.home__description', {\r\n  opacity: 0,\r\n  duration: 1,\r\n  delay: 1.8,\r\n  y: 30,\r\n});\r\n\r\ngsap.from('.home__button', {\r\n  opacity: 0,\r\n  duration: 1,\r\n  delay: 2.1,\r\n  y: 30,\r\n});\r\ngsap.from('.home__img', {\r\n  opacity: 0,\r\n  duration: 1,\r\n  delay: 1.3,\r\n  y: 30,\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

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

eval("__webpack_require__(/*! C:\\DiskD\\Lessons\\MyProjects\\3d Land\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\DiskD\\Lessons\\MyProjects\\3d Land\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });
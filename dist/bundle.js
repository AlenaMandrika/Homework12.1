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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_script_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_script_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts_script_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_style_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_style_scss__);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

var carousels = document.querySelectorAll('.carousel')

carousels.forEach((elem) => {
  console.log(1111,elem)



  let test = function(){
    console.log('this',this)
    var slider = this.childNodes[1].childNodes[5]
    console.log(slider)

    // slider.classList.add('add')
    // console.log(slider.children[0].style.backgroundColor = 'grey')


    var pagination = elem.querySelector('.carousel-pagination'); //ul з точками
    var bullets = [].slice.call(elem.querySelectorAll('.carousel-bullet')); //масив точок
    var totalItems = slider.querySelectorAll('.carousel-item').length; //довжина елементів в ul з картинками
    var percent = (100 / totalItems);
    var currentIndex = 0;
    function next(){
      slideTo(currentIndex + 1);
    }

    function prev(){
      slideTo(currentIndex - 1);
    }

    function slideTo(index){
      if (index < 0) {
        index = totalItems - 1
      } else {
        if (index >= totalItems) {
          index = 0
        } else {
          index
        }
      }

      slider.style.transform = 'translate(-' + (index * percent) + '%, 0)';
      bullets[currentIndex].classList.remove('active-bullet');
      bullets[index].classList.add('active-bullet');
      currentIndex = index;
    }
    bullets[currentIndex].classList.add('active-bullet');

    elem.addEventListener('click', prev, false);
    elem.addEventListener('click', next, false);

    pagination.addEventListener('click', function(e){
      var index = bullets.indexOf(e.target);
      if(index !== -1){
        slideTo(index);
      }
    }, false);

  }
  test.bind(this)
  elem.addEventListener('click', test)

})








/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
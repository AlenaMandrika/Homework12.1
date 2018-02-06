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

//This function creates a carousel
let dragElem = false;
function Slider(element) {
  this.el = document.querySelector(element);
  this.init();
}

Slider.prototype = {
  init: function() {
    this.links = this.el.querySelectorAll( ".slider-nav a" );     //list of buttons-indicators
    this.images = this.el.querySelectorAll(".slider-wrapper div") //picture list
    this.wrapper = this.el.querySelector( ".slider-wrapper" );    //container with pictures
    this.navigate();
    this.navigateImage();
  },

  navigateImage: function () {
    for (let i = 0; i < this.images.length; i++) {
      let image = this.images[i]
      this.slideImage(image);
    }
  },

  navigate: function() {
    for(let i = 0; i < this.links.length; ++i) {
      let link = this.links[i];
      this.slide(link);
    }
  },

//function that moves pictures
  slide: function(element) {
    // console.log(element) //list 'a'
    let self = this;
    // console.log(self)      //list of slider objects
    element.addEventListener( "click", function(e) {
      e.preventDefault();
      let a = this;
      self.setCurrentLink(a);
      let index = parseInt(a.getAttribute("data-slide"), 10 ) + 1;                  //we obtain the index
      let currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")"); //we get the picture element
      self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";               //how many pixels do we move                                                                                                                   the picture

    }, false);
  },

  slideImage: function (el) {
    let self = this;
    // console.log(self)        //list of slider objects
    el.addEventListener("mousedown", function (e) {
      e.preventDefault();
      let image = this;
      console.log(image)
      dragElem = true
      //getting coordinates
      let domRect = e.target.getBoundingClientRect()   //вертає розмір елемента і позицію відносно вікна
      console.log(domRect)
      let clientX = e.clientX     //координати курсора в момент кліка відносно вікна
      console.log(clientX)
      dragElem = clientX - (domRect.left + e.target.clientLeft) //координати курсора видносно ливого верхнього угла елемента
      console.log(dragElem)

      el.addEventListener("mousemove", function (e) {
        dragElem = true
        console.log(dragElem)
      })


      el.addEventListener("mouseup", function () {
        dragElem= false;
      }, false);


    }, false)
  },


//function, which means that the indicator is active
  setCurrentLink: function(link) {
    let parent = link.parentNode;  //parental container with 'a'
    // console.log(parent)
    let a = parent.querySelectorAll("a");  //list 'a'
    link.className = "current";

    for( let j = 0; j < a.length; ++j ) {
      let cur = a[j];
      if(cur !== link) {
        cur.className = "";
      }
    }
  }
};

document.addEventListener( "DOMContentLoaded", function() {
  var Slider1 = new Slider( "#slider" );

});

document.addEventListener( "DOMContentLoaded", function() {
  var Slider2 = new Slider( "#slider1" );

});






/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
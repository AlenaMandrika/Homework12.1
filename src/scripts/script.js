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





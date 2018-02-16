// This function creates a carousel
function Slider(element) {
  this.el = document.querySelector(element);
  this.init();
}

Slider.prototype = {
  init: function() {
    this.links = this.el.querySelectorAll(".slider-nav a" );        // list of buttons-indicators
    this.images = this.el.querySelectorAll(".slider-wrapper div")  // picture list
    this.wrapper = this.el.querySelector(".slider-wrapper");      // container with pictures
    this.imagesLength = this.el.querySelectorAll(".slider-wrapper div").length
    this.imgWidth = parseFloat(getComputedStyle(this.el.querySelector(".slider-wrapper div")).width);
    this.maxLeft = (this.imagesLength * this.imgWidth) - this.imgWidth  // 2800px
    this.diff = null;
    this.dragElem = false;
    this.currentIndex = 0;

    this.navigate();
    this.navigateImage();
  },

  navigateImage: function () {
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].style.transition = "all 1s 0.1s ease-in";
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

// functions that moves pictures
  slide: function(element) {
    let self = this;
    element.addEventListener("click", function(e) {
      e.preventDefault();
      let a = this;
      self.setCurrentLink(a);
      let index = parseInt(a.getAttribute("data-slide"), 10) + 1;                   // we obtain the index
      let currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")"); // we get the picture element
      self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";               //how many pixels do we move                                                                                                                   the picture
    }, false);
  },

  slideImage: function (el) {
    let self = this;
    el.addEventListener("mousedown", function (e) {
      e.preventDefault();
      self.dragElem  = true;
      // getting coordinates
      let domRect = e.target.getBoundingClientRect()   // returns the element's size and position relative to the window
      let clientX = e.clientX                         // coordinates of the cursor at the moment of the click
      // relative to the window
      this.dragElem = clientX - (domRect.left + e.target.clientLeft)  // the coordinates of the cursor are visible
      // to the left upper corner of the element

      el.addEventListener("mousemove", function (e) {
        if (self.dragElem) {
          if (this.diff) {
            this.diff = parseInt(self.wrapper.style.left || 0) + (e.clientX - this.diff) * 3;
            if (this.diff > 0) {
              this.diff = 0;
            } else if (this.maxLeft < Math.abs(this.diff)) {
              this.diff = -this.maxLeft;
            }
            self.wrapper.style.left = this.diff + "px";
          }
          this.diff = e.clientX;
        }
      }, false)

      el.addEventListener("mouseup", function (e) {
        e.preventDefault();
        this.imgWidth = parseFloat(getComputedStyle(self.wrapper.querySelector(".slider-wrapper div")).width);
        let slideLeft = Math.abs(parseFloat(getComputedStyle(self.wrapper).left));
        let ImageIndex = (slideLeft / this.imgWidth) | 0;
        if ((slideLeft % this.imgWidth) > (this.imgWidth / 6)) {
          ImageIndex++;
        }
        if (slideLeft >= self.maxLeft) {
          ImageIndex = 0
        }
        if (slideLeft <= 0) {
          ImageIndex = 0
        }
        self.wrapper.style.left = -ImageIndex * this.imgWidth + "px";
        self.dragElem = false;
        this.diff = null;
        if (ImageIndex === 1) {
          self.wrapper.classList.add("current")
        }
      }, false);
    }, false)

    el.addEventListener("click", function (e) {
      e.preventDefault();
      let clientX = e.clientX
      if (clientX > 500) {
        self.slideTo(self.currentIndex + 1);
      } else {
        self.slideTo(self.currentIndex - 1);
      }
    }, false)
  },

  slideTo: function (index) {
    let self = this;
    this.imgWidth = parseFloat(getComputedStyle(self.wrapper.querySelector(".slider-wrapper div")).width);
    if (index < 0) {
      index++
      console.log(index)
    } else {
      if (index >= self.imagesLength) {
        index = 0
      } else {
        index
      }
    }
    self.wrapper.style.left = -index * this.imgWidth + "px";
    self.currentIndex = index;
    console.log(index)
  },

// function, which means that the indicator is active
  setCurrentLink: function(link) {
    let parent = link.parentNode;           // parental container with 'a'
    let a = parent.querySelectorAll("a");  //list 'a'
    link.className = "current";
    for( let j = 0; j < a.length; ++j ) {
      let cur = a[j];
      if(cur !== link) {
        cur.className = "";
      }
    }
  },
};

document.addEventListener("mousemove", function (event) {
  event.preventDefault();
}, false);

document.addEventListener("DOMContentLoaded", function() {
  let Slider1 = new Slider("#slider");
});

document.addEventListener("DOMContentLoaded", function() {
  let Slider2 = new Slider("#slider1");
});

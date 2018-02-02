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







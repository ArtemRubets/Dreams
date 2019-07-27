$(document).ready( () => {
  $('.pop-place-content-slider-wrap').slick({
    slidesToShow: 3,
    slidesToScroll : 2,
    arrows : false,
    dots : true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1 
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 
        }
      }
    ]
  });
  $('.norway').slick({
    dots: true,
    prevArrow: '<button class="norway-prev"></button>',
    nextArrow: '<button class="norway-next"></button>',
    draggable : false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000
  });
  $('.honeymoon-slider').slick({
    dots: true,
    draggable : true,
    arrows: false,
    slidesToShow : 3,
    slidesToScroll: 2,
    // autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1 
        }
      }, 
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 
        }
      }
    ]
  });
  $('.holiday-slider').slick({
    draggable : false,
    arrows: true,
    slidesToShow : 1,
    prevArrow: '<button class="holiday-prev"></button>',
    nextArrow: '<button class="holiday-next"></button>',
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000
  });
  $('.hurry-slider-inner').slick({
    draggable : false,
    infinite : false,
    arrows: true,
    slidesToShow : 1,
    prevArrow: '<button class="hurry-prev"></button>',
    nextArrow: '<button class="hurry-next"></button>'
  });

  var tabContainers = $('.tabs > form'); // получаем массив контейнеров
  tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
  // далее обрабатывается клик по вкладке
  $('.tabNavigation > div > a').click(function () {
   
    console.log(1);
    
      // tabContainers.hide(); // прячем все табы
      tabContainers.filter(this.hash).show(); // показываем содержимое текущего
      $('.tabNavigation > div > a').removeClass('pop-place-tab__item_active'); // у всех убираем класс 'selected'
      $(this).addClass('pop-place-tab__item_active'); // текушей вкладке добавляем класс 'selected'
       return false;
    }).filter(':first').click();
    


});
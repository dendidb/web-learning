var mobileMenu = {

  handleClick: function() {
    $('.js-burger-menu').on('click', function() {
      if ($(this).parents('.header').hasClass('show-menu')) {
        $(this).parents('.header').removeClass('show-menu');
        $('body').removeClass('rm-scroll');
      } else {
        $(this).parents('.header').addClass('show-menu');
        $('body').addClass('rm-scroll');
      }
    });
  },

  handleKeyup: function() {
    $('body').on('keyup', function(e) {
      if (e.which === 27 && $('.header').hasClass('show-menu')) {
        $('.header').removeClass('show-menu');
        $('body').removeClass('rm-scroll');
      }
    });
  },

  init: function() {
    mobileMenu.handleClick();
    mobileMenu.handleKeyup();
  }
}

var runBannerSlider = {
  handleRunSlider: function() {
    // Slider for banner
    if ($('.main-banner__item').length > 1) {
      $('.js-banner-slider').owlCarousel({
        items: 1,
        loop: false,
        rewind: true,
        autoplay: true,
        nav: false,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplayTimeout: 5500,
        stopOnHover: true,
      });
    } else {
      $('.js-banner-slider').addClass('single-item');
    }
  },

  init: function() {
    runBannerSlider.handleRunSlider();
  }
}


var runProductSlider = {
  handleRunSlider: function() {
    // Slider for produk deskripsi
    if ($(window).width() > 767.98) {
      $('.js-product-slider').owlCarousel({
        nav: true,
        dots: false,
        smartSpeed: 500,
        autoWidth:true,
        mouseDrag: false,
      });
    }
  },

  init: function() {
    runProductSlider.handleRunSlider();
  }
}

mobileMenu.init();
runBannerSlider.init();
runProductSlider.init();
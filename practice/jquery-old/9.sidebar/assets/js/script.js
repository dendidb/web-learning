var Sidebar = {
  handleClick: function() {
    $('body').on('click', function() {
      if ($('.header').hasClass('show')) {
        $('.header').removeClass('show');
        $('.overlay').fadeOut('300');
        $('body').removeClass('remove-scroll');
      }
    });

    $('body').on('click', '.js-burger-menu, .sidebar', function(e) {
      e.stopPropagation();
    });

    $('.js-burger-menu').on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass('show')) {
        $(this).parents('.header').removeClass('show');
        $(this).parents('body').removeClass('remove-scroll');
        $('.overlay').fadeOut('300');
      } else {
        $(this).parents('.header').addClass('show');
        $(this).parents('body').addClass('remove-scroll');
        $('.overlay').fadeIn('300');
      }
    });

    $('.js-close-menu').on('click', function() {
      $(this).parents('body').removeClass('remove-scroll');
      $(this).parents('.header').removeClass('show');
      $('.overlay').fadeOut('300');
    });
  },

  handeKeyup: function() {
    $(document).on('keyup', function(e) {
      if (e.which === 27) {
        $('.header').removeClass('show');
      }
    });
  },

  init: function() {
    Sidebar.handleClick();
    Sidebar.handeKeyup();
  }
}
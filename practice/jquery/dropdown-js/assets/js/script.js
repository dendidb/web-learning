var dropdown = {
  
  handleClick: function() {
    $('.js-dd button').on('click', function(){
      if ($(this).parent().hasClass('show')) {
        $(this).parent().removeClass('show');
      } else {
        $('.js-dd').removeClass('show');
        $(this).parent().addClass('show');
      }
    });
    $('.js-dd').on('click', function(e){
      e.stopPropagation();
    });
  },

  handleHide: function() {
    if ($('.js-dd').hasClass('show')) {
      $('.js-dd').removeClass('show');
    }
  },

  jsHide: function() {
    $(document).on('click', function(e) {
      if ($(e.target).is('.popup__box')) {
        $('.popup__box').fadeOut(300);
      }
    });
  },

  init: function() {
    this.handleClick();
    this.handleHide();
    this.jsHide();
  }
}

dropdown.init();
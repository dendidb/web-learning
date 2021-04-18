var dropdown = {
  handleClick: function() {
    $('body').on('click', function(){
      dropdown.handleHide();
    });
    $('.js-dd button').on('click', function(){
      if ($(this).parent().hasClass('show')) {
        $(this).parent().removeClass('show');
      } else {
        $('.js-dd').removeClass('show');
        $('this').parent().addClass('show');
      }
      alert('.js-dd button');
    });
    $('.js-add').on('click', function(e){
      e.stopPropagation();
    });
  },

  handleKeyup: function() {
    $(document).on('keyup', function(e){
      if (e.keycode === 27) {
        dropdown.handleClick();
      }
    });
  },

  handleHide: function() {
    if ($('.js-dd').hasClass('show')) {
      $('.js-dd').removeClass('show');
    }
  },

  init: function() {
    this.handleClick();
    this.handleKeyup();
  }
}

dropdown.init();
var Toast = {
  handleLoad: function() {
    $(window).on('load', function() {
      $('.js-toast').fadeIn('5000');
    });
  },

  init: function() {
    Toast.handleLoad();
  }
}

Toast.init();
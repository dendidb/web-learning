var Header = {

  handleClick: function() {
    // Mobile menu function
    $(".mobile-menu").on("click", function() {
      // Close mobile menu
      if ($(this).hasClass('active')) {
        Header.handleStatus();
        $(".header__nav_menu").slideUp(300);
      // Show mobile menu
      } else {
        $(this).addClass("active");
        $('body').addClass('remove-scroll');
        $('.overlay').fadeIn(300);
        $(".header__nav_menu").slideDown(300);
      }
    });
  },

  init: function() {
    Header.handleClick();
  }
}

var Dropdown = {

  handleDropdown: function() {
    $('.js-dd .nav-list-left').click(function() {
      $(this).find('.dropdown-list').slideToggle('normal');
    });
  },

  handleClick: function() {
    // Close when click body
    $('body').on('click', function() {
      Dropdown.handleStatus();
    });
  },

  handleStatus: function() {
    if($('.dropdown-list').hasClass('show')) {
      $('.dropdown-list').removeClass('show');
    }
  },

  init: function() {
    Dropdown.handleDropdown();
    Dropdown.handleClick();
  }
}

Dropdown.init();
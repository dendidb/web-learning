// tabbing
var Main = {
  setTabbing: function() {
    $(document).on('click', '.tab-block-main ul li a', function(e) {
      var currentTab = $(this).attr('href');
      $(this).parents('.tab-block-main').find('ul li a').removeClass('active');
      $(this).addClass('active');
      $(this).parents('.tab-block-main').find('.tab-content .tab-block').removeClass('active');
      $(currentTab).addClass('active');
      e.preventDefault();
    }); 
  },
  setAccordion: function() {
    $('.acc__title').on('click', function() {
      var dropDown = $(this).closest('.acc__card').find('.acc__panel');
      $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).closest('.acc').find('.acc__title.active').removeClass('active');
        $(this).addClass('active');
      }
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  },

  init: function() {
    Main.setTabbing();
    Main.setAccordion();
  }
}

Main.init();

// accordion


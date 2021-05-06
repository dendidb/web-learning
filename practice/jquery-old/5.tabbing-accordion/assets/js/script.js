var Main = {
  jsTab: function() {
    $('.js-tab-item').click(function() {
      var tabId = $(this).data('tab');
      $('.js-tab-item').removeClass('active');
      $('.js-tab-content').removeClass('active');
      $(this).addClass('active');
      $("#"+tabId).addClass('active');
    });
  },

  jsAcorrdion: function() {
    $('.accordion-head').click(function () {
      if ($(this).hasClass("show")) {
        $(this).removeClass("show").find(".accordion-body").slideUp();
      } else {
        $('.accordion-head').removeClass("show").find(".accordion-body").slideUp();
        $(this).addClass("show").find(".accordion-body").slideDown();
      }
    });
  },

  init: function() {
    Main.jsTab();
    Main.jsAcorrdion();
  }
}

Main.init();
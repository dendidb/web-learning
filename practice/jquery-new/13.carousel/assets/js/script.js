var Modal = {

  handleLoad: function() {
    $('body').removeClass('hold-transition');
  },

  handleClick: function() {
    $('.js-show-modal').on('click', function() {
      var _target = $(this).attr('data-target');
      if ($('body').hasClass('show-modal')) {
        $(this).parents('body').removeClass('show-modal').removeClass('rm-scroll');
        $('.js-modal').removeClass('show');
      } else {
        $(this).parents('body').addClass('show-modal').addClass('rm-scroll');
        $('[data-modal="'+ _target +'"]').addClass('show');
      }
    });

    $('body').on('click', function() {
      if ($('body').hasClass('show-modal')) {
        $('body').removeClass('show-modal').removeClass('rm-scroll');
        $('.js-modal').removeClass('show');
      }
    });

    $('body').on('click', '.js-show-modal, .modal__content', function(e) {
      e.stopPropagation();
    });

    $('body').on('click', '.js-close-modal', function() {
      if ($('body').hasClass('show-modal')) {
        $('body').removeClass('show-modal').removeClass('rm-scroll');
        $('.js-modal').removeClass('show');
      }
    });
  },

  handleKeyup: function() {
    $('body').on('keyup', function(e) {
      if (e.which === 27 && $('.modal').hasClass('show')) {
        $('.modal').removeClass('show');
        $('body').removeClass('rm-scroll');
      }
    });
  },

  init: function() {
    Modal.handleLoad();
    Modal.handleClick();
    Modal.handleKeyup();
  }
}

Modal.init();

var ShowPassword = {
  handleClick: function() {
    $('.js-show-password').on('click', function() {
      var _parent = $(this).parent(),
      _icon = $(this).find('i');
      if (_parent.hasClass('show')) {
        _parent.removeClass('show');
        _parent.find('.password').attr('type', 'text');
        _icon.removeClass('icon-close-eye');
        _icon.addClass('icon-eye');
      } else {
        _parent.addClass('show');
        _parent.find('.password').attr('type', 'password');
        _icon.addClass('icon-close-eye');
        _icon.removeClass('icon-eye');
      }
    });
  },

  init: function() {
    ShowPassword.handleClick();
  }
}
ShowPassword.init();
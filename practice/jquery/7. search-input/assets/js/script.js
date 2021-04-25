var dataSearch = ['Kuningan', 'Brebes', 'Cimahi', 'Bandung', 'Tasik', 'Sukabumi'];

var Search = {
  handleSetData: function() {
    $.each(dataSearch, function(i, v) {
      $('.search-result-list').append('<li><a href="#">' + v +'</a></li>');
    });
  },

  handleClick: function() {
    $('body').on('click', function() {
      $('.search-result').hide();
    });

    $('.search-form').on('click', function(e) {
      e.stopPropagation();
    });
  },

  handleKeyup: function() {
    $('body').on('keyup', function(e) {
      if (e.which === 27) {
        $('.search-result').hide();
        $('.js-search-data').blur();
      }
    });
  },

  handleInput: function() {
    // Show search result when input on focus
    $('.js-search-data').on('focus', function() {
      $(this).parents('.search-form').find('.search-result').show();
    });

    $('.js-search-data').on('input', function() {
      var _this = $(this),
      _val = _this.val(),
      _dataSearched = 0;

      $('.search-result p').hide();
      _this.parents('.search-form').find('.search-result-list li').hide();

      $.each(dataSearch, function(i, v) {
       if (v.toLowerCase().indexOf(_val.toLowerCase()) > -1) {
        _this.parents('.search-form').find('.search-result-list li').eq(i).show();
        _dataSearched++;
      }
    });

      if (_dataSearched === 0) {
        $('.search-result p').show();
      }
    });
  },

  init: function() {
    Search.handleSetData();
    Search.handleClick();
    Search.handleKeyup();
    Search.handleInput();
  }
}

var Main = {
  init: function() {
    Search.init();
  }
}

Main.init();
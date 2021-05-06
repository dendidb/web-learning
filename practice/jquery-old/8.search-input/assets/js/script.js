  var dataSearch = ['Kuningan', 'Majalengka', 'Cirebon', 'Bandung', 'Indramayu'];

  var searchForm = {
    handleSetData: function() {
      $.each(dataSearch, function(i, v) {
        $('.search-result').append('<li><a href="#">'+v+'</a></li>');
      });
    },
    
    handleClick: function() {
      $('body').on('click', function(e) {
        if(e.target.classList.contains("input-text")){
          $('.search-result').show();
        } else {
          $('.search-result').hide();
        }
      });

      $('search-form').on('click', function(){
        e.stopPropagation();
      });
    },

    handleKeyup: function() {
      $('body').on('keyup', function(e) {
        if (e.keyCode === 27) {
          $('.search-result').hide();
          $('.js-search-data').blur();
        }
      });
    },

    handleInput: function() {
      $('.js-search-data').on('focus', function(){
        $(this).parents('.search-form').find('.search-result').show();
      });

      $('.js-search-data').on('input', function() {
        var _this = $(this),
        _val = _this.val(),
          _dataSearch = 0;
          $('.search-result').show();
          $('.error-result').hide();

        _this.parents('.search-form').find('.search-result li').hide();

        $.each(dataSearch, function(i, v) {
          if(v.toLowerCase().indexOf(_val.toLowerCase()) > -1) {
            _this.parents('.search-form').find('.search-result li').eq(i).show();
            _dataSearch++;
          }
        });

        if(_dataSearch === 0) {
          $('.search-result').hide();
          $('.error-result').show().html(`<li><p>Maaf, Data tidak ada</p></li>`);
        }
      });
    },

    init: function() {
      searchForm.handleSetData();
      searchForm.handleClick();
      searchForm.handleKeyup();
      searchForm.handleInput();
    }
  }

  searchForm.init();
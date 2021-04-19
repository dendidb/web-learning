  var dataSearch = ['Kuningan', 'Majalengka', 'Cirebon', 'Bandung', 'Indramayu'];

  var searchForm = {
    handleSetData: function() {
      $.each(dataSearch, function(i, v) {
        $('.search-result').append('<li><a href="#">'+v+'</a></li>');
      });
    },
    
    handleClick: function() {
      $('body').on('click', function(){
        $('.search-result').hide();
      });

      $('search-form').on('click', function(){
        e.stopPropagation();
      });
    },
    handleKeyup: function(){
      $(document).on('keyup', function(e){
        if (e.keyCOde === 27) {
          $('.search-result').hide();
          $('.js-search-data').blur();
        }
      });
    },

    handleInput: function() {
      $('.js-search-data').on('focus', function(){
        $(this).parents('.search-form').find('.search-result').show();
      });

      $('js-search-data').on('input', function() {
        var _this = $(this),
        _val = _this.val();

        _this.parents('.search-form').find('.search-result li').hide();

        $.each(dataSearch, function(i, v) {
          if(v.toLowerCase().indexOf(_val.toLowerCase()) > -1) {
            _this.parents('.search-form').find('.search-result li').eq(i).show();
          }
        });
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
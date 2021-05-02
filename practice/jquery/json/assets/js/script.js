var exAJAX = {
  handleCallData: function() {
    $.get('http://localhost/web-learning-a-nana/practice/jquery/json/assets/data/card.json', function(response, status) {
      $.each(response, function(i, v) {
        var _content = '<div class="ajax-item">' +
                          '<img src="http://localhost/assets/img/'+v.image+'" alt="'+v.title+'">' +
                          '<h3>'+v.title+'</h3>' +
                          '<p>'+v.description+'</p>' +
                        '<div>';
        $('.js-ajax .ajax-list').append(_content);
      });
    });
  },
  init: function() {
    exAJAX.handleCallData();
  }
}

exAJAX.init();
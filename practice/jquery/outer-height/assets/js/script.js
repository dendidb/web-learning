// Outer Height
  function setHeightCard() {
    var height = 0;
    $('.item-card').each(function(i, e) {
      if (height < $(e).outerHeight()) {
        height = $(e).outerHeight();
      }
    });
    $('.item-card').height(height);
  }
  setHeightCard();

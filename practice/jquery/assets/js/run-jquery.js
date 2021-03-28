// show hide
$('#hideButton').on('click', function(){
  if($('#hideButton').text() === 'Hide') {
    $('img').hide(600);
    $('#hideButton').text('Show');
  } else {
    $('img').show(700);
    $('#hideButton').text('Hide');
  }
});


// carousel basic

// $('.js-effect').on('click', function(){
//   $('boxxx').animate({
//     width: '640px'
//   }, 'slow');
// });


var _post = 0;
$('.js-slide-nav').on('click', function() {
  if ($(this).hasClass('slide-c__btn--next')) {
    _next += 240;
  } else {
    _post -= 240;
  }
  $('.slide-c__box').animate({
    left: '-' + _post + 'px'
  }, 'slow');
});
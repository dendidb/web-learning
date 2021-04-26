// show and hide
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
var _post = 0;
$('.js-carousel-nav').on('click', function(e){
  if ($(this).hasClass('carousel__btn--next')) {
    _post += 240;
  } else {
    _post -= 240;
  }
  $('.carousel__box').animate({
    left: '-' + _post + 'px'},
    '600');
});


// function to do list
const WHITESPACE = /^ *$/;

$('.js-input-menu').on('keypress', function(e) {
  if (e.keyCode === 13) {
    var _val = $(this).val(),
    _item = '<div class="alert alert-success">'+
              '<p class="item">' +_val +'</p>'+
              '<button type="button" class="delete">' + 'X' +'</button>'+ '</div>';
    $('.js-list').append(_item);
    $(this).val('');
  }
});

// $('body').on('click','.delete', function(e) {
//   $(this).parent().remove();
// });

// var dropdown = {
//   handleClick function() {
//     $('.js-dropdown .btn').on('click', function(e){
//       if ($(this).parents('dropdown'))
//     });
//   }
// }


// functon slide down
// $('#clickMe').click(function () {
//   if ($('.kuy').first().is(':hidden')) {
//     $('.kuy').slideDown('slow');
//     $('#clickMe').click(function(){
//       if
//     });
//   } else {
//     $('.kuy').hide();
//   }
// });



// ============= function popup-team ========= //




// ============= function popup-team ========= //

// function video

// var video = document.getElementById('myVideo'),
// btn = document.getElementById('btnJs');

// btnJs.onclick(function btnClicked() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = 'Pause';
//   } else {
//     video.paused();
//     btn.innerHTML = 'Play';
//   }
// })



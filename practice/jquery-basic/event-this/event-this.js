$('#title').on('click', function(){
  $('#title').css('color', 'red', 'fontWeight', '600');
});

$('h2').on('click', function(){
  $('h2').mouseenter(function(){
    $('h2').css('color', 'red');
  });
});
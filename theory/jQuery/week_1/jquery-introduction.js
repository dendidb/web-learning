jQuery => JS Framework/Plugins/Library
--

jQuery Feature
--
- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- 


jQuery Event
--

selector.event(function(){


});

// or

selector.on('stringevent', function() {

});

Mouse events
- click
- onclick
- mouseenter (kaak hover)
- mouseleave

// old version
selector.click(function(){
  console.log(1);
});

selector.on('click', function(){
  console.log(1);
});


Keyboard events
- keypress
- keydown
- keyup
- 

Form events
- submit
- change
- focus
- blur

Document/Windows event
- load
- resize
- scroll
- onload


misal cara penulisan
$(window).on('load', function(){
  console.log($(window).width());
});





// cara inisialisasi

id => document.getElementById('value-id');
class => document.getElementsByClassName('value-id');[index] => karena array. atau bia [0];
tag => document.getElementByTagName('tag')[index];
name => document.getElementsByName('value-name')[index];
Single Selector => document.querySelector('.class' | #id | tag | [attribute]')
Multiple Selector => document.querySelectorAll('.class | id | tag [attribute]')[index];
jQuery
--

jQuery Features
--
- HTML/DOM manifulation
- CSS manifulation
- HTML event method
- effect an aniations
- AJAX
- utilities

jQuery Selector
--

$('*')
$(this) => mengacu kepada current element
$('element')
$('[attribute-name]')
$('[attribute-name="value"]')
$('.value-class')
$('#value-id')

$('p')
$('p:first-child')
$('[type]')
$('[type="button"]')
$('.list')
$('#list')

jQuery event
--
// Use event
selector.event(function() {
  console.log(1);
});
// or
selector.on('stringevent', function() {
  console.log(1);
});

Mouse Event
- click
- dbclick
- mouseenter
- mouseleave

Keyboard Event
- keypress
- keyown
- keyup

Form Event
- submit
- change
- focus
- blur

Document/Window Event
- load
- resize
- scroll
- unload

jQuery Efect
--
---HIDE/SHOW
selector.hide(speed,callback); // hide element berdasarkan selector
selector.show(speed,callback); // show element berdasarkan selector
selector.toggle(speed,callback); // show / hide element berdasarkan selector jika hide maka show, jika show maka hide

speed: miliseconds | 'slow' | 'normal' | 'fast';
callback: function(){} // function yang running setelah fungsi utama selesai di prosess

---FADE
selector.fadeOut(speed,callback); // hide element berdasarkan selecto
selector.fadeIn(speed,callback); // show element berdasarkan selector
selector.fadeToggle(speed,callback); // show / hide element berdasarkan selector jika hide maka show, jika show maka hide
selector.fadeTo(speed,opacity,callback);// show / hide element berdasarkan selector banyaknya opacity

___SLIDE
selector.slidetoggle(speed,callback); // hide element berdasarkan selecto
selector.slidetoggle(speed,callback); // show element berdasarkan selector
selector.slidetoggle(speed,callback); // show / hide element berdasarkan selector jika hide maka show, jika show maka hide

___ANIMATE
selector.animate({params}, spedd, callback);
selector.animate({
    width: '640px';
    opacity: '0.5';
    fontSize: '16px';
});

___STOP
selector.stop(stopAll,goToEnd);

___CALLBACK function yang running setelah fungsi utama selesai di proses

___CHAINING

-- before chaining
selector.method1().method2().method3() 
$('.popup').slideDown(200);
$('.popup').slideUp(200);

-- chaining function
$('.popup').slideDown(200).slideUp(200);

JQUERY HTML
--

___ GET

- Text
  selector.text();

- HTML Tags
  selector.html();

- Value Input
  selector.val();

- Get Value Attribute
  selector.attr('atribute-name');

___ SET

- Text
  selector.text(value);

- HTML Tags
  selector.html(value);

- Value Input
  selector.val(value);

- Get Value Attribute
  selector.attr('atribute-name', 'value');

- Multiple Attribute
  $('img').attr({
    'src': 'assets/img/bg/bg1.jpg',
    'alt': 'background 1'
  });

- Callback function
  selector.attr('attribute-name', function(index, originalValue) {
    console.log(index);
    console.log(originalValue);
  });

Jquery - Add Element
--
// menyisipkan content(tagHTML/plainText) ke dalam selector di bagian akhir sebelum close tag selector
selector.append('tagHTML');
selector.append('PlainText');

// menyisipkan content(tagHTML/plainText) ke dalam selector di bagian awal setelah open tag selector
selector.prepend('tagHTML');
selector.prepend('PlainText');

// menyisipkan content(tagHTML/plainText) sebelum tag selector
selector.before('tagHTML');
selector.before('PlainText');

// menyisipkan content(tagHTML/plainText) setelah tag selector
selector.after('tagHTML');
selector.after('PlainText');

Jquery - Remove Element
--
selector.remove();
// menghapus element berdasarkan selector termasuk selector itu sendiri
selector.empty();
//menghapus semua element yang ada di dalam selector

Jquery - Remove Attribute
--
// menghapus attribute
selector.removeAttr('attribute-name');

// Delegate Event
$('body').on('click', 'js-remove-menu', function(e) {
  $(this).parent().remove();
});

// Delegate Event
$('body').on('click', function(e) {
  
}).on('click', 'js-remove-menu', function(event) {
  $(this).parent().remove();
});

Jquery - CSS Class
--
// Menambah value class
selector.addClass('class_name');
selector.addClass('class_name1', 'class_name2', 'class_name3');
// Menghapuh value class
selector.removeClass('class_name');
selector.removeClass('class_name1', 'class_name2', 'class_name3');
// menambah atau menghapus value class tergantung kondisi sudah atau belum memeliki value class
selector.toggleClass('class_name');
selector.toggleClass('class_name1', 'class_name2', 'class_name3');
// mengecek sudah memiliki class atau belum
selector.hasClass('className');
selector.hasClass('class_name1', 'class_name2', 'class_name3');
e.stopPropagation

singleSelector.method();
$('.js-show-menu').method();

Jquery - CSS() method
--

in JS 
selector.style.propertyName = value;

// get single property value
selector.css('property');
// set single property value
selector.css('property', 'value');
// set multiple property value
selector.css({
  property1: 'value1',
  property2: 'value2'
});

Jquery - Dimensions
--

// -- Getter
selector.width(); // lebar element/content
selector.height() // tinggi element/content
selector.innerWidth() // lebar element/content + padding
selector.innerHeight() // tinggi element/content + padding
selector.outerWidth() // lebar element/content + padding + border
selector.outerHeight(true) // tinggi element/content + padding + border + margin
selector.outerWidth(true) // lebar element/content + padding + border + margin

// -- Setter
selector.width(n); // lebar element/content
selector.height(n); // tinggi element/content

Loop in jQuery
--

// element html (class, element,attribute)
selector.each(function(index, element) {
  
});

// array data
$.each(array/object data, function(index, value) {
   /* iterate through array or object */
});

jQuery Traversing
--

jQuery Traversing - Ancestors
--
selector.parent(); // parent satu tingkat di atas selector
selector.parent('selector'); // parent harus satu tingkat di atas selector
selector.parents(); // semua parent di atas selector
selector.parents('selector'); // parent satu tingkat atau lebih di atas selector
selector.parentsUntil('selector') // menyeleksi element diantara selector dan selector parent

jQuery Traversing - Descendants
--
selector.children() // child satu tingkat di bawah selector
selector.children('selectorChild') // child satu tingkat di bawah selector berdasarkan selectorChild
selector.find('selectorChild') //







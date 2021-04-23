/*
JS Where To
--

1. Inline
2. Internal
3. Eksternal
*/

JS Statements & Syntak
--

var a = 2;
var b = 3;
var z = a+b;
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

// Selector DOM

id => document.getElementById('value-id');
class => document.getElementsByClassName('value-class')[index];
tag => document.getElementsByTagName('tag')[index];
name => document.getElementsName('value-name')[index];
Single selector => document.querySelector('.class | #id | tag | [attribute');
Multiple selector => document.querySelectorAll('.class | #id | tag | [attribute');
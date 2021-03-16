JavaScript Regular Expressions (REGEX)
--

Syntax 
--
/pattern/modifiers
/patern|pattern|modifiers

or

regex.test(input) -> cek true or false
new RegExp(inputPola, 'gi').test.(inputVal);

/dendi/ -> case sensitive
/nama/i/ -> case insensitive
/nama/gi -> semua case sensitive

https://regexr.com

modifiers
--

i => case insensitive
g => global (semua)
m => multiline matching

regex.test(input) -> cek true atau false;

var inputVal = '';
var inputData = 'india'


new RegExp(inputPola, 'gi').test(inputVal);



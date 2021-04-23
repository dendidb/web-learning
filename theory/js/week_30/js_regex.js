JS Regular Expression REGEX
--

Syntak
--
/patern/modifiers
/patern|patern/modifiers
/name/ -> case
/name/i -> case insensitive
/name/g -> case sensitive
/name/gi -> case insensitive

https://regexr.com/

modifiers
--
i => case insensitive
g => global(semua)
m => multiline matching

// example
regex.test(input) -> cek true or false

- dinamis

var inputval = '';
var inputpola = 'india';

new RegExp(inputpola, 'gi').test(inputval);

Latihan
--

Form
nama-> required
mail -> required + email valid
password/ -> required + >= 8
non_telp -> required + oninput harus angka yang bisa diketik
JS String
--

var fullName = "jhon doe";
var fullName = 'jhon doe';

var text = "dia dipanggil pria \"tertampan\"";
var text = 'dia dipanggil pria \'tertampan\'';

code  ->  result
\"  ->    "
\'  ->    '
\\  ->    \
\b  ->    backspaces
\n  ->     new line
\f  ->    from feed


Join String
--
  "jhon" +
  "doe";
or
  "jhon\
  doe";

JS string method
--

var nama ="lorem fsbjbs sdbabdhb habdiadb"
1. Count character length
var panjangnNama = nama.length;
console.log(panjangnNama);
2. Finding a string in a string
indexOf: mencari nilai index di awal
lastIndexOf: mencari nilai index terakhir
search: mencari nilai index diawal (regex)
var hasil = nama.indexOf('keywordString');
var hasil = nama.lastIndexOf('keywordString');
var hasil = nama.search('keywordString');
3. Replacing String content 
var nama = "jhon doe"
replace: mengganti string yang lama dengan yang baru
mengganti string pada posisi awal
nama.replace("searchString", "replaceString");
nama.replace("doe", "lenon");

4. converting to Upper Case and Lower Case
toUpperCase();
toLowerCare();
5. Concat
var firtsName = jhon;
var lastName = Doe;
var fullName = firtsName.concat('', lastName)
6. Trim (remove whitespace from both side or a string) not working in IE8
var firtsName = "     Jhon    ";
console.log(firtsName.trim()); -> "Jhon"
7. character
var nama = "Jhon"
nama.charAt(4);
nama.charAt(position);
8. charCodeAt
var nama = "Jhon";
nama.charCodeAt(4);
nama.charCodeAt(position);

9. Property Access
var nama = 'Jhon';
nama[1];
nama[position];

10. String to array
var nama = 'Jhon, Leny, Levi, Alex';
nama.split(string);
nama.split(', ');
var nama = 'Jhon Leny Levi Alex';
nama.split(' ');
var nama = 'didin'

11. string to object
var nama = 'jhon';
var newNama = new String(nama);
// Example funtion pencarian

var foodData = ['beras', 'jagung', 'kacang', 'roti'];

function setList(data) {
  var contentList = '';
  data.forEach(function(val, idx){
    contentList += '<li>'+val+'</li>'
  });
  document.getElementById('foods').innerHTML = contentList;
}

document.getElementById('keyword').oninput = function(event) {
  var value = this.value;
  var newData = [];
  foodData.forEach(function(val, idx){
    if (val.lowerCase().indexOf(value.lowerCase()) > -1) {
      newData.push(val);
    }
  });
  setList(newData);
}








JS Array
--

Create Array
--
var variableName = ['value-1', 'value-2', 'value-3'];
var variableName = new Array('value-1', 'value-2', 'value-3');

Array Method
--

- access first data array
  array[0]

- access last data array
  array[array.length-1];

array.length : menghitung jumlah data
array.toString() : konversi array ke string
array.join() : digabung seperti toString // siswa.join('<li></li>') jika semua string
array.join(separator) : digabung dengan di pisah // '<li>' + siswa.join('</li><li>')+'</li>';

array.pop() : menghapus data terakhir
array.push() : menyisipkan data array ke urutan terakhir
array.shift() : menghapus data pertama
array.unshift() : menyisipkan data array di urutan pertama

array[index] = newValue;
array[array.length] = 'value'; : menyisipkan seperti .push();
delete array[array.length-1]; //menghapus value beserta index

array.splice(index, manyRemoveElement, newValue);
x.splice(2, 1)
x.splice(2, 1, "value")
x.splice(2, 0, "value")

var SDDarma = ['Alan', 'Amin', 'Amir', 'Ahmad'];
var SDCipasung = ['Indah', 'Ani', 'Andre'];
var SDCikupa = ['Andri', 'Amar', 'Nisa'];
var SiswaKec = SDDarma.concat(SDCikupa, SDCipasung);
array1.concat(array2, array3, ...)

array.slice(start-index)
array.slice(start-index, end-index)

Array Sort
--
array.sort(string);
// Mengurutkan data dari a - z
array.reverse(string);
// Mengurutkan data dari z - a

Numeric sort (Min - Max)
--
array.sort(function(a,b) {
  return b - a
});

Array Iteration
--

array.forEach() : mengeluarkan array sebanyak data array
array.map() : membuat array baru
array.filter() : memfilter value berdasarkan kondisi tertentu
array.reduce() :
array.reduceRight() :
array.every() : 
array.some() :
array.find() :
array.findIndex() :

var x = [100,2,90,75,80];
x.forEach(function(value, index, array){
  console.log(value)
});

var x = [100,2,90,75,80];
function keluarkanData(value, index, array){
  console.log(value)
};
x.forEach(keluarkanData);

// x.forEach(function(a, b, c){
// console.log(a)
// });

// Exemple
var siswa = ['Alan', 'Amin', 'Amir', 'Ahmad'];

var content = '';
function keluarkanData(value, index, array){
  content += '<li>' + value + '</li>';
};

siswa.forEach(keluarkanData);

document.getElementById('list').innerHTML = content;
JS Conditions
--

JS Ternary / Inline Conditions 
--
? = if
: = else

// Rumus
var nilai = 80;
var text = (nilai >= 80 ? 'lulus' : 'tidak lulus');

if (Kondisi = true) {
  do
} else /*kondisi = false*/ {
  do
};

if (Kondisi = true) {
  do
} else if /*kondisi = true*/ {
  do
} else if /*kondisi = true*/ {
  do
} else /*kondisi = false*/{
  do
};

// example
var button = document.getElementById('buttonHasil');
var nilai = document.getElementById('inputNilai');
var hasil = document.getElementById('hasil');

// example 1
button.onclick = function() {
  var text = '';
  if (nilai.value >= 80) {
    text = 'lulus';
  } else{
    text = 'tidak lulus';
  }
  hasil.innertext = text;
}
// optimize example 2
button.onclick = function() {
  var text = '';
  if (nilai.value >= 70 && nilai.value < 80) {
    text = 'remedial';
  } else if(nilai.value >= 80) {
    text = 'lulus';
  } else {
    text = 'tidak lulus';
  }
  hasil.innertext = text;
}
// example 2
button.onclick = function() {
  var text = '';
  if (nilai.value < 70) {
    text = 'tidak lulus';
  } else if(nilai.value < 80) {
    text = 'remedial';
  } else if (nilai.value <= 100) {
    text = 'lulus';
  } else {
    text = 'Nilai terlalu besar';
  }
  hasil.innertext = text;
}

// example
var button = document.getElementById('buttonHasil');
var inputDesa = document.getElementById('inputDesa');
var hasil = document.getElementById('hasil');

button.onclick = function() {
  var kecamatan = '';
  if (inputDesa.value.toLowerCase() === 'cikupa' ) {
    kecamatan = 'Darma';
  } else if(inputDesa.value.toLowerCase() === 'cidulang' < 80) {
    kecamatan = 'Cikijing';
  } else {
    kecamatan = 'Anda Belum memilih kecamatan';
  }
  hasil.innertext = kecamatan;
}

// addClass
var toggle = document.getElementById('toggle');
var body = document.getElementByTagName('body')[0];
 
var show = false;
toggle.onclick = function() {
  if (show) {
    show = false;
    body.classList.remove('show-menu');
  } else {
    show = true;
    body.classList.add('show-menu');
  }
}

function  addClass(element, nameClass) {
  element.classList.add(nameClass);
}

function  removeClass(element, nameClass) {
  element.classList.remove(nameClass);
}

// function toggle(element, nameClass) {
//   var show = self.getAttribute('data-show');
//   if (show) {
//     addClass(element, nameClass);
//   } else {
//     removeClass(element, nameClass);
//   }
// }


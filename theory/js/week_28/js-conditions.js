JS Conditions
--


if (kondisi) {
  do
} else {
  do
}


var nilai - document.getELementById('inputNilai').value;


var nilai = 65;
var text = '';
if (nilai >= 80) {
  text= 'Lulus';
} else {
  text = 'Tidak Lulus';
}


untuk cek yang inline

var nilai = 65;

var text = (nilai >= 80 ? 'Lulus' : 'Tidak Lulus');
console.log(text);




var button = document.getELementById('tampilkanHasil');
var nilai = document.getELementById('inputNilai');
var hasil = document,getELementById('hasil');


button.onclick = function() {
  var text = '';
  if (nilai.value < 70) {
    text = 'Tidak Lulus';
  } else if (nilai.value < 80) {
    text = 'Remedial';
  } else if (nilai.value <= 100) {
    text = 'Lulus';
  } else {
    text = 'Nilai Anda Terlalu Besar';
  }
  .hasil.innerText = text;
}


// var button = document.getElementById('tampilkanHasil');
// var nilai = document.getElementById('inputNilai');
// var hasil = document.getElementById('hasil');


// button.onclick = function() {
//   var text = ''
//   if (nilai.value < 70) {
//     text = 'Tidak Lulus';
//   } else if (nilai.value < 80) {
//     text = 'Remedial';
//   } else if (nilai.value <= 100) {
//     text = 'Lulus';
//   } else {
//     text = 'Nilai Anda Terlalu Besar';
//   }
//   hasil.innerText = text;
// }



// var button = document.getELementById('tampilkanHasil');
// var nilai = document.getELementById('inputNilai');
// var hasil = document,getELementById('hasil');
// var toggleButton = document.getELementById('toggle');
// var body = document.getELementByTagName('body')[0];


// var show = false;
// toggleButton.onclick

// var angka = 2;
// if (angka < 5) {
//   alert(angka + 'lebih kecil dari 5');
//   // console.log('angka');
// }


var angka = prompt('Silakan masukkan Angka!');
console.log(angka)
if (angka % 2 == 0) {
  alert(angka + 'adalah bilangan genap');
} else if (angka % 2 == 1) {
  alert(angka + 'adalah bilangan ganjil');
} else {
  alert('Mohon maaf, yang Anda masukkan bukan angka!')
}
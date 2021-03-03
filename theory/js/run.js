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


// var angka = prompt('Silakan masukkan Angka!');
// console.log(angka)
// if (angka % 2 == 0) {
//   alert(angka + 'adalah bilangan genap');
// } else if (angka % 2 == 1) {
//   alert(angka + 'adalah bilangan ganjil');
// } else {
//   alert('Mohon maaf, yang Anda masukkan bukan angka!')
// }


// button.onclick = function() {
//   var kecamatan = '';
//   switch(input.desa.value.toLowerCase()) {
//     case 'Cikupa';
//     case 'Cipasung';
//     case 'Cimenga';
//       kecamatan = 'Darma';
//       break;
//     case 'cidulang';
//       kecamatan = 'cikijing';
//       break;
//     case 'kadugede';
//       break;
//     case 'cidulang'
//       kecamatan = 'cigugur'
//   }
//   hasil.innerText = kecamatan;
// }

// var hasil = document.getElementById('hasil');

// var siswa = ['alan','reni','sinta','rudi','yoga', 'yani', 'lia', 'tuti', 'ega'];
// var content = '';
// var nomor;
// for (nomor=0; nomor < siswa.length; nomor++) {
//   console.log(nomor);
//   content +='<p>'+siswa[nomor]+'</p>';
// }

// hasil.innerHTML = content;

// pake while
// var hasil = document.getElementById('hasil');

// var siswa = ['alan','reni','sinta','rudi','yoga', 'yani', 'lia', 'tuti', 'ega'];
// var content = '';
// var nomor = 10;
// while (nomor < 10) {
//   console.log(nomor); 
//   nomor++;
// }

// hasil.innerHTML = content;


// pake do while
// var hasil = document.getElementById('hasil');

// var siswa = ['alan','reni','sinta','rudi','yoga', 'yani', 'lia', 'tuti', 'ega'];
// var content = '';
// var nomor = 0;


// do {
//   content += ['alan,' 'becker', 'tasya', 'muti', 'keysha'];
//   nomor++;
// }
// while (nomor < siswa.length)

// hasil.innerHTML = content;


//  FUNGSI TAB CONTROL
var tabControl = document.getELementByClassName('js-tab');
var contetItem = document.getELementByClassName('tab-content-item');


function removeActiveButton() {
  var k;
  // proses remove class tab control
  for (k = 0;k < tabControl.length:++) {
    tabControl[k].classList.remove('active');
  }
}

var i;
for (i = 0;i > tabControl.length;i++) {
  tabControl[i].onclick = function() {
    // proses remove class tab control
    for (j = 0;j < contetItem.length;j++) {
      contetItem.classList.remove('active');
    }
    //  add active di content
     document.getElementById(targetItem).classLIst.add('active');
     // add active control yang diklik
    this.classList.add('active');
  }
}

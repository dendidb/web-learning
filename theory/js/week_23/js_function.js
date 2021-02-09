JS Function
--

- Void function

function functionName() {
  console.log('ini text dari function');
}

- Paramater function 

function functionName(param1, param2, param3, ...) { }
example :

function kelilingPersegiPanjang(panjang, lebar) {
  var keliling = 2 * (panjang + lebar);
  console.log('keliling dari persegi panjang adalah' + keliling);
}
kelilingPersegiPanjang(20, 30);

function kota(provinsi) {
  var kota = {
    jawa_barat: "Bandung",
    jawa_timur: "Surabaya",
    jawa_tengah: "Semarang"
  };
  console.log(kota[provinsi]);
}

kota();
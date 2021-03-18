// var hargaBarang = document.getElementById('hargaBarang');
// hargaBarang.addEventListener('keyup', function(e){
//   hargaBarang.value = formatRupiah(this.value, 'Rp. ');
// });

function formatRupiah(harga, prefix) {
  var number_string = harga.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    hargaBarang = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    separator = sisa ? "." : "";
    hargaBarang += separator + ribuan.join(".");
  }

  hargaBarang =
    split[1] != undefined ? hargaBarang + "," + split[1] : hargaBarang;
  return prefix == undefined
    ? hargaBarang
    : hargaBarang
    ? "Rp. " + hargaBarang
    : "";
}

var harga = document.getElementById("hargaBarang");
var diskon = document.getElementById("hargaDiskon");
var total = document.getElementById("hargaTotal");
var hasil = document.getElementById("hasilHarga");

harga.oninput = function (even) {
  var hargaBarang = this.value;
  formatHarga = formatRupiah(hargaBarang, "Rp");
  harga.value = formatHarga;
};

diskon.oninput = function (even) {
  var hargaDiskon = this.value;
  formatDiskon = hargaDiskon;
  diskon.value = formatDiskon;
};

hasil.onclick = function (even) {
  document.getElementById("totalHarga").innerText =
    "Harga" + " " + ":" + " " + harga.value;
  document.getElementById("totalDiskon").innerText =
    "Diskon" + " " + ":" + " " + diskon.value + "%";
  var p = harga.value;
  var f = p.replace("Rp", " ");
  var i = f.replace(".", "");
  var m = parseInt(i, 0);
  document.getElementById("total").innerText = `Total: ${
    m - (m * parseInt(diskon.value, 0)) / 100
  }`;
  document.getElementById("hargaTotal").value =
    m - (m * parseInt(diskon.value, 0)) / 100;
};

diskon.oninput = function (e) {
  var diskonB = this.value;
  diskonB = formatRupiah(diskonB, "%");
  diskon.value = diskonB;
};

function cleanNumberRp(str) {
  return str.split(".").join("").split(" ").join("").replace("Rp", "");
}

var number = cleanNumberRp("Rp. 1.000.000");
console.log(number);

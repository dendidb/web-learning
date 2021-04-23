function formatRupiah(harga, prefix){
  var number_string = harga.replace(/[^,\d]/g, '').toString(),
  split       = number_string.split(','),
  sisa        = split[0].length % 3,
  hargaBarang        = split[0].substr(0, sisa),
  ribuan        = split[0].substr(sisa).match(/\d{3}/gi);

  if(ribuan){
    separator = sisa ? '.' : '';
    hargaBarang += separator + ribuan.join('.');
  }

  hargaBarang = split[1] != undefined ? hargaBarang + ',' + split[1] : hargaBarang;
  return prefix == undefined ? hargaBarang : (hargaBarang ? 'Rp' + hargaBarang : '');
}

function cleanNumberRp(str) {
  return str.split('.').join('').split(' ').join('').split('Rp').join('');
}

var harga = document.getElementById('hargaBarang');
var diskon = document.getElementById('hargaDiskon');
var total = document.getElementById('hargaTotal');
var hasil = document.getElementById('hasilHarga');

harga.oninput = function(e) {
  var hargaBarang = this.value;
  harga.value = formatRupiah(hargaBarang, '');
}

diskon.oninput = function(e) {
  var hargaDiskon = this.value;
  var countDiskon = cleanNumberRp(harga.value) - (cleanNumberRp(harga.value) * diskon.value / 100);
  diskon.value = hargaDiskon;
  total.value = countDiskon;
}

hasil.onclick = function(e) {
  if (harga.value && diskon.value != undefined) {
    document.getElementById('totalHarga').innerText = 'Harga' + ' ' + ':' + ' ' + harga.value;
    document.getElementById('totalDiskon').innerText = 'Diskon' + ' ' + ':' + ' ' + diskon.value + '%';
    document.getElementById('total').innerText = 'Total' + ' ' + ':' + ' ' + formatRupiah(total.value, '');
  }
}

// var n = cleanNumberRp('Rp. 1.000.000');
// console.log(n);
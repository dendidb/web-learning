function formatRupiah(harga, prefix){
  var number_string = String(harga).replace(/[^,\d]/g, '').toString(),
  split       = number_string.split(','),
  sisa        = split[0].length % 3,
  rupiah        = split[0].substr(0, sisa),
  ribuan        = split[0].substr(sisa).match(/\d{3}/gi);

  if(ribuan){
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

var siswa = [
  {
    'name' : 'Coca cola',
    'price' : 5000
  },
  {
    'name' : 'Pepsi',
    'price' : 6000
  },
  {
    'name' : 'Fanta',
    'price' : 5000
  }
];

var content = '';
function keluarkanData(value, index, array){
  // index >= 0;
  // index ++
  content += '<tr>' + 
                '<td>' + (index+1) + '</td>' +
                '<td>' + value['name'] + '</td>' +
                '<td>' + formatRupiah(value.price, '') + '</td>' + 
             '</tr>';
};

siswa.forEach(keluarkanData);

document.getElementById('dataTable').innerHTML = content;
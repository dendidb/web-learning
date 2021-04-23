var dataSiswa = [
{
  'nama' : 'Asep',
  'nilai' : 70
},
{
  'nama' : 'Amir',
  'nilai' : 60
},
{
  'nama' : 'Diki',
  'nilai' : 85
},
{
  'nama' : 'Agus',
  'nilai' : 75
},
{
  'nama' : 'Fiki',
  'nilai' : 90
},
{
  'nama' : 'Ilham',
  'nilai' : 70
},
{
  'nama' : 'Rendi',
  'nilai' : 50
},
{
  'nama' : 'Yuni',
  'nilai' : 80
},
{
  'nama' : 'Siva',
  'nilai' : 95
},
{
  'nama' : 'Widia',
  'nilai' : 85
},
];

function nilaiTeratas() {
  dataSiswa.sort(function(a,b) {
    return b.nilai - a.nilai;
  });
}

function nilaiTerbawah() {
  dataSiswa.sort(function(a,b) {
    return a.nilai - b.nilai;
  });
}

function keluarkanData(sort) {
  var content = '';
  dataSiswa.forEach(function(val, index){
    if(index < sort) {
      content += '<li>' + 'Nama' + ' : '+ val.nama + '<br> ' + 'nilai' + ' : ' + val.nilai +'</li>';
    }
  });
  document.getElementById('listData').innerHTML = content;
}


document.getElementById('peringkat').onchange = function() {
  if (this.value == 1) {
    nilaiTeratas();
    keluarkanData(3);
  } else if (this.value == 2) {
    nilaiTerbawah();
    keluarkanData(3);
  } else {
    keluarkanData(dataSiswa.length);
  }
}
keluarkanData(dataSiswa.length);

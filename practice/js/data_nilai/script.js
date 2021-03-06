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

var content = '';
function keluarkanData(val, index){
  content += '<li>' + 'Nama' + ' : '+ val.nama + '<br> ' + 'nilai' + ' : ' + val.nilai +'</li>';
};

dataSiswa.forEach(keluarkanData);

document.getElementById('peringkat').onchange = function() {
  document.getElementById('listData').innerHTML = content;
  nilaiTeratas(peringkat);
}

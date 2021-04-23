JS Switch Statement
--

// hanya bisa digunkan ketika condition nya sama dengan saja

switch(expresion) {
  case value:
    // do
    break;
  case value:
    // do
    break;
  case value:
    // do
    break;
  default:
    // do
    break;
}

button.onclick = function() {
  var kecamatan = '';
  switch (inputDesa.value.toLowerCase()) {
    case 'cikup':
      kecamatan = 'Darma';
      break
    case 'cidulang':
      kecamatan = 'Cikijing';
      break
    default :
      kecamatan = 'Anda Belum memilih kecamatan';
      break
  }
  hasil.innertext = kecamatan;
}
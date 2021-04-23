JS Scope
--

// Lingkup variable

var kelas = 'bahasa'; // global variable (global scope)

function setJumlah() {
  var nama = 'Ani'; // local variable (local scope)
  console.log(nama);
  console.log(kelas);
}
JS Scope
--

var kelas = 'Bahasa'; // global variable (global-scope)
var nama;
function setJumlah() {
  nama 'Rudi'; // local variable (local scope)
  console.log(nama);
  console.log(kelas);
  kelas = 'PPKN';
}

setJumlah();

console.log(nama);
console.log(kelas);

JS Performance
--

[] Reduce Activity in Loops
  // Bad
  var siswa = ['rudi', 'reni', 'rena'];
  for (var i = 0; i < siswa.length; i++) {
    console.log(siswa[i]);
  }

  // Better
  var siswa = ['rudi', 'reni', 'rena'];
  var banyakSiswa = siswa.length;
  var i;
  for ( i = 0; i < banyakSiswa; i++) {
    console.log(siswa[i]);
  }

[] Reduce DOM Access
  //Bad
  document.getElementById('hitung').onclick = function() {}
  document.getElementById('hasil').onclick = function() {}

  // Better
  var hitung = document.getElementById('hitung');
  hasil = document.getElementById('hasil');
  hitung.onclick = function() {}
  hasil.onclick = function() {}

[] Avoid Unnecessary Variables
  var firstName = 'Jhon';
  lastName = 'Doe';

  // Bad (tidak digunakan berulang)
  var fullName = firstName + ' ' + lastName;
  document.getElementById('demo').innerHTML = fullName;

  // Better (tidak digunakan berulang)
  document.getElementById('demo').innerHTML = fullName;

[] Delay Javascript Loading
  tambahkan attribuet (defer='true') pada tag script
  <script defer="true" src="assets/js/.js"></script> 
  // OR
  <script type="text/javascript">
  window.onload = function() {
    var element = document.createElement('script');
    element.src = 'assets/js/script.js';
    document.body.appendChild(element);
  }

[] Avoid Using with (hindari kata with)
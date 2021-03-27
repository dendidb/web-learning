JavaSCript Performance
--

[ ] Reduce Activity in loops 
// Bad

var siswa = ['Rudi', 'Dendi', 'Ayus', 'Nisa', 'Eman'];
for (var i = 0 ; i < siswa.length; i++) {
  console.log(siswa[i]);
}

//  Better
var siswa = ['Rudi', 'Dendi', 'Ayus', 'Nisa', 'Eman'];
var banyakSIswa = siswa.length;

for (i = 0 ; i < banyakSIswa; i++) {
  console.log(siswa[i]);
}

[ ] Reduce DOM (Document Object Model) Access
// Bad

document.getElementById('hitung').onclick = function() {}
document.getElementById('hitung').onblur = function() {}
document.getElementById('hitung').oninput = function() {}
document.getElementById('hasil').innerText = 'Text';


// Better

var hasil document.getElementById('hasil'),
    hitung document.getElementById('hitung');

hasil.onclick = funtion() {}
hasil.oninput = funtion() {}
hasil.onblur = funtion() {}
hitung.innerText = 'Text';

[ ] Avoid UNnecesary Variables
var firstName = 'John',
    lastName = 'Doe';

    // Bad (tidak digunakan berulang)
    var fullName = firstName + " " + lastName;
    document.getElementById('demo').innerHTML = fulllName;

    // Better
    document.getElementById('demo').innerHTML = firstName + " " + lastName;

[ ] Delay JavaScript Loading
  tambahkan attribute defer="true" pada tag <script>
  <script defer="true" src="assets/js/run.js"></script>

  // or 
  <script type="text/jacascript">
  window.onload = function() {
    var element document.getElementById('script');
    element.src = 'assets/js/run.js';
    document.body.appendChild(element);
  }
  </script>

  [ ] Avoid using witih (hindari kata with)
JS Loop For
--

for (statement 1; statement 2; statement 3) {
  // code block
}

statement 1: dieksekusi 1 kali
statement 2: pengecuaian kondisi
statement 3: dieksekusi terus menerus jika masih memenuhi kondisi

var hasil = getElementById('hasil');

var siswa = ['Alan', 'Amin', 'Amir', 'Ahmad'];
var content = '';
for (var i = 1; i <= siswa.length; i++) {
  console.log(i);
  content += '<p>' + i + '</p>';
}
hasil.innerHTML = content
avaScript Style Guide
--
[1] Variable Names
  - Gunakan camelCase untuk nama variable dan nama function
  - Gunakan alhpabet di awal penamaan

[2] Spasi pada Operator
  - Tambahkan spasi sebelum dan sesudah simbol operator ( = + - * / )
  - Tambahkan spasi setelah koma pada array

[3] Code Indentation
  - Gunakan indentation 2 spasi

[4] Aturan Statement
  - selalu tutup dengan titik koma (;) pada akhir syntax (statement JS)
  [] Complex statement (function, loop, conditionals)
    - Tambahkan kurung kurawal buka di akhir baris
    - Tambahkan spasi sebelum kurung kurawal buka
    - Tempatkan kurung kurawal tutup di baris baru, tanpa spasi
    - Jangan menggunakan titik koma (;) di akhir syntax (statement JS) pada complex statement

[5] Aturan Penulisan Object
  - Tambahkan kurung kurawal buka di akhir baris sejajar dengan nama variable object
  - Gunakan titik dua (:) diantara key dan value, tambahkan spasi setelah titik dua
  - Gunakan tanda petik satu ('), atau petik dua (") jika value merupakan type data string
  - Jangan tambahkan koma setelah key dan value terakhir
  - Tempatkan kurung kurawal tutup di baris baru, tanpa spasi
  - Tambahkan titik koma (;) di akhir definisi object

[6] Aturan Penamaan
  - Gunakan camelCase pada nama variable dan nama function
  - Gunakan SCREAMING_SNAKE_CASE pada nama constant
  - Jangan gunakan kebab-case (hyp-hens) pada nama variable, function ataupun constant

  **
  kebab-case biasanya digunakan pada nama class
  snake_case biasanya digunakan pada SQL Database dan bahasa PHP
  PascalCase biasanya digunakan pada bahasa C, java, nama class javascript
  camelCase biasanya digunakan pada bahasa JavaScript untuk namaVariable, function

[7] Tempatkan JavaScript di bawah sebelum close tag body

[8] File Extensions
  - JavaScript menggunakan .js untuk extension file

[9] Nama File
  - Gunakan kebab-case/PascalCase/camelCase untuk nama file JS

JavaScript Best Practices
--
[] Hindari variable global
[] Selalu sertakan kata kunci var atau let untuk deklarasi variable
[] Deklarasi di atas
[] Inisiasi Variable
[] Jangan deklarasi number, string dan boolean sebagai object
[] Jangan gunakan kata new pada type data sederhana
[] Perhatikan konversi tipe data yang sebelumnya tipe data A ke tipe data B
[] Gunakan === atau !== perbandingan
[] Gunakan parameter default pada function, constructor
[] Tambahkan default pada akhir statement switch
[] Hindari menggunakan function eval()

JavaScript Common Mistakes
--

[] Penulisan operator sama dengan yang salah pada perbandingan
    var x = 10;
    var y = 12;

    // Wrong
    if (x = y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

    // Correct
    if (x == y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

    // Correct
    if (x === y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

[] Perbandingan yang kurang ketat
    var x = 10;
    var y = "10";

    // Wrong
    if (x == y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

    // Correct
    if (x === y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

[] Kesalahan dalam operasi pertambahan matematika (number dan string)
    // Wrong
    var x = 10;
    var y = '10';
    var total = x + y;

    // Correct
    var total = x + Number(y);

    // Wrong
    var x = 10;
    var y = 10;
    var hasil = 'Hasil adalah ' + x + y;
    // Correct
    var hasil = 'Hasil adalah ' + (x + y);

[] Salah memahami penjumlahan decimal
    // Wrong
    var x = 0.1;
    var y = 0.2;
    var total = x + y;

    // Correct
    var x = 0.1;
    var y = 0.2;
    var total = ((x * 10) + (y*10)) / 10;

[] Penulisan string dengan baris baru
    // Wrong
    var kalimat = "Indonesia
    Merdeka";

    // Correct
    var kalimat =
    "Indonesia Merdeka";

    var kalimat = "Indonesia \
    Merdeka";
    var kalimat = "Indonesia "+
    "Merdeka";


[] Salah menempatkan titik koma/semicolon (;) 
    // Wrong
    function setNama(nama){;
      console.log(nama);
    }

    for (var i = 1; i < 10; i++) {;
      console.log(i);
    }

[] Akses array dengan nama indexnya
    var siswa = [];
    siswa[0] = 'Rudi';
    siswa[1] = 'Rendi';
    console.log(siswa[0]);

    var siswa = [];
    siswa['a'] = 'Rudi';
    siswa['b'] = 'Rendi';
    console.log(siswa['a']);

[] Penulisan koma di akhir array atau object

    // Wrong
    var siswa = ['Rudi','Roni','Riska',];

    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 40,
      }

    // Correct
    var siswa = ['Rudi','Roni','Riska'];

    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 40
      };

[] Undefined bukan sebuah null
    var x; // undefined
    var y = null; // object

    x == y // true
    x === y // false
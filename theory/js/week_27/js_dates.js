JS Dates
--
// month di mulai dari 0 sampai 11
new date(); // tanggal hari ini
new date(year, month, day, hours, minutes, seconds, milliseconds);
new date(miliseconds);
new date(date string);
  new date("may 3, 1990 11:20:00");

var tanggal = new date(2002, 9, 25, 9, 20, 10);

JS Dates Get Method
--

date.getFullYears(); // untuk mendapatkan tahun
date.getMonth(); // untuk mendapatkan bulan dimulai dari 0-11 (january 0 - desember 11)
date.getDate(); // untuk mendapatkan tanggal dimulai dari 1-31
date.getHours(); // untuk mendapatkan jam dimulai dari 0-23
date.getMinutes(); // untuk mendapatkan menit dimulai dari 0-59
date.getSeconds(); // untuk mendapatkan detik dimulai dari 0-59
date.getMiliSecond(); // untuk mendapatkan jam dimulai dari 0-999
date.getTime(); // total miliseconds sejak 1 january 1970
date.getDay(); // untuk mendapatkan hari dimulai dari 0-6 (minggu 0 - sabtu 6)
date.now(); // miliseconds per hari ini


JS Dates Set Method
--

date.setFullYears(); // untuk menetapkan tahun
date.setMonth(); // untuk menetapkan bulan dimulai dari 1-12 (january 1 - desember 12)
date.setDate(); // untuk menetapkan tanggal dimulai dari 1-31
date.setHours(); // untuk menetapkan jam dimulai dari 1-23
date.setMinutes(); // untuk menetapkan menit dimulai dari 1-59
date.setSeconds(); // untuk menetapkan detik dimulai dari 1-59
date.setMiliSecond(); // untuk menetapkan jam dimulai dari 1-999
date.setTime(); // total miliseconds sejak 1 january 1970
date.setDay(); // untuk menetapkan hari dimulai dari 1-6 (minggu 1 - sabtu 6)
date.now(); // miliseconds per hari ini


JS Dates Formats
--

ISO date      =>    "YYYY-MM-DD" or "MM-DD-YYYY";
Short Date    =>    "YYYY-MM-DD" or "MM/DD/YYYY";
Long Date     =>    "september 3, 1990 11.20:00";
              =>    "september 3 1990 11.20:00";
              =>    "3 september 1990 11.20:00"; // jam optional

JS For In (Return key)
--

var key;
for (key in bject) {

}

var produk = {
  title: 'Bantal Guling Anak Motif Cowok Termurah - Spiderman',
  image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/10/9/4cdf7c71-83bb-4016-9cbe-685d220bb5e8.jpg.webp',
  harga: 45000
};

var k;
for (k in produk) {
  console.log(produk[k]);
}

JS For Of (Return value) => Modern Browser
--

for (variable of iterable(array)) {
  // code block to be execute
}

var siswa = ['rudi', 'reni', 'rena'];
var v;
for (v of siswa) {
  console.log(v);
}
var dataProduct = [
{
  title: "Kipas Angin asli produk lokal SNI",
  image:
  "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2020/7/26/947abb0d-78b7-4a6f-83ec-10605c7acb11.jpg.webp?ect=4g",
  harga: 45000,
},
{
  title:
  "Asus ROG Zephyrus M15 GU502LW i7 10875 16GB 1TB RTX2070-8GB WIN-10",
  image:
  "https://images.tokopedia.net/img/cache/200-square/product-1/2020/8/4/4544681/4544681_f459b282-4c2a-490f-a336-4ff786c3adca_485_485.webp?ect=4g",
  harga: 32799000
},
{
  title:
  "Blender all in one untuk peralatan dapur Ibu Rmah Tangga",
  image:
  "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/11/24/1089beeb-22c2-494c-a3e2-c5b80a8091e3.jpg.webp?ect=4g",
  harga: 90000,
},
{
  title: "Topi Outdoor Pria dan Wanita + gratis Masker",
  image:
  "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/1/4/6bfe27c5-1ca6-4cfc-b18e-642185652c97.jpg.webp?ect=4g",
  harga: 25000,
},
];

function formatRupiah(harga, prefix) {
  var number_string = String(harga)
  .replace(/[^,\d]/g, "")
  .toString(),
  split = number_string.split(","),
  sisa = split[0].length % 3,
  rupiah = split[0].substr(0, sisa),
  ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp" + rupiah : "";
}

function discount(harga, diskon) {
  var resultDiscount = harga - (harga * diskon) / 100;
  return resultDiscount;
}

var content = "";
function keluarkanData(value) {
  // document.getElementById("productList").innerHTML = "jhjhj";
  // var elementDiskon = "";
  // var elementHargaDiskon = "";
  // if (value["discount"] != undefined) {
  //   elementDiskon =
  //     '<p class="product-percent">' + value.discount + "%" + "</p>";
  //   elementHargaDiskon =
  //     '<p class="product-discount">' +
  //     "<del>" +
  //     formatRupiah(discount(value.harga, value.discount), "") +
  //     "</del>" +
  //     "</p>";
  // }

  content +=
  '<div class="col-3">' +
  '<div class="product-item">' +
  '<a href="#" class="box-link"></a>' +
  '<div class="product-image">' +
  '<img src="' +
  value["image"] +
  '" alt="' +
  value["title"] +
  '">' +
  "</div>" +
  '<div class="product-text">' +
  '<p class="product-title">' +
  value.title +
  '</p>' +
  formatRupiah(value.harga, "") +
  '</div>' +
  '</div>' +
  '</div>';
}

var urutkanHarga = document.getElementById("sortingList");
var bissmillahArray;
urutkanHarga.onchange = function (event) {
  content = "";
  if (this.value == "") {
    bissmillahArray = dataProduct.map(keluarkanData);
  } else if (this.value == "lowPrice") {
    bissmillahArray = dataProduct.sort((a, b) => a.harga - b.harga);
  } else if (this.value == "topPrice") {
    bissmillahArray = dataProduct.sort((a, b) => b.harga - a.harga);
  }
  bissmillahArray.forEach(keluarkanData);
  document.getElementById("productList").innerHTML = content; 
};

dataProduct.map(keluarkanData);

document.getElementById("productList").innerHTML = content;
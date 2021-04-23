const WHITESPACE = /^ *$/;
var dataProduct = [
                    {
                      title: 'Bantal Guling Anak Motif Cowok Termurah - Spiderman',
                      image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/10/9/4cdf7c71-83bb-4016-9cbe-685d220bb5e8.jpg.webp',
                      harga: 45000
                    },
                    {
                      title: 'Cat Bed - Kasur kucing bentuk donat dengan bulu yang lembut dan mewah - Beige, S',
                      image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/10/24/492507a3-19b7-4a60-acd9-06cf48334849.jpg.webp',
                      harga: 255000,
                      discount: 30
                    },
                    {
                      title: 'Sarung Sandaran Tempat Tidur Motif Cover Kepala Tempat Tidur - Scandinavian, Size S',
                      image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/6/30/0ecbc496-c0c9-43e8-bf00-2e21d5d8525e.jpg.webp',
                      harga: 140000
                    },
                    {
                      title: 'Kahf Humbling Forest Eau de Toilette 35 ml',
                      image: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2020/12/28/882476e4-3fcc-49c8-8ecd-26f9823d6868.jpg.webp?',
                      harga: 88000,
                      discount: 26
                    },
                    {
                      title: 'NORVUS Disinfektan Spray & Pengharum Ruangan 2x 550ml - Lavender Blsom',
                      image: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/2/24/9874eb78-77c2-49ef-a097-2182656005c8.jpg.webp?',
                      harga: 130000
                    },
                    {
                      title: 'Rubik Piramid Cube 3x3x3 Black Series Yuxin',
                      image: 'https://images.tokopedia.net/img/cache/200-square/product-1/2020/4/22/25185711/25185711_f55b20bc-a835-483f-ba0a-d8402a1270ba_785_785.webp',
                      harga: 150000,
                      discount: 20
                    },
                    {
                      title: 'Bantal Guling Anak Motif Cowok Termurah - Spiderman',
                      image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/10/9/4cdf7c71-83bb-4016-9cbe-685d220bb5e8.jpg.webp',
                      harga: 120000
                    },
                    {
                      title: 'NORVUS Disinfektan Spray & Pengharum Ruangan 2x 550ml - Lavender Blsom',
                      image: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/2/24/9874eb78-77c2-49ef-a097-2182656005c8.jpg.webp?',
                      harga: 100000
                    }
                ];
var dataOri = [...dataProduct];
var product = document.getElementById('productList');
var sorting = document.getElementById('sorting');

function formatRupiah(harga, prefix){
  var number_string = String(harga).replace(/[^,\d]/g, '').toString(),
  split       = number_string.split(','),
  sisa        = split[0].length % 3,
  rupiah        = split[0].substr(0, sisa),
  ribuan        = split[0].substr(sisa).match(/\d{3}/gi);

  if(ribuan){
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? 'Rp' + rupiah : '');
}

function discount(harga, diskon) {
  var resultDiscount = harga-(harga*diskon/100);
  return resultDiscount;
}

function hargaTertinggi() {
  dataProduct.sort(function(a,b) {
    return b.harga - a.harga;
  });
}

function hargaTerendah() {
  dataProduct.sort(function(a,b) {
    return a.harga - b.harga;
  });
}

function keluarkanData(data) {
  var content = '';
  // var elementDiskon = '';
  // var elementHargaDiskon = '';
  data.forEach(function(val, idx) {
    // if (val.discount != undefined) {
    //   elementDiskon = '<p class="product-percent">' + val.discount + '%' + '</p>';
    //   elementHargaDiskon = '<p class="product-discount">' + '<del>' + formatRupiah(discount(val.harga, val.discount), '')+ '</del>' + '</p>';
    // }
      content += '<div class="col-3">' + 
                    '<div class="product-item">' +
                      '<a href="#" class="box-link"></a>' +
                      '<div class="product-image">' + '<img src="'+val['image']+'" alt="'+val['title']+'">' + '</div>' +
                      '<div class="product-text">' +
                        '<p class="product-title">' + val.title + '</p>' +
                        // elementDiskon +
                        '<h3 class="product-price">' + formatRupiah(val.harga, '') + '</h3>' +
                        // elementHargaDiskon +
                      '</div>' +
                    '</div>' +
                  '</div>';
  });
  product.innerHTML = content;
}

sorting.onchange = function() {
  var data = dataProduct;
  if (this.value == 1) {
    hargaTertinggi();
  } else if (this.value == 2) {
    hargaTerendah();
  }  else if (WHITESPACE.test(this.value)) {
    data = dataOri;
  }
  keluarkanData(data);
}

keluarkanData(dataProduct);
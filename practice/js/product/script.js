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
                      title: 'Rubik Piramid Cube 3x3x3 Black Series Yuxin',
                      image: 'https://images.tokopedia.net/img/cache/200-square/product-1/2020/4/22/25185711/25185711_f55b20bc-a835-483f-ba0a-d8402a1270ba_785_785.webp',
                      harga: 150000,
                      discount: 20
                    }
                ];

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

var content = '';
var price, discount, resultDiscount;
function keluarkanData(value){
  price = value.harga;
  discount = value.discount;

  resultDiscount = price - ( price*discount/100 );

  if (value['discount'] > 0) {
    content += 
    '<div class="col-3">' + 
      '<div class="product-item">' +
        '<a href="#" class="box-link"></a>' +
        '<div class="product-image">' + '<img src="'+value['image']+'" alt="'+value['title']+'">' + '</div>' +
        '<div class="product-text">' +
          '<p class="product-title">' + value['title'] + '</p>' +
          '<p class="product-percent">' + value['discount'] + '%' + '</p>' +
          '<h3 class="product-price">' + formatRupiah(value.harga, '') + '</h3>' +
          '<p class="product-discount">' + '<del>' + formatRupiah(resultDiscount, '') + '</del>' + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';
  } else {
    content += 
    '<div class="col-3">' + 
      '<div class="product-item">' +
        '<a href="#" class="box-link"></a>' +
        '<div class="product-image">' + '<img src="'+value['image']+'" alt="lorem">' + '</div>' +
        '<div class="product-text">' +
          '<p class="product-title">' + value['title'] + '</p>' +
          '<h3 class="product-price">' + formatRupiah(value.harga, '') + '</h3>' +
        '</div>' +
      '</div>' +
    '</div>';
  }
};

dataProduct.forEach(keluarkanData);

document.getElementById('productList').innerHTML = content;
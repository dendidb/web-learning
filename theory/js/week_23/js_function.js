JS Function
--

- Void function

function functionName() {
  console.log('ini text dari function');
}

- Paramater function 

function functionName(param1, param2, param3, ...) { }
example :

function kelilingPersegiPanjang(panjang, lebar) {
  var keliling = 2 * (panjang + lebar);
  console.log('keliling dari persegi panjang adalah' + keliling);
}
kelilingPersegiPanjang(20, 30);

function kota(provinsi) {
  var kota = {
    jawa_barat: "Bandung",
    jawa_timur: "Surabaya",
    jawa_tengah: "Semarang"
  };
  console.log(kota[provinsi]);
}

kota();

// example function with Paramater

function setContent(element='A', value='Rp100.000') {
  document.getElementByID('harga'+element).innerText = value;
}

function setCard() {
  setContent();
  setContent('B', 'Rp20.000');
};

console.log(setCard);

// example function in variable

var name = {
  name: function(name='jaka') {
    console.log(name);
  }
};

name.name(Jhon);

// function return

function getName(name='jhon'){
  return name;
}

var getN = getName();
console.log(getN);







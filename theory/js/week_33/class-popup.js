JavaScript Classes (ES 6)
this: class -> mengacu kepada className 

// nama class menggunakan pascal case
class className {
  constructor() {

  }
  method1() {

  }
  method2() {

  }
}

contoh penulisan :

// object literal
popup = {
  open: () => {

  },
  show: () => {

  }
};





// Object Class
class Person {
  construtor(firstName, className) {
    console.log(firstName + ' ' + lastName)
  }
}

Attibute Class
- Constructor: method/function yang pertama kali dijalankan
- Property: data yang disimpan ke dalam object
- Class method: method/function yang memiliki sebuah object
- Static method
- Getter & setter
- Inheritance : memiliki constructor dan method yang sama terhadap parent class
// contoh kodingan nya (beda penulisan)
class Person {
  contructor(firstname, lastname) {
    this.namaDepan = firstName;
    this.namaBelakakang = lastName;
  }
  fullName() {
    return this.namaDepan + ' ' + this.namaBelakang;
  }
}
var namaLengkap = new Person('John', 'Doe');
console.log(namaLengkapp.fullName());


// contoh yang pake extends (syaratnya harus pake camelCase)
class rumah extends Person {
  getLastName() {
    return this.namaBelakang;
  }
}

var namaPemilik  = new Person ('Dendi', 'Yogi');
console.log('namaPemilik' , 'getLastName'());


contoh js yang penulisan function-nya pake literal

var popup = {
  handleOpen: () => {
    document.getElementById('openPopup').onclick = funtion() {
      popUp.setStatusShow(true);
    }
  },
  handleClose: () => {
    document.getElementById('closePopup')
  }
}


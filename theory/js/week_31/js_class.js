JS Class (ES6)
--

// nama class menggunakan pascal case
class ClassName {
  constructur() {

  }

  method1() {

  }
  method2() {

  }
}

class Person {
  constructur(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
  }
}

Attribute class
- constructur: method/function yang pertama kali di jalankan
- property: data yang di simpan ke dalam object
- class method: method/function yang dimiliki sebuah object
- static method:
- Getter & setter
- Inheritance: memiliki constructur dan method yang smaa

// object class
new person('Erick', 'Sermon');

class Popup {
  constructur(firstName, lastName) {
  }
  
  open(){
    console.log('open');
  }

  close(){
    console.log('close');
  }

  init() {
    this.open();
    this.close();
  }
}
// call class
new person().init();

// object Literal
var popup = {
  open: () => {

  },
  show: () => {
    
  }
}

class Person {
  constructur(firstName, lastName) {
    this.namaDepan = firstName;
    this.namaBelakang = lastName;
  }

  fullName() {
    return this.namaDepan + ' ' + this.namaBelakang;
  }
}

class Rumah extends person {
  getLastName() {
    return.namaBelakang;
  }
}


var namaPemilik = new Person('Sulaiman', 'Medan');
console.log(namaPemilik.getLastName());






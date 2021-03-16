JS Classes -> ES6


this: class -> mengacu kepada className

// nama class menggunakan Pascal Case
class className {
  constructor() {

  }
  method1() {

  }
  method2() {

  }
}

class HandlePopup {
  constructor(firstname, lasltname) {
    this.firstname = firstName;
  }
  fullName() {
    return.this.firstName + ' ' + this.lastName;
  }

  close() {
    console.log('close');
  }

  init(status) {
    this.open(status);
    this.close();
  }
}

var HP = new HandlePopup('John', 'Doe');
console.log(HP.fullName())
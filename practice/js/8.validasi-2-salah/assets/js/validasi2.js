const WHITESPACE = /^ *$/;

var nama = document.getElementById('nama'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    telepon = document.getElementById('telepon');


var elementEvents = ['nama', 'email', 'password', 'telepon'];

var loginForm = {
  handleOnInput: function() {
    this.forEach(function(v, i){
      document.getElementById(v).oninput = function() {
        loginForm.checkValidation(this);
      }
    });
  },
  handleOnBlur: function() {
    elementEvents.forEach(function(v, i){
      document.getElementById(v).onblur = function() {
        loginForm.checkValidation(this);
      }
    });
  },
  checkValidation: function(selector) {
    var _val = selector.value,
    _target = selector.getAttribute('data-target'),
    _alertElement = document.getElementById(_target);
    console.log(_target)


    _alertElement.classList.add('d-none');
  // jika kosong
  if (WHITESPACE.test(_val)) {
    var _errorMessage = _alertElement.getAttribute('data-req');
    _alertElement.innerText = _errorMessage;
    _alertElement.classList.remove('d-none');
  }
},
init: function() {
  this.handleOnInput();
  this.handleOnBlur();
  }
};

loginForm.init();
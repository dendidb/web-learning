const WHITESPACE = /^ *$/,
REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
REGEX_PHONE = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

// var nama = document.getElementById("nama"),
//   kuy = document.getElementById("email"),
//   password = document.getElementById("password"),
//   telepon = document.getElementById("telepon");

var elementEvent = ["nama", "email", "password", "telepon",];

var loginForm = {
  handleOnInput: function () {
    elementEvent.forEach(function (v, i) {
      document.getElementById(v).oninput = function () {
        loginForm.checkValidation(this);
      };
    });
  },
  handleOnBlur: function () {
    elementEvent.forEach(function (v, i) {
      document.getElementById(v).onblur = function () {
        loginForm.checkValidation(this);
      };
    });
  },
  checkValidation: function (selector) {
    var _val = selector.value,
    _target = selector.getAttribute("data-target"),
    _alertElement = document.getElementById(_target);
    _alertElement.classList.add("d-none");
    // jika kosong
    if (WHITESPACE.test(_val)) {
      var _errorMessage = _alertElement.getAttribute("data-req");
      _alertElement.innerText = _errorMessage;
      _alertElement.classList.remove("d-none");
    } else if (_target == "alertEmail") {
      if (!REGEX_EMAIL.test(_val)) {
        var _errorMessage = _alertElement.getAttribute("data-invalid");
        _alertElement.innerText = _errorMessage;
        _alertElement.classList.remove("d-none");
      }
    }
  },


  init: function () {
    this.handleOnInput();
    this.handleOnBlur();
  },
};

//  validasi email

loginForm.init();

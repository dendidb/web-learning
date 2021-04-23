const WHITESPACE = /^ *$/;
const EMAIL = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const NUMBERS = /^[0-9]+$/;

var elementSelector = [
                            {
                              id: 'name',
                              validation: {
                                required: true
                              }
                            },
                            {
                              id: 'email',
                              validation: {
                                required: true,
                                email: true
                              }
                            },
                            {
                              id: 'password',
                              validation: {
                                required: true,
                                minimum: true,
                                minimumChar: 8
                              }
                            },
                            {
                              id: 'phone',
                              validation: {
                                required: true,
                                phone: true
                              }
                            }
                          ],
    elementEvents = ['oninput', 'onblur'];

var validationForm = {
  handleOnInput: function() {
      elementEvents.forEach(function(ve, ie) {
      elementSelector.forEach(function(v, i) {
        document.getElementById(v.id)[ve] = function() {
          var _val = this.value,
          _target = this.getAttribute('data-target'),
          _alertElement = document.getElementById(_target),
          _errorMessage;

          _alertElement.classList.add('d-none');
          _alertElement.classList.remove('error');
          // email validation
          if(v.validation.email) {
            if (!EMAIL.test(_val)) {
              _errorMessage = _alertElement.getAttribute('data-invalid-email');
            }
          }
          // password validation
          if(v.validation.minimum) {
            if (_val.length < v.validation.minimumChar) {
              _errorMessage = _alertElement.getAttribute('data-invalid-password');
            }
          }
          // phone validation
          if(v.validation.phone) {
            if (!NUMBERS.test(_val)) {
              _errorMessage = _alertElement.getAttribute('data-invalid-phone');
            }
          }
          // required validation
          if (WHITESPACE.test(_val)) {
            var _errorMessage = _alertElement.getAttribute('data-req');
          }
          // erro Massage
          if (_errorMessage !== undefined) {
            _alertElement.innerText = _errorMessage;
            _alertElement.classList.remove('d-none');
            _alertElement.classList.add('error');
          }
        }
      });
    });
  },
  handleOnClick: function() {
    document.getElementById('button').onclick = function(e) {
      elementSelector.forEach(function(v, i) {
        document.getElementById(v.id).onblur();
      });

      if (document.getElementsByClassName('error').length > 0) {
        e.preventDefault();
      }
    }
  },
  handleOnKeyPress: function() {
    document.getElementById('phone').onkeypress = function(e) {
      if (!NUMBERS.test(e.key)) {
        e.preventDefault();
      }
    }
  },
  init: function() {
    this.handleOnInput();
    this.handleOnClick();
    this.handleOnKeyPress();
  }
}

validationForm.init();
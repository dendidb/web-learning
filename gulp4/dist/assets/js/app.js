(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _components = require("./components");

// App
var App = function () {
  // run transition
  var runTransition = function runTransition() {
    $('body').removeClass('.hold-transition');
  }; // ready 


  var ready = function ready() {
    (function ($) {
      // --- Global
      runTransition(); // --- Project

      _components.Accordion.init();

      _components.Popup.init();
    })(jQuery);
  }; // -- load


  var load = function load() {
    (function ($) {
      $(window).on('load', function () {// run function on load finished
      });
    })(jQuery);
  }; // Init


  var init = function init() {
    ready();
    load();
  };

  return {
    init: init
  };
}(); // App


App.init();

},{"./components":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Accordion = function () {
  // handleClick
  var handleClick = function handleClick() {
    $('.js-accordion').on('click', function (e) {
      console.log($(e.currentTarget).attr('data-value'));
    });
  }; // handleRemoveDiv


  var handleRemoveDiv = function handleRemoveDiv() {
    console.log('div');
  }; // init 


  var init = function init() {
    handleClick();
  };

  return {
    init: init,
    removeDiv: handleRemoveDiv
  };
}();

var _default = Accordion;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./index");

var Popup = function () {
  // handleClick
  var handleClick = function handleClick() {
    $('.js-popup').on('click', function (e) {
      console.log($(e.currentTarget).attr('data-value'));
    });
  }; // handleKeyUp 


  var handleKeyUp = function handleKeyUp() {
    console.log('keyup berhasil');
  }; // init 


  var init = function init() {
    handleClick();
  };

  return {
    init: init
  };
}();

var _default = Popup;
exports["default"] = _default;

},{"./index":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Accordion", {
  enumerable: true,
  get: function get() {
    return _Accordion["default"];
  }
});
Object.defineProperty(exports, "Popup", {
  enumerable: true,
  get: function get() {
    return _Popup["default"];
  }
});

var _Accordion = _interopRequireDefault(require("./Accordion"));

var _Popup = _interopRequireDefault(require("./Popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./Accordion":2,"./Popup":3}]},{},[1])

//# sourceMappingURL=maps/app.js.map

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function fn() {
  console.log(1);
}

var a = 100;
console.log(a);

var fn1 =
/*#__PURE__*/
function () {
  function fn1() {
    _classCallCheck(this, fn1);
  }

  _createClass(fn1, [{
    key: "eat",
    value: function eat() {}
  }]);

  return fn1;
}();

setInterval(function () {
  var a = 10;
  console.log(a);
});
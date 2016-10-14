'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Salman';

    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: 'greet',
    value: function greet() {
      alert(this.name + ', Hello.');
    }
  }]);

  return Person;
}();

var pr = new Person();
pr.greet();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJQZXJzb24iLCJuYW1lIiwiYWxlcnQiLCJwciIsImdyZWV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUE7QUFDSixvQkFBNEI7QUFBQSxRQUFoQkMsSUFBZ0IsdUVBQVQsUUFBUzs7QUFBQTs7QUFDMUIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7NEJBRU07QUFDTEMsWUFBUyxLQUFLRCxJQUFkO0FBQ0Q7Ozs7OztBQUlILElBQUlFLEtBQUssSUFBSUgsTUFBSixFQUFUO0FBQ0FHLEdBQUdDLEtBQUgiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBlcnNvbntcbiAgY29uc3RydWN0b3IobmFtZSA9ICdTYWxtYW4nKXtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ3JlZXQoKXtcbiAgICBhbGVydChgJHt0aGlzLm5hbWV9LCBIZWxsby5gKTtcbiAgfVxufVxuXG5cbmxldCBwciA9IG5ldyBQZXJzb24oKTtcbnByLmdyZWV0KCk7XG4iXX0=

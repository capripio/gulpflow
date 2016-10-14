var Person = (function () {
    function Person(name) {
        this.person_name = name;
    }
    Person.prototype.greet = function () {
        alert(this.person_name + ", Hello!");
    };
    return Person;
}());
var person = new Person("Mirza");

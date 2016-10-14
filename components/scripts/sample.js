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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVFLGdCQUFZLElBQVk7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUNELHNCQUFLLEdBQUw7UUFDRSxLQUFLLENBQUksSUFBSSxDQUFDLFdBQVcsYUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNILGFBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQUNELElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6InNhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBlcnNvbntcbiAgcGVyc29uX25hbWU6IHN0cmluZztcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKXtcbiAgICB0aGlzLnBlcnNvbl9uYW1lID0gbmFtZTtcbiAgfVxuICBncmVldCgpe1xuICAgIGFsZXJ0KGAke3RoaXMucGVyc29uX25hbWV9LCBIZWxsbyFgKTtcbiAgfVxufVxubGV0IHBlcnNvbiA9IG5ldyBQZXJzb24oXCJNaXJ6YVwiKTtcbiJdfQ==

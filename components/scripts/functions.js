class Person{
  constructor(name = 'Salman'){
    this.name = name;
  }

  greet(){
    alert(`Hello, ${this.name}`);
  }
}


let pr = new Person('Asif');
pr.greet();

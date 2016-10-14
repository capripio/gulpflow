class Person{
  person_name: string;
  constructor(name: string){
    this.person_name = name;
  }
  greet(){
    alert(`${this.person_name}, Hello!`);
  }
}
let person = new Person("Mirza");

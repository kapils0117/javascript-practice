// this refers to the current object (instance) that is using the class.
//Use of this in constructor: name → input parameter,..     this.name → property of the object, Store the given name inside this object.
//name:  value passed to constructor
// this.name:  property of the object
//name = ... only changes a local variable, but this.name = ... stores data inside the object.
// Use of this in function (method):   this.name refers to the name of the object calling the method



class Person {
  #age;  // # indicates private variable

  constructor(age) {
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value > 0) {
      this.#age = value;
    } else {
      console.log("Invalid age");
    }
  }
}

const p = new Person(25);

console.log(p.age);  // 25
p.age = -5;          // Invalid age


// this refers to the current object (instance) that is using the class.
//Use of this in constructor: name → input parameter,..     this.name → property of the object, Store the given name inside this object.
//name:  value passed to constructor
// this.name:  property of the object
//name = ... only changes a local variable, but this.name = ... stores data inside the object.
// Use of this in function (method):   this.name refers to the name of the object calling the method




class Person {
    constructor() {
        this.name = "Kapil";
        this.age = 27;
    }

}
//Non-Parameterized Constructor
let p1 = new Person(); // here no need to call constructor method as it will get called automatically when object is created.

console.log(p1.name); // Kapil
console.log(p1.age);  // 27




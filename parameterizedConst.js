
// this refers to the current object (instance) that is using the class.
//Use of this in constructor: name → input parameter,..     this.name → property of the object, Store the given name inside this object.
//name:  value passed to constructor
// this.name:  property of the object
//name = ... only changes a local variable, but this.name = ... stores data inside the object.
// Use of this in function (method):   this.name refers to the name of the object calling the method



//Parameterized Constructor
class Globe{
constructor(names, ages) {
        this.names = names;
        this.ages = ages;
}}

//Parameterized const

let s1 = new Globe("John", 44);
let s2 = new Globe("Cena", 88);

console.log(s1.names); // Kapil
console.log(s2.names); // Rahul


// ✅ Print age also
console.log(s1.ages); // 27
console.log(s2.ages); // 30

//OR

console.log(s1.names, s1.ages); // Kapil 27
console.log(s2.names, s2.ages); // Rahul 30

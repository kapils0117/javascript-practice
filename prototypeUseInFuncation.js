
//PROTOTYPE USE IN FUNCTION
// //Add variables to the function using prototype


// Prototype is an object that is associated with every function & object by default.
//If we want to add new properties to a function/class at later stage, then we can use prototype
// Prototypes allow objects to inherit properties and methods from other objects.


function stud() {
    this.a = "amar"; //this.a and this.b become properties of the object s
    this.b = "kap";
}


stud.prototype.age=35;

let s = new stud();
//s.age='30'; // instead of this we will use protype.age above which each new object can use
console.log(s.a, s.b); // ✅ amar kap

//Now adding one more variable 'age' using prototype
console.log(s.a, s.b, s.age); // ✅ amar kap 30

//Now suppose we create another object s1 and want to access age variable then it won't allow to do so

let s1 = new stud();
console.log(s1.a, s1.b, s1.age); // age=undefined so to over come this problem we can use prototype keyword
//To over come this problem we can use prototype keyword before creating object
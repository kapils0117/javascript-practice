 //Methods in JavaScript
//A method is simply a function that is a property of an object.
//person is an object below and we can create method inside object in JS
// Key Difference Between Function & Method

//Function= Standalone block of code, 2. Not tied to an object, 3. access like functionName() , 4 Use of this  Depends on calling context
//Method = Function inside an object, 2. Belongs to an object , 3. Access like objectName.methodName(), 4. Refers to object it belongs to

//this: In methods, this refers to the object calling the method
 
let person = {
    name: "Kapil",
    greet: function() {
        return "Hello, " + this.name;
    }
};

// Calling a method
console.log(person.greet());

// Functions & Methods declaration 

function sayHi() {
    console.log("Hi!");
}

const user = {
    sayHi: function() {
        console.log("Hi from user!");
    }
};

sayHi();          // Function call
user.sayHi();     // Method call
 
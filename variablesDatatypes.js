// Java script basically a dynamic typed language means no need to specify any data type like int, string, boolean like java,  c++, etc, It assign data type automatically as per data or value.

//variablies : are containers for storing data values
//We can create variables using let, var & const keywords 

//var x; //Declaration
//x=10; //Initialization

//var x=10; //Declaration and Initialization in a single line


// Multiple variable in single line
//var x=15, y=6;
//document.write(x)
//console.log(x)

//let z="welcome";
//console.log(z)

// var is function scope and let is block scope, it is preferred to use let and not use var in modern javascript.

//console.log(s) // it will print undefined and undefined is one of the data type in JS
//var s="hello world"
//console.log(s) // output- it will print undefined and then hello world in console

//console.log(s) // it will not print undefined with LET 
//let s="hello world"
//console.log(s) // output- it will give error 

//Const: once declared the value can not be changed

const t=33;
console.log(t);
//t=55;
//confirm.log(t); // it will give error bcoz t value can not be changed as it was declared as const 
//Uncaught TypeError: Assignment to constant variable.

//Data Types
//Primitive Data type: Number, String, Null, Boolean, Undefined
//Non Primitive: Object, Array, Function, Data, Regx.

// Data Types
let x=100;
console.log(typeof(x)); // number

let s=100.99;
console.log(typeof(s)); // number


let v="kapil";
console.log(typeof(v)); // string

let f=false
console.log(typeof(f)); // boolean

let status=null;
console.log(typeof(status)); // object

let stat;
console.log(typeof(stat)); // undefined
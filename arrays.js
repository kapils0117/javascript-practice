//An Array is an object type designed for storing data collections.
//Javascript arrays are used to store multiple values in a single variable

/*Key characteristics of JavaScript arrays are:
Elements: An array is a list of values, known as elements.
Ordered: Array elements are ordered based on their index.
Zero indexed: The first element is at index 0, the second at index 1, and so on.
Dynamic size: Arrays can grow or shrink as elements are added or removed.
Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
*/

/*let cars= ['hi', 'hello', 'bye']
console.log(cars)

//Other way to create an array
let  obj = new Array("Saab", "Volvo", "BMW");
console.log(obj)
//Access array elements
console.log(obj[0])
console.log(obj[2])
//console.log(obj[3])- undefined

//Modify Array element
obj[0]='data'
console.log(obj)
*/

//Store different data types in an array
let dj=[10, 'cello', 1.4, 'bash']
console.log(dj)

//Store objects in an array means array can store / hold an object also
let person1={
    name:'arun',
    age:34,
    sex:'male'
};
let person2={
    name:'varun',
    age:32,
    sex:'female'
};
let myarray1=[person1, person2];
console.log(myarray1)
console.log(myarray1[0])

let fruits =[12, 'hello', 12.4]
console.log("lenngth is"  + " " + fruits.length)     //3

//LOOPING in array to get each element

//for loop
let numbers = [10, 20, 30, 40];
console.log("PRINT TYPE" + " "+typeof dj)
console.log(Array.isArray(dj))

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Using a for...of loop


let arr = [10, 20, 30, 40, 50];

for ( objj of arr) {
    console.log("this is for of loop" + " " +objj);
}

// / Using a forEach() method

let arr2 = [10, 20, 30, 40, 50];

arr2.forEach(function(value, index) {
    console.log(index, value);
});
//Using a while loop

let arr1 = [10, 20, 30, 40, 50];
let i = 0;

while (i < arr1.length) {
    console.log(arr1[i]);
    i++;
}


console.log("another object array-------------------------------------")
// First array with one object
/*let students = [
    { name: "Amit", age: 20, marks: 85 }
];

// Second array with two objects
let students1 = [
    { name: "Priya", age: 22, marks: 90 },
    { name: "Rahul", age: 19, marks: 75 }
];

console.log(students[0].name);   // Amit

console.log(students1[0].name);  // Priya
console.log(students1[1].marks); // 75

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
*/
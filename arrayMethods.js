/*Basic Array Methods
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array isArray()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array slice()
Array splice()
Array toSpliced()
*/

//Array length

let arr = [1, 2, 3];
console.log(arr.length); // 3

 //Array.toString(): Converts array to comma-separated string.

let arr1 = [1, 2, 3];
console.log(arr1.toString()); // "1,2,3"


let arr2 = ["kap", "apple", "kiwi", "mango"];
console.log(arr2.toString()); // 
console.log(arr2); // 

//Array.at(): Returns element at specific index (supports negative index).

let arr3 = [10, 20, 30];
console.log(arr3.at(1));  // 20
console.log(arr3.at(-1)); // 30

//Array.join(): Joins elements using a separator.

let arr4 = ["a", "b", "c"];
console.log(arr4.join("-")); // "a-b-c"

//Array.pop(): Removes last element.

let arr5 = [1, 2, 3];
arr5.pop();
console.log(arr5); // [1, 2]

// Array.push(): Adds element to end.

let arr6 = [1, 2];
arr6.push(3);
console.log(arr6); // [1, 2, 3]

//Array.shift():Removes first element.

let arr7 = [1, 2, 3];
arr7.shift();
console.log(arr7); // [2, 3]

//Array.unshift(): Adds element at beginning.

let arr8 = [2, 3];
arr8.unshift(1);
console.log(arr8); // [1, 2, 3]

// Array.isArray(): Checks if value is an array.

console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray("text")); // false


//Array delete: Removes element but leaves empty slot.

let arr9 = [1, 2, 3];
delete arr9[1];
console.log(arr9); // [1, empty, 3]

//Array.concat(): Merges arrays.

let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]

//Array.copyWithin(): Copies part of array within itself.

let arrs = [1, 2, 3, 4];
arrs.copyWithin(0, 2);
console.log(arrs); // [3, 4, 3, 4]


//Array.slice(): Returns portion of array (no change to original).

let arry = [1, 2, 3, 4];
console.log(arry.slice(2)); 

console.log(arry.slice(1, 3)); // [2, 3]

//Array.splice():Adds/removes elements (modifies original).

let arrr = [1, 2, 3];
arrr.splice(1, 1, 99);
console.log(arrr); // [1, 99, 3]

//Array.toSpliced(): Non-mutating version of splice().

let arrss = [1, 2, 3];
let newArr = arrss.toSpliced(1, 1, 99);

console.log(newArr); // [1, 99, 3]
console.log(arrss);    // [1, 2, 3]

//Sprt method: To sort numbers and alphabets


let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);



let num = [1,9,3,8,22,5,66,88];
num.sort();
console.log(num);
let text = "John Doe";
console.log(text)

let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
let answer2 = "He is called 'Johnny'";
console.log(carName1)
console.log(carName2)
console.log(answer2)

// /JavaScript Strings as Objects: Normally, JavaScript strings are primitive values, created from literals
let x = "John";
//But strings can also be defined as objects with the keyword new:

let y = new String("John");


/* String Methods: Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

String length
String charAt()
String charCodeAt()
String codePointAt()
String concat()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/

//String Length
let text1 = "ABCD ";
let length = text1.length;
console.log(length);

//String charAt(): Returns the character at a given index, Error: If index is out of range → returns empty string ""
console.log(text1.charAt(2))


let str1 = "Hello";

console.log(str1.charAt(1)); // "e"
console.log(str1.charAt(10)); // ""


//String at(): Returns the character at a given index, Supports negative indexing ✅ (main advantage), If index is out of range → returns undefined

let str = "Hello";

console.log(str.at(1));   // "e"
console.log(str.at(-1));  // "o" ✅ last character
console.log(str.at(10));  // undefined

//isInteger()

let x1=10
let y1=1.5
let z="x1"

console.log(Number.isInteger(x1)) //True
console.log(Number.isInteger(y1)) //false as it is float
console.log(Number.isInteger(z)) //False

//parseint(): Convert a string into a number

let num = parseInt("123");
console.log(num); // 123
//OR
console.log(Number.parseInt(num))

console.log(parseInt("12.99")); // 12

//concat(): Joins strings.
console.log("Hello".concat(" ", "World")); // "Hello World"

//includes(str): Checks if string contains substring.

console.log("Hello World".includes("World"));
//indexOf(str): Returns first index of substring.

let ss="Hello"
console.log("Hello".indexOf("e")); // 1)

//lastIndexOf(str): Returns last index of substring.
console.log("Hello world".lastIndexOf("o")); // 3

//startsWith(str): Checks if string starts with given text.
console.log("Javaframe".startsWith("Java")); // true)

//endsWith(str): Checks if string ends with given text.
console.log("Javaframe".endsWith("frame")); // true)

//slice(start, end): Extracts part of string.
console.log("Hello".slice(1, 4)); // "ell"

//substring(start, end): Similar to slice (no negative index).
console.log("Hello".substring(1, 4)); // "ell")

//toUpperCase(): Converts to uppercase.
console.log("hello".toUpperCase()); // "HELLO"
//toLowerCase(): Converts to lowercase.
console.log("HELLO".toLowerCase()); // "hello"

//trim(): Removes whitespace from both ends.
console.log("  hi  ".trim()); // "hi"
//trimStart(): Removes whitespace from start.
console.log("  hi".trimStart()); // "hi"
//trimEnd(): Removes whitespace from end.
console.log("hi  ".trimEnd()); // "hi"

//replace(search, value): Replaces first match.
console.log("Hello World".replace("World", "JS")); // "Hello JS")
//replaceAll(search, value): Replaces all matches.
console.log("a-b-b".replaceAll("b", "x")); // "a-x-x"

//repeat(count): Repeats string.
console.log("Hi".repeat(3)); // "HiHiHi")

//split(separator): Converts string into array.
console.log("a,b,c".split(",")); // ["a","b","c"]

//toString(): Converts to string.

let stros = 123;
console.log(stros.toString()); // "123"
//OR
let stross = 123;
console.log(Number.toString(stross));//123
//With Array

let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

//valueOf(): Returns primitive value. The valueOf() method can be used to convert a string object into a string.
let texts = new String("Hello World!");
let result = texts.valueOf();
console.log(result)


//Foreach()
let numbers = [1, 2, 3];

numbers.forEach(function(num) {
  console.log(num);
});


//filter(): filter() always returns a new array, 2. It does NOT change original array, 3. It needs a condition
let number = [1, 2, 3, 4];

let even = number.filter(num => num % 2 == 0);

//Numbers.filter(num => num % 2 == 0): This means take each number (num) and Check: num % 2 === 0. If true, include it in new array, If false, skip it

console.log(even);


let numb = [1, 2, 3, 4];
let odd = numb.filter(num => num % 2 !== 0);
console.log(odd);

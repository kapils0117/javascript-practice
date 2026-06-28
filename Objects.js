
let person = {
  firstname: "kapil",
  lastname: "verma",
  age: 32,
  rollno: 40
};

// Accessing existing properties
console.log(person.firstname);
console.log(person.age);
console.log('Gender' in person);  // check if this property exist in person object or not, it will return true or false


// Adding new property
person.city = "Noida";
person.isActive = true;


// Add new property
person["height"] = 5.8;



// Update existing property
person.age = 35;
person["firstname"] = "Kapil Kumar";

// Access new property
console.log(person.height);
console.log(person.city);
console.log(person.firstname);

// Delete a property
delete person.rollno;

// Check updated object
console.log(person);
console.log(person.rollno);//undefined
console.log("loop starts here");
// Loop through all properties
for (let i in person) {
  //  console.log(i);// it will print object name only not value
    console.log(person[i]);//it will print object value only not property name 

  //console.log(i + " : " + person[i]); // it will print property an its value also
}

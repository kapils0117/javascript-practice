//static keyword is used with classes to define static methods and static properties (variables) that belong to the class itself rather than to instances (objects).
//A static variable is shared across all instances of a class and accessed using the class name.
//Static - Belongs to Class, Access by ClassName.property(function/variables), Memory Shared
//NonStatic - Belongs to Object, Access by object.property(function/variables), Each object gets its own

class Counter {
  static count = 0; // static variable
  noncount = 0;

  static hello() {
    Counter.count++;
  }

  yellow() {
    this.noncount++; // instance variable increment
  }
}

const c1 = new Counter();
const c2 = new Counter();


// Static calls
Counter.hello();
Counter.hello();


// Instance calls
c1.yellow();
c2.yellow();


console.log(Counter.count); // ✅ 2
console.log(c1.noncount);   // ✅ 1
console.log(c2.noncount);   // ✅ 1



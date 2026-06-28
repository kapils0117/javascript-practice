


class Counter {
  static count = 0; // static variable

  constructor() {
    Counter.count++; // increment whenever object is created
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(Counter.count); // Output: 2

//
//We can use the new keyword with functions in JavaScript—but only with functions meant to act as constructors.
/*
function stu(){
    let a="amar";
    let b="kap";

}
let s= new stu();
console.log(s.a, s.b); // This will give undefined, undefined error bcoz a and b are local variables so we have to use this 

*/



//FIX 1: this.a and this.b become properties of the object s
function stud() {
    this.a = "amar"; //this.a and this.b become properties of the object s
    this.b = "kap";
}

let s = new stud();
console.log(s.a, s.b); // ✅ amar kap


//FIX 2:

function stur() {
    return {
        a: "amar",
        b: "kap"
    };
}

let s1 = new stur();
console.log(s1.a, s1.b); // ✅ amar kap


/*
//👉 Not all functions should be called with new.
//Wrong Usage

function add(a, b) {
  return a + b;
}

const result = new add(2, 3); // ❌ Not intended
console.log(result);
*/
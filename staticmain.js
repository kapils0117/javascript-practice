class Test{
static a=10;
b=20;

static m1(){
    console.log("I am static")
}

 m2(){
    console.log("I am non-static")
}

}
console.log(Test.a);// Accessig static variable and methods by class name
Test.m1();

let c=new Test(); // Accessig static variable and methods by creating object 
console.log(c.b);
c.m2();



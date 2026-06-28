class A{


 b=50;
show(){
     let a=100;
    console.log(a); // Here we will not use this keyword bcoz we have defined variable inside a function/method
}
display(){
    console.log(this.b) //b is a class property. Inside class methods, you must access properties using this
}


}
let c = new A();
c.show();
c.display();


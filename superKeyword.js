
//Same method name in both classes, means it is overriding and uses inheritance concept

class Parent {
    show() {
        console.log("Parent method");
    }
}

class Child extends Parent {
    show() {
        super.show(); // call parent method
        console.log("Child method");
    }
}

const obj = new Child();
obj.show();

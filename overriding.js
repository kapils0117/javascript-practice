//Method name must be same, Parameters must be same, Must be in inheritance (extends)
/*Cannot override:

final methods
static methods (they are hidden, not overridden)
private methods */


class Parent {
    show() {
        console.log("This is parent method");
    }
}

class Child extends Parent {
    show() {
        console.log("This is child method");
    }
}

const obj = new Child();
obj.show();




class C {
    a = 100;

    disc() {
        console.log(this.a);
        console.log("I am parent");
    }
}

class D extends C {
    b = 20;

    pool() {
        console.log(this.b);
        console.log("I am child");
    }
}

let e = new D();
e.pool();
e.disc();


class Payment {
    pay() {
        console.log("Processing payment...");
    }
}

class CreditCard extends Payment {
    pay() {
        console.log("Paid using Credit Card");
    }
}

class UPI extends Payment {
    pay() {
        console.log("Paid using UPI");
    }
}

let p = new CreditCard();
p.pay();

p = new UPI();
p.pay();

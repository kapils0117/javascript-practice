
class Bank {
    constructor(name) {
        this.bankName = name;
    }

    getInterestRate() {
        return 5;
    }

    display() {
        console.log("Bank:", this.bankName);
        console.log("Interest Rate:", this.getInterestRate());
    }
}


class SBI extends Bank {
    constructor(name) {
        super(name);  // ✅ call parent constructor
    }

    getInterestRate() {
        return 7; // ✅ overriding parent method
    }
}



class HDFC extends Bank {
    constructor(name) {
        super(name);  // ✅ must call super
    }

    getInterestRate() {
        return 8; // ✅ overriding
    }
}



let sbi = new SBI("SBI Bank");
sbi.display();

let hdfc = new HDFC("HDFC Bank");
hdfc.display();

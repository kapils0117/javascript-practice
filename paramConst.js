
// this refers to the current object (instance) that is using the class.
//Use of this in constructor: name → input parameter,..     this.name → property of the object, Store the given name inside this object.
//name:  value passed to constructor
// this.name:  property of the object
//name = ... only changes a local variable, but this.name = ... stores data inside the object.
// Use of this in function (method):   this.name refers to the name of the object calling the method



class C {
    //Method 1
    constructor(eids, names, grades) {  // Inside a class no need to use funcation keyword as prefix while creating a JS function
        this.eids=eids;
        this.names=names;        
        this.grades=grades;
    }
    
    display(){

        console.log(this.eid, this.name, this.grade);
    }
      

      disc(){
                console.log(this.eids, this.names, this.grades);

      }
    }

    let s = new C(11, "Brock", "Lesnar"); // To call a function we create an object of a class and store in a variable
    let s1 = new C(33, "Roll", "Rock");
    let s2 = new C(11, "Mike", "Shawn");
   s.disc();
   s1.disc()
   s2.disc()




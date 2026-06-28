//Class: A class is a logical entity which contains variables(properties) and methods. A class is a blueprint used to create objects.
//Objects: Objects are physical entity & an instance of a class.
//To call a function always create an object of class outside the class boundaries


// this refers to the current object (instance) that is using the class.
//Use of this in constructor: name → input parameter,..     this.name → property of the object, Store the given name inside this object.
//name:  value passed to constructor
// this.name:  property of the object
//name = ... only changes a local variable, but this.name = ... stores data inside the object.
// Use of this in function (method):   this.name refers to the name of the object calling the method


class Student {
    //Method 1
    sayHi() {  // Inside a class no need to use funcation keyword as prefix while creating a JS function
        console.log("Hi");
    }


    setDetails(){   //In this fucntion we have provided hard code value
        this.eid='101';
        this.name="Ravi";
        this.grade='A';
    }
    display(){

        console.log(this.eid, this.name, this.grade);
    }

    // Another way-  to provide arguments at run time.
      setArrow(eids, names, grades){
        this.eids=eids;
        this.names=names;        

        this.grades=grades;
      }

      disc(){
                console.log(this.eids, this.names, this.grades);

      }
    }

   let s = new Student(); // To call a function we create an object of a class and store in a variable
s.sayHi(); // calling function
s.setDetails();
 s.display();

 s.setArrow('101', "rahul", "B");
 s.disc();





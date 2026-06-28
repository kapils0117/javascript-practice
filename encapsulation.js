//Encapsulation is an object-oriented programming concept where:

//Data (variables) and methods (functions) are bundled together inside a class. Access to data is restricted/controlled using methods
//Wrapping data and controlling access to it using methods."
/* - Protects data from unauthorized access
 - Improves security
- Helps maintain clean & modular code
*/
class Student{
  
  constructor(){
   let name, marks;
  
  }

  getname(){
return this.name;
  }
setname(name){
    this.name=name;
  }

   getmarks(){
return this.marks;
  }
setmarks(marks){
    this.marks=marks;
  }

}

let ss= new Student();
ss.setname("Kapil");
ss.setmarks(88);

console.log(ss.getname(), ss.getmarks());
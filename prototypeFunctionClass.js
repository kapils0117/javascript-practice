
//PROTOTYPE USE IN FUNCTION
// //Add function to the class using prototype




class Employee{

 constructor(eid, name){
this.eid=eid;
this.name=name

 }
}


Employee.prototype.age=62
Employee.prototype.disc=function(){

    console.log(this.eid, this.name, this.age)
}

let obj1=new Employee(12, 'Raju'); // It can call disc method
obj1.disc();

let obj2=new Employee(22, 'Billu');// It can call disc method
obj2.disc();

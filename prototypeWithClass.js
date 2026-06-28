//Add variables to the class using prototype

class Employee{

 constructor(eid, name){
this.eid=eid;
this.name=name

 }
}

Employee.prototype.salary=40000;

let obj1=new Employee(12, 'Raju');
console.log(obj1.eid, obj1.name, obj1.salary)


let obj2=new Employee(22, 'Billu');
console.log(obj2.eid, obj2.name, obj2.salary)

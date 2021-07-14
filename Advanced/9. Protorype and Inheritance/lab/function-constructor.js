function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hi, my name is ${this.name}`);
};

let person = new Person("Pesho", 22);
let person2 = new Person("Gosho", 20);

employeePrototype = {
    employer = 'SoftUni',
    sayHi: function(){
        console.log('Hiii');
    }
}
function Employee(id, department) {
    this.id = id;
    this.department = department;
}
Employee.prototype = employeePrototype
let employee = new Employee('1010', 'It');
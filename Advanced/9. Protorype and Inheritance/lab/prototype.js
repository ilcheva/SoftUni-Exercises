let person = {
    name: "Pesho Goshev",
    age: 22,
};

let employee = {
    department: "development",
};

Object.setPrototypeOf(employee, person);

console.log(employee);
console.log(employee.__proto__);
console.log(Object.getPrototypeOf(employee));
//Use prototype property
console.log(employee.name);

//Loop through all properties including prototype's
for (const key in employee) {
    if (Object.hasOwnProperty(key)) {
        console.log("Own property: ", key);
    } else {
        console.log("Prototype's property", key);
    }
}

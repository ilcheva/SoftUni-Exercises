let person = {
    name: "Pesho",
    age: 20,
    hobby: "football",
};
// Add not numerable property
Object.defineProperty(person, "grades", {
    enumerable: false,
    value: [2, 3, 4, 5, 6],
});

//Change existing properties
Object.defineProperty(person, "hobby", {
    enumerable: false,
});

//Enumerable properties
for (const prop in person) {
    console.log(`${prop} -> ${person[prop]}`);
}

console.log("Not in for loop:", person.grades);

//Get current eternal properties of a field

let descriptor = Object.getOwnPropertyDescriptor(person,'grades')
console.log(descriptor);

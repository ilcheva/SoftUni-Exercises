let person = {
    name: "Pesho",
    age: 20,
    hobby: "football",
};

//Add read-only property
Object.defineProperty(person, "name", {
    writable: false,
});
console.log(person);
person.name = "Gosho";
console.log(person);

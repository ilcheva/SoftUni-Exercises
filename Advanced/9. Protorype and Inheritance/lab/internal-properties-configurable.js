let person = {
    name: "Pesho",
    age: 20,
    hobby: "football",
};
console.log(Object.getOwnPropertyDescriptor(person, "name"));

//Set configurable to false
Object.defineProperty(person, "name", {
    configurable: false,
});
Object.defineProperty(person, "name", {
    value: "Gosho",
});

//Add read-only property
Object.defineProperty(person, "name", {
    writable: false,
});

Object.defineProperty(person, "name", {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(person, "name"));

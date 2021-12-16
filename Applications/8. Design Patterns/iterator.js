let numbers = [1, 2, 3, 4, 5, 6]
// making associative array interable
let phones = {
    pesho: 123456,
    gosho: 456798,
    stamat: 953172,
    petkan: 9728463,

    // [Symbol.iterator]() {
    //     let names = Object.keys(this);

    //     return {
    //         next: () => ({
    //             value: names.shift(),
    //             done: names.length == 0,
    //         })
    //     }
    // }
    // same with generator 
    [Symbol.iterator]: function* () {
        let names = Object.keys(this)
        for (const name of names) {
            yield name;
        }
        // need to return undefined fot it to work like it should -- convention
        return undefined;
    }
}
for (const phone of phones) {
    console.log(phone);
}


/// generator
function* generateNames() {
    yield 'Pesho';
    yield 'Mariyka';
    yield 'Penka';
    yield 'Ivan';
}

let result = generateNames()
for (const name of generateNames()) {
    console.log(name);
}
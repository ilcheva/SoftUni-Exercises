let flyer = (state) => ({
    fly: () => console.log(`${state.name}:I believe I can fly!`)
})

let killer = (state) => ({
    kill: (personName) => console.log(`${state.name}: ${personName} I will kill you!`)
})

let helper = (state) => ({
    help: (personName) => console.log(`${state.name}: ${personName} I'm comming!`)
})

let createSuperhero = (name) => {
    let state = {
        name
    }
    return Object.assign(
        {},
        flyer(state),
        helper(state),
    );
}
let createVillian = (name) => {
    let state = {
        name
    }
    return Object.assign(
        {},
        flyer(state),
        helper(state),
        killer(state),
    );
}

let superman = createSuperhero('Superman')
let blackAdam= createVillian('Black Adam')
    blackAdam.kill('Pesho')
    superman.help('Pesho')
    blackAdam.fly()
// Human 
// -name

//     Superhero
//     -save
//     - invisible

//     Villan
//     -hurt
//     -fly

// Animal
// -fly
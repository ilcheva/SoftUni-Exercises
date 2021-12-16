class Human {
    constructor(name) {
        this.name = name;
    }
    help(human) {
        return `${this.name}: Hold on ${human.name} I'm comming`;
    }
}

class Superhero extends Human {
    constructor(human) {
        super(human.name);
        this.human = human;
    }
    help(human) {
        return `${this.human.help(human)}, and I will save you`;
    }
}
class Villan extends Human {
    constructor(human) {
        super(human.name);
        this.human = human;
    }
    help(human) {
        return `${this.human.help(human)}, and I will kill you`;
    }
}

let pesho = new Human('Pesho');
let hero = new Human('Superman');
let blackAdam = new Human('Black Adam')


hero = new Superhero(hero);
blackAdam = new Superhero(blackAdam);
blackAdam = new Villan(blackAdam);

console.log(blackAdam.help(pesho));
console.log(hero.help(pesho));

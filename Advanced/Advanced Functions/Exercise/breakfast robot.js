function solve() {
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            fat: 10,
            carbohydrate: 10,
            flavour: 10
        }
    }

    let stocks = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let commands = {
        restock: (microelement, quantity) => {
            stocks[microelement] += quantity;
            return 'Success';
        },
        prepare: (product, quantity) => {
            let recipe = Object.entries(recipes[product]);

            for (const [item, countNeeded] of recipe) {
                if (stocks[item] < countNeeded * quantity) {
                    return `Error: not enough ${item} in stock`;
                }
            }

            recipe.forEach(([item, countNeeded]) => {
                stocks[item] -= countNeeded * quantity;
            });
            return 'Success';
        },
        report: () => Object.entries(stocks)
            .map(([microelement, count]) => `${microelement}=${count}`)
            .join(' ')
    }
    return (input) =>{
        let [command, item, count] = input.split(' ')
        return commands[command](item, Number(count))
    }
}

let manager = solve();
manager("restock flavour 50")
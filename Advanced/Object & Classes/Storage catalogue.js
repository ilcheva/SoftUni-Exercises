function catalogue(input) {
    let products = {};
    input.forEach(line => {
        let [name, price] = line.split(' : ');

        price = Number(price)
        let letter = name[0];

        if (!products[letter]) {
            products[letter] = [];
        }
        products[letter].push({ name, price })
    });

    let sortedByLetter = Object.entries(products).sort((curr, next) => curr[0].localeCompare(next[0]));

    for (let i = 0; i < sortedByLetter.length; i++) {
        console.log(sortedByLetter[i][0]);

        let sortByName = sortedByLetter[i][1].sort((curr, next) => curr.name.localeCompare(next.name));
        sortByName.forEach(product => console.log(`  ${product.name}: ${product.price}`))

    }
}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
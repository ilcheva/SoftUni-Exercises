function solve(input) {
    let products = {};
    let towns ={};
    input.forEach(row => {
        let [town, product, priceText] = row.split(' | ');
        let price = Number(priceText);

        if (!products[product] || products[product].price > price) {
            products[product] = {
                town,
                price,
            };
        }
    });
    Object.keys(products).forEach(product => {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);

    })
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])

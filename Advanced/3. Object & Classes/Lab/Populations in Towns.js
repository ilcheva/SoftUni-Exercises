function solve(input) {


    let towns = input
        .map(x => x.split(' <-> '))
        .reduce(
            (acc, x) => {
                let currentTown = x[0];
                let currPopulation = Number(x[1]);

                if (!acc[currentTown]) {
                    acc[currentTown] = 0;
                }
                acc[currentTown] += currPopulation;
                return acc;
            },
            {}
        );

    Object
        .keys(towns)
        .forEach(town => console.log(`${town} : ${towns[town]}`));

}
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])
function solve(input) {
    let max = Number.MIN_SAFE_INTEGER;

    let output = input.reduce((acc, curr) => {
        if (curr >= max) {
            max = curr;
            acc.push(max)
        }
        return acc;
    }, []);
    console.log(output.join('\n'));
    
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])
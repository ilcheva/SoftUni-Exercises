function solve(matrix) {
    let maxNumbers = matrix
        .map(row => Math.max(...row))

    console.log(Math.max(...maxNumbers));

}
solve([[20, 50, 10],
[8, 33, 145]]);
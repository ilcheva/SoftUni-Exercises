function solve(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let currentElement = result.slice(-k);
        let sum = currentElement.reduce((a, x) => a + x, 0);
        result.push(sum);
    }
    console.log(result.join(' '));
    
}
solve(6, 3)
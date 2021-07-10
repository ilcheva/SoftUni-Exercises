function solve(num1, num2) {
    let lower = Math.min(num1, num2);
    let bigger = Math.max(num1, num2);
    let output = 0;
    for (let i = lower; i >= 0; i--) {
        if (bigger % i === 0 && lower % i === 0) {
            output = i;
            break;
        }
    }
    console.log(output);
    
}
solve(15, 5)
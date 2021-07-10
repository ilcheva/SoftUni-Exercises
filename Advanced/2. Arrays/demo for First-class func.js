let sum = (a, b) => a + b;
function calculate(operation, first, second) {
    let operationResult = operation(first, second);
    return operationResult;
}
let result = calculate(sum, 5, 10);
console.log(result);

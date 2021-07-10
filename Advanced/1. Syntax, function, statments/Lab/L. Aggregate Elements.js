function solve(input){
    let sum=0;
    let inverseSum =0;
    let concat ='';
    input.forEach(element => {
        sum += element;
        inverseSum += 1/ element;
        concat += element;
    });    
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);   
    
}
solve([1, 2, 3])

function solveWithFunctions(numbers){
    const sum = function(numbers) {
        let result =0;
        for (const number of numbers) {
            result += number;
        }
        return result;
    };
    const sumInverted = numbers => {
        let result = 0;
        for (const number of numbers) {
            result += 1/number;            
        }
        return result;
    }
    const concat = numbers => result = numbers.join('');
    console.log(sum(numbers));
    console.log(sumInverted(numbers));
    console.log(concat(numbers));
    
    
    
}
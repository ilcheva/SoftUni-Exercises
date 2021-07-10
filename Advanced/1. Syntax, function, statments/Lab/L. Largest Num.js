function solve(numOne, numTwo, NumThree) {
    let largest;
    if (numOne > numTwo && numOne > NumThree) {
        largest = numOne;
    } else if (numTwo > numOne && numTwo > NumThree) {
        largest = numTwo;
    } else if (NumThree > numOne && NumThree > numTwo) {
        largest = NumThree;
    }
    console.log(`The largest number is ${largest}.`);
}
solve(-3, -5, -22.5)
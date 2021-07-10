function solve(number = 5) {
    for (let i = 0; i < number; i++) {
        let result = '*'.repeat(number).split('').join(' ');

        console.log(result);
    }

}
solve(2)
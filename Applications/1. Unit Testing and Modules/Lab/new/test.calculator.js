const calc= require('./calculator')

let result1 = calc.sum(1,2);
if (result1 === 3){
    console.log(`Test #1 - successful`);
}else {
    console.log(`Test #1 - fail`);
}

let result2 = calc.sum(-1,2);
if (result2 === 1){
    console.log(`Test #2 - successful`);
}else {
    console.log(`Test #2 - fail`);
}
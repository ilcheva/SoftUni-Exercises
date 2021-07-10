function solve(fruit, weigth, price){
    weigth = weigth/1000;
    let money = weigth * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weigth} kilograms ${fruit}.`);
    
}
solve('orange', 2500, 1.80)
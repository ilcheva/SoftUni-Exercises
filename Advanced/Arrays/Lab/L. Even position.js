function solve(input) {
    let current=[];
    for (let i = 0; i < input.length; i++) {
        if(i%2===0){
          current.push(input[i]);
        }
        
    }
    console.log(current.join(' '));
    
}
solve(['20', '30', '40'])
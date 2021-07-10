function solve(input) {
    let propList = JSON.parse(input);
    let result = propList.reduce((acc, x) => ({ ...acc, ...x }), {})
    //let result = propList.reduce((acc,x)=> Object.assign({},acc,x),{};)
    return result;


}
solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)
function solution(array, sortType) {
    let arr = array;
    if (sortType == 'asc') {
        return ascending(arr);
    } else if (sortType == 'desc') {
        return descending(arr);
    }

    function ascending(x) {
        return x.sort((a, b) => a - b);
    }
    function descending(x) {
        return x.sort((a, b) => b - a);
    }
}

function solve(input, criteria) {
    let sortFunction = {
        asc: x => x.sort((a, b) => a - b),
        desc: x => x.sort((a, b) => b - a),
    }

    let func = sortFunction[criteria];
    return func(input);
}

solve([14, 7, 17, 6, 8], 'asc')
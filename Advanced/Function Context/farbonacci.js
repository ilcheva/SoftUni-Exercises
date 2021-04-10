function getFibonator() {
    let currentNum = 0;
    let nextNum = 1;

    function fibonacci() {
        let fibNum = currentNum + nextNum
        currentNum = nextNum;
        nextNum = fibNum;
        return currentNum;
    }

    return fibonacci;
}

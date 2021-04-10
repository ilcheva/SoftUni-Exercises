function solve(string) {
    let words = string
        .split(/[' .,!?-]/g)
        .filter(x => x != '')
        .map(x => x.toUpperCase())
        .join(', ')

    console.log(words);
    
}
solve('Hi, how are you?')
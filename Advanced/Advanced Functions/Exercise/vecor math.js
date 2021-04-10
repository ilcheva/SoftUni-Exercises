
solution = {
    add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
    multiply: (vec, scalar) => vec.map(e => e * scalar),
    length: ([x, y]) => Math.sqrt(x ** 2 + y ** 2),
    dot: ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2,
    cross: ([x1, y1], [x2, y2]) => x1 * y2 - y1 * x2,

}

solution.add([1, 1], [1, 0])
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.dot([2, 3], [2, -1]));
console.log(solution.cross([3, 7], [1, 0]));




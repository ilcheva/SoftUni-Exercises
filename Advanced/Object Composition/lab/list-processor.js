function solve(input) {

    const listProcessorBuilder = function () {
        let list = []
        return {
            add: text => list.push(text),
            remove: text => list = list.filter(x => x != text),
            print: () => console.log(list.join(',')),
        }
    }

    let listProcesser = listProcessorBuilder();
    input
        .map(x => x.split(' '))
        .forEach(([command, argument]) => listProcesser[command](argument));
}
solve(['add peter', 'add george', 'add peter', 'remove peter', 'print'])
class List {
    constructor(list = []) {
        this.list = [];
        this.size = 0;
    }
    add(value) {
        this.list.push(value);
        this.list.sort((a, b) => a - b);
        this.size += 1;
        // return sorted;
    }

    remove(value) {
        if (value < 0 || value >= this.list.length) {
            throw new Error("invalid index");
        }
        this.list.splice(value, 1);
        this.size -= 1;
    }
    get(value) {
        if (value <0 || value >= this.list.length) {
            throw new Error("invalid index");
        }
        return this.list[value];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

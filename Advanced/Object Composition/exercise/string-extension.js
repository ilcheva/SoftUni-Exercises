(() => {
    String.prototype.ensureStart = function (str = '') {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function (str = '') {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        return this.length == 0;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }
        let foundedSpace = this.indexOf(' ');
        if (foundedSpace == -1) {
            return this.substring(0, foundedSpace) + '...';
        } else {
            return this.substring(0, n - 3) + '...';
        }
    }

    String.format = function (word, ...params) {
    params.forEach((key, index) => {
        word = word.replace(`{${index}}`, key)
    });
    return word;
}
}) ()


var testString = 'the quick brown fox jumps over the lazy dog';
testString = testString.truncate(10)
console.log(testString)


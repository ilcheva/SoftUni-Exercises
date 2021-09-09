const describe = require('mocha').describe
const assert = require('chai').assert;


function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe('Char lookup', () => {
    it('', () => {
        assert.isUndefined(lookupChar(1, 0))
        assert.isUndefined(lookupChar('abv', 1.2));
        assert.isUndefined(lookupChar('abv', 'a'))
    })

    it('', () => {
        assert.equal(lookupChar('abv', -1), "Incorrect index");
        assert.equal(lookupChar('abv', 4), "Incorrect index");
    })
    it('', () => {
        assert.equal(lookupChar('abv', 0), "a");
        assert.equal(lookupChar('abv', 2), "v");
    })
})
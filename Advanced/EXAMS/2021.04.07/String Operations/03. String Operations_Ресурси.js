
const describe = require('mocha').describe
const assert = require('chai').assert;

const stringOperations = {
    stringSlicer: function (str) {
        return str.slice(0, 3) + '...';
    },
    wordChecker: function (word, text) {
        word = word.toLowerCase().trim();
        text = text.toLowerCase();

        if (text.includes(word)) {
            return word;
        } else {
            return `${word} not found!`;
        }
    },
    printEveryNthElement: function (n, arr) {
        n = Number(n);

        if (isNaN(n) || !Array.isArray(arr)) {
            throw new Error('The input is not valid!');
        }

        const outputArray = [];

        for (let i = 0; i < arr.length; i += n) {
            outputArray.push(arr[i]);
        }
        return outputArray;
    }
};
describe('stringOperations', function () {
    describe('string slicer', function () {
        it('is string', () => {
            //assert.isNaN(stringOperations.stringSlicer(2))
            assert.equal(stringOperations.stringSlicer('abc'), 'abc...')
            assert.equal(stringOperations.stringSlicer('ac'), 'ac...')
            assert.equal(stringOperations.stringSlicer('ajtgh'), 'ajt...')
        })
    }

    )
    describe('wordchecker', () => {
        it('word', () => {
            assert.equal(stringOperations.wordChecker('BLABLA', 'Blabla'), 'blabla')
            assert.equal(stringOperations.wordChecker('blabla', 'bla'), 'blabla not found!')
            assert.equal(stringOperations.wordChecker('BLABLA', 'BLABLA'), 'blabla')
        })

    })
    describe('print everything', () => {
        it('test', () => {
            //assert.equal(stringOperations.printEveryNthElement(1), [1, 2])
            assert.equal(stringOperations.printEveryNthElement(3, [1, 2, 3, 4, 5]), '1,4')
            assert.equal(stringOperations.printEveryNthElement('2', [2, 1, 4]), '2,4')
            assert.equal(stringOperations.printEveryNthElement(3, []), '')
        })
        it('error', () => {
           // assert.deepEqual(stringOperations.printEveryNthElement('af', [4,4,4]), 'Error: The input is not valid!')
            assert.throw(() => { stringOperations.printEveryNthElement('af', [4,4,4]) }, Error);
            assert.throw(() => { stringOperations.printEveryNthElement(2, 2) }, Error);
        })
    })
})

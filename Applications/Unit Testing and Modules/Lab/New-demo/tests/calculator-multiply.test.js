const expect = require('chai').expect;

const calc = require('../calculator');

describe('Calc Multiplication', function () {

    it('Should return positive number when multiplying two positive numbers', () => {
        let result = calc.multiply(2, 10)

        expect(result).to.equal(20);
    })
})
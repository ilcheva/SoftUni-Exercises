const assert = require('chai').assert;

const calc = require('../calculator');

describe('Calc Division', function () {
    it('Should return positive number when dividing two positive numbers', () => {
         let result = calc.divide(10,5);

        //Assert
        assert.equal(result, 2);
    });
    
})
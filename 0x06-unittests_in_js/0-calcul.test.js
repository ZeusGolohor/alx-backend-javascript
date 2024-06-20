const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(2.3, 4.7), 7);
    assert.equal(calculateNumber(0.1, 0.1), 0);
    assert.equal(calculateNumber(1.9, 1.9), 4);
    assert.equal(calculateNumber(1.1, 2.2), 3);
    assert.equal(calculateNumber(3.6, 1.2), 5);
  });
});

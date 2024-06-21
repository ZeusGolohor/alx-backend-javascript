const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('test for SUM', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('test for SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('test for DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('test Error for DIVIDE by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('test for SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
  });
  it('test for DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', -1.4, 0), 'Error');
  });
});

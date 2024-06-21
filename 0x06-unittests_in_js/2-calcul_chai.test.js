const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  it('test for SUM', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);;
  });
  it('test for SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('test for DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('test Error for DIVIDE by zero', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
  it('test for SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
  });
  it('test for DIVIDE', () => {
    expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
  });
});

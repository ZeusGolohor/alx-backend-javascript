const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('should calculate shipping using util', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
	const spy = sinon.spy(console, 'log');
	expect(stub.calledWith('SUM', 100, 20)).to.be.true;
	expect(spy.calledWith('The total is: 10')).to.be.true;
	stub.restore();
	spy.restore();
  });
});

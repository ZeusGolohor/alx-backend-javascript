const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('should calculate shipping using util', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
	sendPaymentRequestToApi(100, 20);
	expect(spy.calledWith('SUM', 100, 20)).to.be.true;
	spy.restore();
  });
});

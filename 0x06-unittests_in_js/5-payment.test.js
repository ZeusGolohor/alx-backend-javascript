const sendPaymentRequestToApi = require('./5-payment');
const utils = require('./utils.js');

const logSpy = jest.spyOn(console, 'log');
const calculateSpy = jest.spyOn(utils, 'calculateNumber');

beforeEach(() => {
  logSpy.mockClear();
  calculateSpy.mockClear();
});

afterEach(() => {
  logSpy.mockRestore();
  calculateSpy.mockRestore();
});

describe('sendPaymentRequestToApi', () => {
  it('should log the total', () => {
    sendPaymentRequestToApi(100, 20);
	expect(logSpy).toHaveBeenCalledTimes(1);
	expect(logSpy).toHaveBeenCalledWith('The total is: 120');
	expect(calculateSpy).toHaveBeenCalledTimes(1);
	expect(calculateSpy).toHaveBeenCalledWith('SUM', 100, 20);
  });
  it('should log the total amount', () => {
    sendPaymentRequestToApi(10, 10);
	expect(logSpy).toHaveBeenCalledTimes(1);
	expect(logSpy).toHaveBeenCalledWith('The total is: 20');
	expect(calculateSpy).toHaveBeenCalledTimes(1);
	expect(calculateSpy).toHaveBeenCalledWith('SUM', 10, 10);
  });
});

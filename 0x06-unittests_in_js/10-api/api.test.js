const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const url = 'http://localhost:7865';
  it('GET url', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200)
	  expect(body).to.be.equal('Welcome to the payment system');
	  done();
    });
  });
  it('GET /cart/:id', (done) => {
    request.get(`${url}/cart/360`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
	  expect(body).to.be.equal('Payment methods for cart 360');
	  done();
    });
  });
  it('GET /available_payments', (done) => {
    request.get(`${url}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
	  expect(JSON.parse(body))
	    .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
	  done();
    });
  });
  it('POST /login', (done) => {
    request.post(`${url}/login`, {json: {userName: 'Zeus'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
	  expect(body).to.be.equal('Welcome Zeus');
	  done();
    });
  });
});

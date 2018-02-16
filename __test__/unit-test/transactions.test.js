'use strict';
const Price = require('../../model/price');
const transactions = require('../../lib/transactions');

require('jest');

let address = '0xc1a30fd9f85d48c38a8f8733d450d059b7bba1b5';
describe('Valid Requests', () => {
  Price.remove({}, function() {
    console.log('collection removed');
  });
  beforeAll(() => {
    return transactions.ethTrans(address)
      .then(res => this.res = res)
      .catch(err => console.log(err));
  });

  it('should return a 200 OK on valid input', () => {
    expect(this.res.status).toEqual(200);
  });
  it('should return an object with data', () => {
    expect(this.res.body).toBeInstanceOf(Object);
  });
  it('should return a 200 OK on valid input', () => {
    expect(transactions.appendXfer(this.res.body, address)).toBeInstanceOf(Object);
  });

});

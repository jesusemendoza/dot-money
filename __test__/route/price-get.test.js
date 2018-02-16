'use strict';

const server = require('../../lib/server');
const superagent = require('superagent');
const Price = require('../../model/price');
require('jest');

describe.only('GET /api/v1/price', function () {
  beforeAll(server.start);
  afterAll(server.stop);
  afterAll(()=> {
    Price.remove({}, function() {
      console.log('collection removed');
    });  
  });

  describe('Valid Requests', () => {
    Price.remove({}, function() {
      console.log('collection removed');
    });
    beforeAll(() => {
      return new Price({
        'Date(UTC)': '8-15-2015',
        'Value': '1.36',
        'UnixTimeStamp': '1439596800',
      }).save();
    });
    beforeAll(() => {
      return superagent.get(`:${process.env.PORT}/api/v1/price`)
        .then(res => this.res = res)
        .catch(err => console.log(err));
    });

    it('should return a 200 OK on valid input', () => {
      expect(this.res.status).toEqual(200);
    });
    it('should return an object with data', () => {
      expect(this.res.body).toBeInstanceOf(Object);
    });
  });
});

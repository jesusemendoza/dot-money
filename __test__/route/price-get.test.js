'use strict';

const server = require('../../lib/server');
const superagent = require('superagent');
// const mocks = require('../lib/mocks');
const Price = require('../../model/price');
// const compute = require('../lib/compute');
// const MONGODB_URI = process.env.MONGODB_URI;
require('jest');

describe.only('GET /api/v1/price', function () {
  // beforeAll(() =>{
  //   //create an instance of Price
  //   mocks.price.createOne().then(data => this.mockData = data);
  // });
  beforeAll(server.start);
  afterAll(server.stop);

  describe('Valid Requests', () => {
    beforeAll(() => {
      return new Price({
        'Date(UTC)': '8-15-2015',
        'Value': '1.36',
        'UnixTimeStamp': '1439596800',
      }).save();
    });
    beforeAll(() => {
      return superagent.get(`:${process.env.PORT}/api/v1/price`)
        // .then(res => console.log(Object.keys(res)))
        // .then(res => console.log(res.body, res.status))
        .then(res => this.res = res)
        // .then(res => console.log(res.body))
        .catch(err => console.log(err));
    });

    it('should return a 200 OK on valid input', () => {
      console.log(this.res.body);
      expect(this.res.status).toEqual(200);
    });
    it('should return an object with data', () => {
      expect(this.res.body).toBeInstanceOf(Object);
    });
  });
});

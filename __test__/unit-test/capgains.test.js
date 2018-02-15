'use strict';

const capgains = require('../../lib/capgains');
require('jest');

describe.only('#Profit', function () {
  
let transaction = [{

    'id' : 0,
    'eth': 0.5,
    'val': 50,
    'usd': 25,
    'direction': 'in',
  },
  {
    'id' : 1,
    'eth': 1.2,
    'val': 100,
    'usd': 120,
    'direction': 'in',
  },
  {
    'id' : 2,
    'eth': 1.3,
    'val': 150,
    'usd': 195,
    'direction': 'out',
  },
  {
    'id' : 3,
    'eth': 0.4,
    'val': 125,
    'usd': 50,
    'direction': 'in',
  },
  {
    'id' : 4,
    'eth': 0.3,
    'val': 100,
    'usd': 30,
    'direction': 'in',
  },
  {
    'id' : 5,
    'eth': 0.8,
    'val': 50,
    'usd': 40,
    'direction': 'out',
  },
      
  ]; 

  let transaction0 = [{

    'id' : 0,
    'eth': 5.2,
    'val': 100,
    'usd': 25,
    'direction': 'in',
  },
  {
    'id' : 1,
    'eth': 0.8,
    'val': 50,
    'usd': 120,
    'direction': 'in',
  },
  {
    'id' : 2,
    'eth': 3.5,
    'val': 200,
    'usd': 195,
    'direction': 'out',
  },
  {
    'id' : 3,
    'eth': 2.2,
    'val': 40,
    'usd': 50,
    'direction': 'out',
  },     
  ]; 

  let transaction1 = [{

    'id' : 0,
    'eth': 1,
    'val': 1,
    'usd': 25,
    'direction': 'in',
  },
  {
    'id' : 1,
    'eth': 2,
    'val': 3,
    'usd': 120,
    'direction': 'in',
  },
  {
    'id' : 2,
    'eth': 2,
    'val': 2,
    'usd': 195,
    'direction': 'out',
  },
  {
    'id' : 3,
    'eth': 3,
    'val': 2,
    'usd': 50,
    'direction': 'in',
  },
  {
    'id' : 4,
    'eth': 2,
    'val': 2,
    'usd': 30,
    'direction': 'in',
  },
  {
    'id' : 5,
    'eth': 5,
    'val': 4,
    'usd': 40,
    'direction': 'out',
  },
      
  ]; 

  describe('Valid Requests', () => {
    
    // it('should return profit', () => {
    //   expect(capgains.profit(transaction)).toEqual(40);
    // });
    // it('should return profit', () => {
    //   // expect(capgains.profit(transaction1)).toEqual(9);

    // });
    it('should return profit', () => {
      expect(capgains.profit(transaction0)).toEqual(243);
      // expect(capgains.profit(transaction1)).toEqual(9);

    });
  });
});

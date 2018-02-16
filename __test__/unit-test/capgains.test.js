'use strict';

const capgains = require('../../lib/capgains');
require('jest');

describe.only('#Profit', function () {
  
  let transaction = [{

    'txId' : 0,
    'amount': 0.5,
    'usd': 50,
    'direction': 'in',
  },
  {
    'txId' : 1,
    'amount': 1.2,
    'usd': 100,
    'direction': 'in',
  },
  {
    'txId' : 2,
    'amount': 1.3,
    'usd': 150,
    'direction': 'out',
  },
  {
    'txId' : 3,
    'amount': 0.4,
    'usd': 125,
    'direction': 'in',
  },
  {
    'txId' : 4,
    'amount': 0.3,
    'usd': 100,
    'direction': 'in',
  },
  {
    'txId' : 5,
    'amount': 0.8,
    'usd': 50,
    'direction': 'out',
  },
      
  ]; 

  let transaction0 = [{

    'txId' : 0,
    'amount': 5.2,
    'usd': 100,
    'direction': 'in',
  },
  {
    'txId' : 1,
    'amount': 0.8,
    'usd': 50,
    'direction': 'in',
  },
  {
    'txId' : 2,
    'amount': 3.5,
    'usd': 200,
    'direction': 'out',
  },
  {
    'txId' : 3,
    'amount': 2.2,
    'usd': 40,
    'direction': 'out',
  },     
  ]; 

  let transaction1 = [{

    'txId' : 0,
    'amount': 1,
    'usd': 1,
    'direction': 'in',
  },
  {
    'txId' : 1,
    'amount': 2,
    'usd': 3,
    'direction': 'in',
  },
  {
    'txId' : 2,
    'amount': 2,
    'usd': 2,
    'direction': 'out',
  },
  {
    'txId' : 3,
    'amount': 3,
    'usd': 2,
    'direction': 'in',
  },
  {
    'txId' : 4,
    'amount': 2,
    'usd': 2,
    'direction': 'in',
  },
  {
    'txId' : 5,
    'amount': 5,
    'usd': 4,
    'direction': 'out',
  },
      
  ]; 

  describe('ValtxId Requests', () => {
    
    it('should return profit', () => {
      expect(capgains.profit(transaction)).toEqual('40.00');
    });
    it('should return profit', () => {
      expect(capgains.profit(transaction1)).toEqual('9.00');

    });
    it('should return profit', () => {
      expect(capgains.profit(transaction0)).toEqual('243.00');

    });
  });
});

'use strict';
const Wallet = require('./../model/ethwallet');


let capgains = module.exports = {};


capgains.profit = function(transaction){
  let array = [];
  let tempIn;
  let withdrawal;
  let deposit;
  let profit = 0;
  
  for(let txId = 0 ; txId < transaction.length ; txId++){
    
    if(transaction[txId].direction == 'in'){
      array.push(transaction[txId]);
    } else if(transaction[txId].direction == 'out'){
      withdrawal = transaction[txId];
      deposit = array.shift();
      for(let j = 0 ; j < array.length ; j++){
        if(withdrawal.amount > deposit.amount){
          profit = profit + ((deposit.amount * withdrawal.usd) - (deposit.amount * deposit.usd));
          withdrawal.amount = withdrawal.amount - deposit.amount;
          deposit = array.shift();
        }
      }
      profit = profit + ((withdrawal.amount * withdrawal.usd) - (withdrawal.amount * deposit.usd));
      deposit.amount = deposit.amount - withdrawal.amount;
      tempIn = deposit;
      array.unshift(tempIn);
    
    }
  }
  return profit.toFixed(2);    
};


capgains.packager = function(gains, transaction, address){
  return new Wallet({
    'capitalGain': gains,
    'wallet': address,
    'transactions': transaction,
    'walletId': '5a83697a6ea13260d85348d8',
  }).save();
};
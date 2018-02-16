'use strict';
const Wallet = require('./../model/ethwallet');


let capgains = module.exports = {};


capgains.profit = function(transaction, address){
  let array = [];
  let tempIn;
  let withdrawal;
  let deposit;
  let profit = 0;
  
  for(let txId = 0 ; txId < transaction.length ; txId++){
    
    // console.log('Profit ', profit, 'txId: ', txId, 'direction ', transaction[txId].direction)
    // console.log(withdrawal, deposit);
    if(transaction[txId].direction == 'in'){
      array.push(transaction[txId]);
      // console.log(array)
    } else if(transaction[txId].direction == 'out'){
      withdrawal = transaction[txId];
      deposit = array.shift();
      // console.log('transaction ', transaction[txId])
      for(let j = 0 ; j < array.length ; j++){
        if(withdrawal.amount > deposit.amount){
          // console.log('withdra: ', withdrawal.amount, 'depo: ', deposit.amount, 'profit: ', profit)
          profit = profit + ((deposit.amount * withdrawal.usd) - (deposit.amount * deposit.usd));
          // console.log(deposit.amount)
          withdrawal.amount = withdrawal.amount - deposit.amount;
          // console.log(deposit.amount)
          deposit = array.shift();
          // console.log('withdra: ', withdrawal.amount, 'depo: ', deposit.amount, 'profit: ', profit)
        }
      }
      profit = profit + ((withdrawal.amount * withdrawal.usd) - (withdrawal.amount * deposit.usd));
      deposit.amount = deposit.amount - withdrawal.amount;
      tempIn = deposit;
      array.unshift(tempIn);
    
    }
  }
  
  return profit.toFixed(2);
  // return new Wallet({
  //   'capitalGain': profit.toFixed(2),
  //   'wallet': address,
  //   'transactions': transaction,
  //   'walletId': '5a83697a6ea13260d85348d8',
  // }).save();
    
};


capgains.packager = function(gains, transaction, address){
  return new Wallet({
    'capitalGain': gains,
    'wallet': address,
    'transactions': transaction,
    'walletId': '5a83697a6ea13260d85348d8',
  }).save();
};
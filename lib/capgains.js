'use strict';

let capgains = module.exports = {};

let array = [];
let tempIn;
let withdrawal;
let deposit;
let profit = 0;

capgains.profit = function(transaction){

  for(let id = 0 ; id < transaction.length ; id++){
    // console.log('Profit ', profit, 'id: ', id, 'direction ', transaction[id].direction)
    // console.log(withdrawal, deposit);
    if(transaction[id].direction == 'in'){
      array.push(transaction[id]);
      // console.log(array)
    } else if(transaction[id].direction == 'out'){
      withdrawal = transaction[id];
      deposit = array.shift();
      // console.log('transaction ', transaction[id])
      for(let j = 0 ; j < array.length ; j++){
        if(withdrawal.eth > deposit.eth){
          // console.log('withdra: ', withdrawal.eth, 'depo: ', deposit.eth, 'profit: ', profit)
          profit = profit + ((deposit.eth * withdrawal.val) - (deposit.eth * deposit.val));
          // console.log(deposit.eth)
          withdrawal.eth = withdrawal.eth - deposit.eth;
          // console.log(deposit.eth)
          deposit = array.shift();
          // console.log('withdra: ', withdrawal.eth, 'depo: ', deposit.eth, 'profit: ', profit)
        }
      }
      profit = profit + ((withdrawal.eth * withdrawal.val) - (withdrawal.eth * deposit.val));
      deposit.eth = deposit.eth - withdrawal.eth;
      tempIn = deposit;
      array.unshift(tempIn);
    
    }
  }
  return parseInt(profit.toFixed(2));
};
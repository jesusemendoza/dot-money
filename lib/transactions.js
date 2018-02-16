'use strict';

const Price = require('./../model/price');
const ETH_APIKEY = process.env.ETH_APIKEY;
const __API_URL__ = 'http://api.etherscan.io';
const superagent = require('superagent');
const compute = require('./compute');


//constructor function
function EthXfer(formattedTime,etherAmt,txId, direction, timeStamp, ts) {
  this.date = formattedTime;
  this.timeStamp = timeStamp;
  this.amount = etherAmt;
  this.txId = txId;
  this.direction = direction;
  this.cinderella = ts;
}

const transactions = module.exports = {};

transactions.ethTrans = function (address) {
  return superagent.get(`${__API_URL__}/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${ETH_APIKEY}`);
};

transactions.appendXfer = function (data, address) {
  let tempArr = [];
  for (let i = 0; i < data.result.length; i++) {
    let direction = 'in';
    if (address == data.result[i].from.toLowerCase()) {
      direction = 'out';
    }
    let etherAmt =  data.result[i].value/1000000000000000000;
    let txId = i;
    let ts = compute.timeStamp(data.result[i].timeStamp);     
    let date = new Date(data.result[i].timeStamp*1000); 
    let ethX = new EthXfer(date, etherAmt, txId, direction,data.result[i].timeStamp, ts);
    tempArr.push(ethX);
          
  }
  return (tempArr);
};

transactions.appendUsd = function (data) {
  return Price.find()
    .then(price =>   price.reduce((acc,val) => {
      acc[val.UnixTimeStamp] = val.Value;
      return acc;
    }, {}))
    .then(price => data.map(data => {
      data.usd = parseInt(price[data.cinderella]);
      return data;
    }));
};
'use strict';
// const superagent = require('superagent');
const getCSV = require('get-csv'); //this is a package to retrieve the csv information from API and converts the csv to JSON
const mongoose = require('mongoose');
var assert = require('assert');
const Price = require('./../model/price');
const ETH_APIKEY = process.env.ETH_APIKEY;
const __API_URL__ = 'http://api.etherscan.io';
const superagent = require('superagent');
const compute = require('./compute');
// const fs = require('fs');


//constructor function
function EthXfer(formattedTime,etherAmt,txId, direction, timeStamp, price) {
  this.date = formattedTime;
  this.timeStamp = timeStamp;
  this.amount = etherAmt;
  this.txId = txId;
  this.direction = direction;
  this.usd = price;
}

const transactions = module.exports = {};
//this function is to revert to previous midnight
transactions.timeStamp = function (ts) {
  return ts-(ts%86400);
};

transactions.ethTrans = function (address) {
  console.log(typeof address);
  address = address.toLowerCase();
  console.log(address);
  return superagent.get(`${__API_URL__}/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${ETH_APIKEY}`);
  // .then(data => return appendXfer(data, address));
};

transactions.appendXfer = function (data, address) {
  let tempArr = {};
  
  for (let i = 0; i < data.result.length; i++) {
    let direction = 'in';
    if (address == data.result[i].from.toString()) {
      direction = 'out';
    }
    let etherAmt =  data.result[i].value/10000000000000;
    let txId = i;
        
    let date = new Date(data.result[i].timeStamp*1000);
    let ts = compute.timeStamp(data.result[i].timeStamp);
    Price.find({'UnixTimeStamp': ts})
      .then (price => this.price = price)
      .then(priceObj => new EthXfer(date, etherAmt, txId, direction,data.result[i].timeStamp, priceObj))
      .then(object => tempArr[object]);  
    // let ethX = new EthXfer(date, etherAmt, txId, direction,data.result[i].timeStamp);
    // tempArr.push(ethX);
        
  }
  console.log(tempArr);
  return tempArr;
//   return setTimeout(function(){return tempArr; }, 3000);
};
// tempArr.push(ethX);
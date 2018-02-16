'use strict';
// const superagent = require('superagent');
const getCSV = require('get-csv'); //this is a package to retrieve the csv information from API and converts the csv to JSON
const mongoose = require('mongoose');
var assert = require('assert');
const Price = require('./../model/price');
const Wallet = require('./../model/ethwallet');

const ETH_APIKEY = process.env.ETH_APIKEY;
const __API_URL__ = 'http://api.etherscan.io';
const superagent = require('superagent');
const compute = require('./compute');
const fs = require('fs');


//constructor function
function EthXfer(formattedTime,etherAmt,txId, direction, timeStamp, ts) {
  // return new Promise((resolve, reject) => {
  this.date = formattedTime;
  this.timeStamp = timeStamp;
  this.amount = etherAmt;
  this.txId = txId;
  this.direction = direction;
  this.cinderella = ts;
  //   resolve(this);
  // });
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
    //   Price.findOne({'UnixTimeStamp': data[i].cinderella});
    // //     .then(price => console.log(price));
    // // }
    let ethX = new EthXfer(date, etherAmt, txId, direction,data.result[i].timeStamp, ts);
    tempArr.push(ethX);
          
  }
//   new Wallet({
//     'capitalGain': 'lotta money',
//     'wallet': address,
//     'transactions': tempArr,
//     'walletId': '5a83697a6ea13260d85348d8',
//   }).save();
  return (tempArr);
};

transactions.appendUsd = function (data) {
  // for(let i = 0; i < data.length ; i++){
  // Price.findOne({'UnixTimeStamp': data[i].cinderella})
  //     .then(price => console.log(price));
  // }

  // return data;
  // console.log('this is the data',data);
  return Price.find()
    .then(price =>   price.reduce((acc,val) => {
      acc[val.UnixTimeStamp] = val.Value;
      return acc;
    }, {}))
    .then(x => data.map(y => {
      y.usd = parseInt(x[y.cinderella]);
      // y.usd = 'usd';
      return y;
    }));
  
  
  // console.log(data,address);
  // return data;
};
'use strict';
// const superagent = require('superagent');
const getCSV = require('get-csv'); //this is a package to retrieve the csv information from API and converts the csv to JSON
const mongoose = require('mongoose');
var assert = require('assert');
const Price = require('./../model/price');
const MONGODB_URI = process.env.MONGODB_URI;
// const fs = require('fs');

const compute = module.exports = {};
//this function is to revert to previous midnight
compute.timeStamp = function (ts) {
  return ts-(ts%86400);
};
//this connects us to the DB and drops the tables from the price schema
compute.csvGet = function () {
  mongoose.connect(MONGODB_URI);

  Price.remove({}, function() {
    console.log('collection removed');
  });

  let externalURL = 'https://etherscan.io/chart/etherprice?output=csv';
  return getCSV(externalURL)
    .then(rows =>  {
      Price.collection.insertMany(rows, function(err,r) {
        assert.equal(null, err);
        assert.equal(rows.length, r.insertedCount); //this row makes sure that ammount of rows inserted equals the ammount of rows expected
        mongoose.disconnect();
        console.log('inserted value');
      });
    })
    .then(()=> {
      return 'done';
    })
    .catch(err => console.log(err));

};

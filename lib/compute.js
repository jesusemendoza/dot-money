'use strict';
// const superagent = require('superagent');
const getCSV = require('get-csv');
const mongoose = require('mongoose');
var assert = require('assert');
const Price = require('./../model/price');
// const fs = require('fs');

const compute = module.exports = {};

compute.timeStamp = function (ts) {
  return ts-(ts%86400);
};

compute.csvGet = function () {
  mongoose.connect('mongodb://localhost/test123');
  Price.remove({}, function(err) { 
    console.log('collection removed'); 
  });

  let externalURL = 'https://etherscan.io/chart/etherprice?output=csv';
  return getCSV(externalURL)
    .then(rows =>  {
      Price.collection.insertMany(rows, function(err,r) {
        assert.equal(null, err);
        assert.equal(rows.length, r.insertedCount);
        mongoose.disconnect();
        console.log('inserted value');
      });
    });
  // var Schema = mongoose.Schemavar; 
  // let clubSchema = new Schema({
  //   name: String,
  // });
  // var Club = mongoose.model('Club', clubSchema);
 

};
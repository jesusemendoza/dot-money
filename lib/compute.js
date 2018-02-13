'use strict';
// const superagent = require('superagent');
const getCSV = require('get-csv');
// const fs = require('fs');

const compute = module.exports = {};

compute.timeStamp = function (ts) {
  return ts-(ts%86400);
};

compute.csvGet = function () {
  let externalURL = 'https://etherscan.io/chart/etherprice?output=csv';
  return getCSV(externalURL)
    .then(rows =>console.log(rows[925]));

};
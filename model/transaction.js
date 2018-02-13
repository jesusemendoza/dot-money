'use strict';

const Wallet = require('./ethwallet');
const mongoose = require('mongoose');


const Transaction = mongoose.Schema({
  date: {type: Date, required: true},
  ethUnit: {type: Number},
  ethValue: {type: Number},
  usdConvert: {type: Number},
  usdValue: {type: Number},
  ethwalletId: {type: mongoose.Schema.Types.ObjectId, ref: 'ethwallet', required: true},
}, {timestamps: true});

module.exports = mongoose.model('transaction', Transaction);

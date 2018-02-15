'use strict';

const mongoose = require('mongoose');
const Auth = require('./auth');

const Ethwallet = mongoose.Schema({
  wallet: {type: String, required: true},
  capitalGain: {type: String, required: true},
  transactions: {type: String, required: true},
  walletId: {type: mongoose.Schema.Types.ObjectId, ref: 'auth', required: true},
}, {timestamps: true});

module.exports = mongoose.model('ethwallet', Ethwallet);

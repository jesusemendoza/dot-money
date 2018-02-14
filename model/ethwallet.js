'use strict';

const mongoose = require('mongoose');
const Auth = require('./auth');

const Ethwallet = mongoose.Schema({
  capitalGain: {type: String, required: true},
  wallet: {type: String, required: true},
  walletId: {type: mongoose.Schema.Types.ObjectId, ref: 'auth', required: true},
}, {timestamps: true});

module.exports = mongoose.model('ethwallet', Ethwallet);

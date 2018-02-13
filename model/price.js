'use strict';

const mongoose = require('mongoose');

const Price = mongoose.Schema({
  usd: {type: String, required: true},
  eth: {type: String, required: true},
  unixtime: {type: String, required:true, unique: true},
}, {timestamps: true});

module.exports = mongoose.model('price', Price);

'use strict';

const mongoose = require('mongoose');

const Price = mongoose.Schema({
  'Date(UTC)': {type: String, required: true},
  'Value': {type: String, required: true},
  'UnixTimeStamp': {type: String, required:true, unique: true},
}, {timestamps: true});

module.exports = mongoose.model('price', Price);

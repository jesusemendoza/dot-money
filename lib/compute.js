'use strict';

const compute = module.exports = {};

compute.timeStamp = function (ts) {
  return ts-(ts%86400);
};

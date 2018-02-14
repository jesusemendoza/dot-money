'use strict';
//dependancies
const Price = require('../model/price');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('http: route-auth');
const compute = require('../lib/compute');


module.exports= function(router) {
  router.get('/price', bodyParser, (req, res) => {
    // console.log("first", req.body);
    if(req.body.date){

      return Price.findOne({'Date(UTC)' : req.body.date})
        .then ( data =>  res.status(200).json(data))
        .catch(err => errorHandler(err, res));

    }
    return Price.find()
      // .then(data => console.log(data))
      .then(data => res.status(200).json(data))
      .catch(err => errorHandler(err, res));
  });
};

'use strict';
//dependancies
const Price = require('../model/price');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const compute = require('../lib/compute');


module.exports= function(router) {
  router.get('/price', bodyParser, (req, res) => {
    if(req.body.date){

      return Price.findOne({'Date(UTC)' : req.body.date})
        .then ( data =>  res.status(200).json(data))
        .catch(err => errorHandler(err, res));

    }
    return Price.find()
      .then(data => res.status(200).json(data))
      .catch(err => errorHandler(err, res));
  });
  router.post('/price', bodyParser, (req, res) => {
    return compute.csvGet()
      .then(data => res.status(200).json(data))
      .catch(err => errorHandler(err, res));
  });
};

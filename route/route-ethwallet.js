'use strict';
//dependancies
const ethWallet = require('../model/ethwallet');
// const superagent = require('superagent');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const bearAuth = require('../lib/bearer-auth-middleware');
const debug = require('debug')('http: route-auth');
// const ETH_APIKEY = process.env.ETH_APIKEY;
// const __API_URL__ = 'http://api.etherscan.io';
const transactions = require('../lib/transactions');
const capgains = require('../lib/capgains');


//set up post and get routes for authentication
module.exports = router => {
  router.route('/wallet/:_id?')
    .post(bearAuth, bodyParser, (req, res)=>{
      console.log(req.body);
      transactions.ethTrans(req.body.wallet)
        .then( data => transactions.appendXfer(data.body, req.body.wallet.toLowerCase()))  
        .then( data => transactions.appendUsd(data))
        .then(data => capgains.profit(data))
        .then(gains => res.status(200).json(`${gains}`));
      
    //   req.body.walletId = req.user._id;
    //   return new ethWallet
    //   (req.body).save()
    //     .then(createdWallet => {
    //       res.status(201).json(createdWallet)
    //         .catch(err =>{
    //           errorHandler(err, res);
    //         });
    //     });
    });
};
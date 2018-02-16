'use strict';
//dependencies
const bodyParser = require('body-parser').json();
const bearAuth = require('../lib/bearer-auth-middleware');
const transactions = require('../lib/transactions');
const capgains = require('../lib/capgains');


//set up post and get routes for authentication
module.exports = router => {
  router.route('/wallet/:_id?')
    .post(bearAuth, bodyParser, (req, res)=>{
      let address = req.body.wallet.toLowerCase();
      transactions.ethTrans(req.body.wallet)
        .then( data => transactions.appendXfer(data.body, address))  
        .then( data => transactions.appendUsd(data))
        .then(data => this.data= data)
        .then(data => capgains.profit(data, address))
        .then(gains => capgains.packager(gains,this.data, address))
        .then(gains => res.send(gains));
    });
};
'use strict';
//dependencies
const bodyParser = require('body-parser').json();
const bearAuth = require('../lib/bearer-auth-middleware');
const transactions = require('../lib/transactions');
const capgains = require('../lib/capgains');


//set up post and get routes for authentication
module.exports = router => {
  router.route('/wallet')
    .post(bodyParser, (req, res)=>{
      let address = req.body.wallet;
      console.log(address);
      transactions.ethTrans(address)
        .then( data => transactions.appendXfer(data.body, address))  
        .then( data => transactions.appendUsd(data))
        .then(data => this.data= data)
        .then(data => capgains.profit(data, address))
        .then(gains => capgains.packager(gains,this.data, address))
        .then(gains => res.send(gains));
    });
};
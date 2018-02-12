# dot-money

https://travis-ci.org/Dot-money/dot-money.svg?branch=master

This project allows users to track their virtual currency gains/losses for reporting purposes.  
```$
=============
### dot-money is an app to keep track of your capital gains when trading cryptocurrencies.

- ```POST```
request add tracker of a wallet id to user’s account.
(http POST localhost:8080/api/v1/c2/ walletid=‘0xF8EE57337d4fDB76260C29a8873e87bb30F53a8a’  tokenid=‘sample-token’)
   - Should return status code
```201 user was created```


<!-- [POST](subpro/subtext.md) -->

-
```GET```
request pulls the most up to date information of the user’s account
(http GET localhost:8080/api/v1/c2/ tokenid=“sample-token”)
   - Should return a JSON file, i.e.:
         -
```{"blockNumber":"4763872",
"timeStamp":"1513748174",
"transactionIndex":"31",
"from":"0x2a65aca4d5fc5b5c859090a6c34d164135398226","to":"0xc1a30fd9f85d48c38a8f8733d450d059b7bba1b5","value":"76551230000000000",
"confirmations":"311274",
"dollarValue":""
},```


-
```PUT```
we can use it to refresh after a transaction was performed (updates database)
http PUT localhost://8080/api/v1/c2/ tokenid=‘sample-token’

<!--
```DELETE```
(happens when
```PUT```
is used)  -->
-
```DELETE```
will be used when a user stops tracking a wallet
http DELETE localhost://8080/api/v1/c2/ tokenid=‘sample-token’ walletid=‘0xF8EE57337d4fDB76260C29a8873e87bb30F53a8a’

-  We can use
```PUT```
also for every time user uses refresh or application updates (we save resources by only updating when user requests)




<!-- Post request (request the server using wallet id) (http post:api/v1…..) -->

- Server pings Ethereum API blockchain for the list of transactions for existing account

- Api returns a JSON file with list of transactions to server

- You then request the historic price data for the date of each transaction

- We then POST it to the user’s account

//We will have two different schemas user accounts and historical price data.
//Stretch goal: we can make an API with solidity  or web3js


//List of dev dependencies we will be using?
- body-parser
- bluebird
- express
- travis yml
- Jsonwebpack
- Superagent
- bCrypt
- Jest cli
- Cors
- Mongoose
- Del?
- Aws-sdk
- Dotenv
- Faker
And more to come….


//tests and edge cases?
Valid address or wallet id format
Check for null values
Check for valid transaction within id
Correct balance using web3js: example (youtube Jesus)

Edge Cases:


WEB3JS.1.0 youtube video minute 5 and minute 13






<!-- {“blockNumber”:“4763872”,
“timeStamp”:“1513748174”,
“transactionIndex”:“31”,
“from”:“0x2a65aca4d5fc5b5c859090a6c34d164135398226”,“to”:“0xc1a30fd9f85d48c38a8f8733d450d059b7bba1b5”,“value”:“76551230000000000”,
“confirmations”:“311274”,
“dollarValue”:“”
}, -->

let’s add the following algorithm:

we will grab the time stamp and then susbtract the same timestamp value modulo 86400(this are the seconds in a day) in order to always go to the previous midnight, for example:
ts = ts-(ts%8600)


```
```We have two ways to enter our app:

One creating a user id without wallet. for example:
Send a PUT request to create user/password.
once you are "registered" you can then view current value. Also, you can refine to a particular date.

Another option is to create a user (or log in to existing account) that has a wallet and can access to more detailed and personalized information based on his account's activity.
```

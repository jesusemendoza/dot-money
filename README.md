# .$
[![Build Status](https://travis-ci.org/Dot-money/dot-money.svg?branch=master)](https://travis-ci.org/Dot-money/dot-money)

###  dot-money is an app to keep track of your capital gains when trading cryptocurrencies.

How to use:
To set-up an account:

http POST :3000/api/v1/signup username=karen email='karen@karen.com' password=test
Success will create a passwordHash and will send back a authorization token.

To sign in to existing an account:

http POST :3000/api/v1/signin username=karen password=test.
Success will create a passwordHash and will send back a authorization token.

To look at historical data from third party API:

http GET :3000/api/v1/price (optional date='2/12/2018')
If the date is included, the date in UTC, the ethereum value on that date and the UnixTimeStamp are returned.
If no date is included, the same data is returned for all the dates since July 31, 2015.


To set-up a wallet:

http POST :3000/api/v1/wallet wallet=API_KEY 'Authorization:Bearer TOKEN'
where API_KEY is an key for the currency and TOKEN is a JSON web token of the form header.payload.signature like 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFhYTM5MGQzZDhjNGU3MzYyYzliOTZlNmM5NDI2ZTE5YTM5N2Y3NDk4MDhkNjY4YzY3Yjc1MWE1NTA5ZWIxZGIiLCJpYXQiOjE1MTgwNTEwMjV9.mu5pXtewHlxiq3Sx1YCcgBkbHaQp1JNCxmrld0CL4Sg'.


 ```POST```
request add tracker of a wallet id to user’s account.
```(http POST localhost:8080/api/v1/c2/ walletid=‘0xF8EE57337d4fDB76260C29a8873e87bb30F53a8a’  tokenid=‘sample-token’)```
   - Should return status code ```201 user was created```

```GET```
request pulls the most up to date information of the user’s account

 ```(http GET localhost:8080/api/v1/c2/ tokenid=“sample-token”)```

    - Should return a JSON file containing the following:

  ```{"blockNumber":"4763872",
"timeStamp":"1513748174",
"transactionIndex":"31",
"from":"0x2a65aca4d5fc5b5c859090a6c34d164135398226",
"to":"0xc1a30fd9f85d48c38a8f8733d450d059b7bba1b5",
"value":"76551230000000000",
"confirmations":"311274",
"dollarValue":""
},
```
```PUT```
we can use it to refresh after a transaction was performed (updates database)
            -```http PUT localhost://8080/api/v1/c2/ tokenid=‘sample-token’```
            - also for every time user uses refresh or application updates (we save resources by only updating when user requests)

``` DELETE ```
will be used when a user stops tracking a wallet
                  -```http DELETE localhost://8080/api/v1/c2/ tokenid=‘sample-token’ walletid=‘0xF8EE57337d4fDB76260C29a8873e87bb30F53a8a’```

This is the flow:

- Server pings Ethereum API blockchain for the list of transactions for existing account

- Api returns a JSON file with list of transactions to server

- You then request the historic price data for the date of each transaction

- We then POST it to the user’s account

### TESTS:
- Wallet Validation
- Verify Balance againt API
- Check Time-stamp calculation to default to 12:01am
- Test Route Requests
- Error Handler
- Test Server
- User validation


//work in progress, will add some graphics

//dont forget: npm install get-csv
=======
Schemas

Auth
--compareHash(string, unique true)
--username(string)
--email(string)
--password(string)
--wallets(connects to wallet schema)
--timestamp(true)

Wallet
--walletId(string,unique true)
--capital gains(string)
--transactions(json)

Historical Data
--timestamp(usd)
--usd(number)
--Ethereum(float)


tuesday/2/13/18
//we added get-csv package

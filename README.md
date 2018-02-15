[![Build Status](https://travis-ci.org/Dot-money/dot-money.svg?branch=master)](https://travis-ci.org/Dot-money/dot-money)
 
 # .$
 
 dot-money is an app to keep track of your capital gains when trading cryptocurrencies.
### Table of contents 


- [Table of contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [How to install and use](#how-to-install-and-use)
- [Tests](#Tests-)
- [Deployment](#deployment)
- [Built](#built-with)
- [Dev packages used](#dev-packages-used-)
- [Versioning](#versioning-)
- [Authors](#authors)
- [License](#license)
- [Acknowledgements](#acknowledgements)


### Prerequisites
- somethin to fill this
- thing and then we will 
- change it

### Getting Started:
- wow
- this is not ready
- wow
- this is not ready
- wow
- this is not ready


### How to install and use
 - Fork [our repo](https://github.com/Dot-money/dot-money)
 - Clone into local machine: ```github clone https://github.com/{your-github-username}/dot-money.git```
 - run ```npm i``` to install all the dev packages needed
- open 3 terminal tabs and run mongodb, nodemon server and use the third terminal window to run the following commands:
 
 ```POST```
request add tracker of a wallet id to user’s account.
```(http POST localhost:8080/api/v1/c2/ walletid=‘0xF8EE57337d4fDB76260C29a8873e87bb30F53a8a’  tokenid=‘sample-token’)```
   - Should return status code ```201 user was created```

```GET```
request pulls the most up to date information of the user’s account
            - ```
            (http GET localhost:8080/api/v1/c2/ tokenid=“sample-token”)```
   - GET Should return a JSON file containing the following:
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
            ```http PUT localhost://8080/api/v1/c2/ tokenid=‘sample-token’```
             also for every time user uses refresh or application updates (we save resources by only updating when user requests)

```DELETE```
will be used when a user stops tracking a wallet
                  ```http DELETE localhost://8080/api/v1/c2/ tokenid=‘sample-token’ walletid=‘0xF8EE57337d4fDB76260C29a8873e87bb30F53a8a’```


### Tests
Explain how to run the automated tests for this system

- Break down into end to end tests
Explain what these tests test and why
- wow
- this is not ready
- wow
- this is not ready


``` Give an example```

- Explain what these tests test and why

- Give an example
- wow
- this is not ready
- wow
- this is not ready


This is the flow:
![alt text](https://i.imgur.com/v2NSunY.png)
- Server pings Ethereum API blockchain for the list of transactions for existing account

- API returns a JSON file with list of transactions to server

- You then request the historic price data for the date of each transaction

- We then POST it to the user’s account

### Deployment
- Heroku
- Travis CI


### Built with 
- JavaScript

Dev packages used:
- AWS-sdk
- bcrypt
- body-parser
- del
- dotenv
- express
- get-csv
- jsonwebtoken
- mongoose
- mongoDB

### Version control
- GitHub

### Authors
- [Karen Perez](https://github.com/kbperez)
- [Jesus Mendoza](https://github.com/jesusemendoza)
- [Richard Montgomery](https://github.com/montgomeryrd)
- [Hector Norzagaray](https://github.com/nzytag)

### License
- This project is licensed under [MIT license.](https://raw.githubusercontent.com/Dot-money/dot-money/master/LICENSE)

### Acknowldgements

- Code Fellows Faculty
- Tip of the hat to [Kevin Miller](https://github.com/driftAbout)
- etc

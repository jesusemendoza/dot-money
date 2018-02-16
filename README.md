[![Build Status](https://travis-ci.org/Dot-money/dot-money.svg?branch=master)](https://travis-ci.org/Dot-money/dot-money)
 
 # .$
 
 dot-money is an app to keep track of your capital gains when trading cryptocurrencies.
### Table of contents 

- [Table of contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [How to install and use](#how-to-install-and-use)
- [Deployment](#deployment)
- [Built](#built-with)
- [Dev packages used](#dev-packages-used-)
- [Versioning](#versioning-)
- [Authors](#authors)
- [License](#license)
- [Acknowledgements](#acknowledgements)


### Prerequisites
- Node.js
- mongoDB
- HTTpie

### How to install and use
 - Fork [our repo](https://github.com/Dot-money/dot-money)
 - Clone into local machine: ```github clone https://github.com/{your-github-username}/dot-money.git```
 - Run ```npm i``` to install all the dev packages needed
 - Set up .env file on the route and .test.env on the test directory with PORT Database and API key
 - Open 3 terminal tabs and run mongodb, nodemon server and use the third terminal window to run the following commands:
 
    
 #### App Flow entries through command line/terminal:
 ![alt text](https://i.imgur.com/NhYOUEA.jpg)

User Route Sign Up
```http POST :3000/api/v1/signup username=karen email=‘karen@karen.com’ password=test```
- On sucess, you get back a token.

User Route Sign In
``````http -a miner:secret :3000/api/v1/signin``````
- On success you get a token


#### Price Route:
![alt text](https://i.imgur.com/jXkNLxF.jpg)

In order to populate our database with historic data, run the following command:
```http POST localhost:3000/api/v1/price```
   
- On success, it will return a series of objects that contain a date and the values of the cryptocurrency at midnight that day

#### EthWallet Route:
![alt text](https://i.imgur.com/Hiqa9ay.jpg)
In order to populate our database with historic data, run the following command:
```http POST localhost:3000/api/v1/wallet```

- On success, it should return the following:

```http post localhost:3000/api/v1/wallet 'Authorization:Bearer <token>' wallet='user id from a third party API'```
- This command will capture all the transactions associated with the wallet id and calculate the capital gains

### Deployment
- Heroku
- Travis CI

### Built with 
- JavaScript
- npm

### Packages used:
- bcrypt
- body-parser
- dotenv
- express
- get-csv
- jsonwebtoken
- mongoose
- eslint
- faker
- jest
- superagent

### Version control
- GitHub 
- Travis Continuous Integration (CI)

### Authors
- [Karen Perez](https://www.linkedin.com/in/karenbperez/)
- [Jesus Mendoza](https://www.linkedin.com/in/jesusemendoza/)
- [Richard Montgomery](https://www.linkedin.com/in/montgomeryrd/)
- [Hector Norzagaray](https://www.linkedin.com/in/hnorzagaray/)

### License
- This project is licensed under [MIT license.](https://raw.githubusercontent.com/Dot-money/dot-money/master/LICENSE)

### Acknowldgements

- [Code Fellows Faculty](https://www.codefellows.org/)
- Tip of the hat to [Kevin Miller](https://www.linkedin.com/in/kevin-miller-driftabout/)
- [Etherscan.io](https://etherscan.io/apis)

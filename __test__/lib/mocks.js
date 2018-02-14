'use strict';

const Auth = require('../../model/auth');// vinicio - similar to a user
const faker = require('faker');
const Price = require('../../model/price');

// collection of mock schemas
const mocks = module.exports = {};
mocks.auth = {};

mocks.auth.createOne = () => {
  let result = {};
  result.password = faker.internet.password();

  return new Auth({
    username: faker.internet.userName(),
    email: faker.internet.email(),
  })
    .generatePasswordHash(result.password)
    .then(user => result.user = user)
    .then(user => user.generateToken())
    .then(token => result.token = token)
    .then(() => {
      return result;
    });
};

mocks.price = {};

mocks.price.createOne = () => {

  return new Price({
    'Date(UTC)': '8-15-2015',
    'Value': '1.36',
    'UnixTimeStamp': '1439596800',
  }).save();
};

mocks.auth.removeAll = () => Promise.all([Auth.remove()]);
mocks.price.removeAll = () => Promise.all([Price.remove()]);

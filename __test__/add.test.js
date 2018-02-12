'use strict';

const add = require('../lib/add');
require('jest');

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});

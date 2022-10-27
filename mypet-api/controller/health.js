'use strict';

const { Test } = require('../lib/db')

const checkHealth = async ({ name }) => {
  try {
    const result = await Test.findAll();
    if (result[0].name == name) {
      return `${name}，你真靓仔`;
    }
    return `你是哪个扑街仔？！`
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  checkHealth
}
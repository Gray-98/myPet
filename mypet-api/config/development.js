'use strict'

module.exports = {
  pgConfig: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'cute-pet',
    host: process.env.DB_HOSTNAME || 'localhost',
    dialect: 'postgres',
    logging: process.env.DB_LOGGING === 'true' ? console.log : false,
    benchmark: 'true',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}
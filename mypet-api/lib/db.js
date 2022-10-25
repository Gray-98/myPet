'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const config = require('config');

const db = {};
const sequelize = new Sequelize(config.get('pgConfig'));

db.Test = require('../models/test')(sequelize, DataTypes)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

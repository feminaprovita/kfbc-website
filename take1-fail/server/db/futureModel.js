'use strict';

const Sequelize = require('sequelize');
const db = require('./database');

const Future = db.define('idea', {
  idea: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  link: Sequelize.STRING,
});

module.exports = Future;

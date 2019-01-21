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
  tag: Sequelize.STRING,
});

module.exports = Future;

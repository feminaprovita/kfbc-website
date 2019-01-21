'use strict';

const Sequelize = require('sequelize');
const db = require('./database');

const Future = db.define('idea', {
  idea: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  tag: Sequelize.STRING,
});

module.exports = Future;

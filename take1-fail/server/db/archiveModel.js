'use strict';

const Sequelize = require('sequelize');
const db = require('./database')

const Archive = db.define('post', {
  post: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true,
    }
  },
  date: {
    type: Sequelize.DATEONLY,
    /* 'YYYY-MM-DD' */
    allowNull: false,
  },
})

module.exports = Archive;

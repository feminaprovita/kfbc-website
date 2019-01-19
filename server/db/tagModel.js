'use strict';

const Sequelize = require('sequelize');
const db = require('./database');

const Tags = db.define('tag', {
  tag: Sequelize.STRING,
});

module.exports = Tags;

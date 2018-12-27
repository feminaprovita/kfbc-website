'use strict'

const db = require('./database')
const Future = require('./futureModel')
const Archive = require('./archiveModel')
const Tag = require('./tagModel')

Tag.belongsToMany(Archive, { through: 'ArchiveTags' });
Tag.belongsToMany(Future, { through: 'FutureTags' });

module.exports = {
  Future,
  Archive,
  Tag,
  db
}

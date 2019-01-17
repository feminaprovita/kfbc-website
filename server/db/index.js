'use strict';

const db = require('./database');
const Future = require('./futureModel');
const Archive = require('./archiveModel');
const Tag = require('./tagModel');

Tag.belongsToMany(Archive, { through: 'ArchiveTags' });
Archive.belongsToMany(Tag, {through: 'ArchiveTags'});

Tag.belongsToMany(Future, { through: 'FutureTags' });
Future.belongsToMany(Tag, {through: 'FutureTags'});


module.exports = {
  Future,
  Archive,
  Tag,
  db,
};

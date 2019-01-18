'use strict';

const db = require('./database');
const Future = require('./models/future');
const Archive = require('./models/archive');
const Tag = require('./models/tags');

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

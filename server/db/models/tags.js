'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    tag: DataTypes.STRING
  }, {});
  Tags.associate = function(models) {
    Tag.belongsToMany(Archive, { through: 'ArchiveTags' });
    Tag.belongsToMany(Future, { through: 'FutureTags' });
  };
  return Tags;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Archive = sequelize.define('Archive', {
    post: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true,
      },
    },
    date: {
      type: Sequelize.DATEONLY,
      /* 'YYYY-MM-DD' */
      allowNull: false,
    },
  }, {});
  Archive.associate = function(models) {
    Archive.belongsToMany(Tag, {through: 'ArchiveTags'});
  };
  return Archive;
};

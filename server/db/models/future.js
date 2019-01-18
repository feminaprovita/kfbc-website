'use strict';
module.exports = (sequelize, DataTypes) => {
  const Future = sequelize.define('Future', {
    idea: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    }
  }, {});
  Future.associate = function(models) {
    Future.belongsToMany(Tag, {through: 'FutureTags'});
  };
  return Future;
};

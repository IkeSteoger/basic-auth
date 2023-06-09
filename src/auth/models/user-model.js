'use strict';

// Create a Sequelize model
module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
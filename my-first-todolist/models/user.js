'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    firstname: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 20]
      }
    },
    lastname: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {

    });
  User.associate = function (models) {
    User.hasMany(models.Todo, { as: 'todos' });
  };
  return User;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [6, 100]
      }
    },
    body: DataTypes.TEXT,
    isDone: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  Todo.associate = function (models) {
    Todo.belongsTo(models.User, { as: 'user' });
  };
  return Todo;
};
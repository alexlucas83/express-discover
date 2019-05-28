const models = require('../models');
const Todo = models.Todo;
const faker = require('faker');

Todo.create({
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraph(),
  isDone: false,
  userId: 1
})
  .then((todo) => { console.log(todo); })
  .catch((error) => { console.log(error); });

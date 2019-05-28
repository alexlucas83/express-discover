const models = require('../models');
const User = models.User;
const faker = require('faker');

User.create({
  email: faker.internet.email(),
  password: 'test1234',
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  isAdmin: false,
})
  .then((user) => { console.log(user); })
  .catch((error) => { console.log(error); });

// User.findByPk(1, { include: ['todos'] })
//   .then((user) => { console.log(user.get()); })
//   .catch((error) => { console.log(error); });

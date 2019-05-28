var express = require('express');
var router = express.Router();
const models = require('../models');
const User = models.User;

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.findAll({ include: ['todos'] })
    .then((users) => {
      console.log(users);
      res.json({ users });
    })
    .catch((error) => { console.log(error); });

});

module.exports = router;

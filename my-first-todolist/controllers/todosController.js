const models = require('../models');
const Todo = models.Todo;

module.exports = {
  index: function (req, res, next) {
    Todo.findAll()
      .then((todos) => { res.json({ todos }); })
      .catch((error) => res.status(500).json({ error }));
  },

  show: function (req, res, next) {
    Todo.findByPk(req.params.id, { include: 'user' })
      .then((todo) => { res.json({ todo }); })
      .catch((error) => res.status(500).json({ error }));
  },

  create: function (req, res, next) {
    Todo.create({
      title: req.body.title,
      body: req.body.body,
      isDone: false,
      userId: req.body.userId
    })
      .then((todo) => { res.json({ todo }); })
      .catch((error) => res.status(500).json({ error: error.errors[0].message }));
  },

  update: function (req, res, next) {
    Todo.findByPk(req.params.id, { include: 'user' })
      .then((todo) => {
        todo.update({
          title: req.body.title,
          body: req.body.body,
          isDone: req.body.isDone,
          userId: req.body.userId
        })
          .then((updatedTodo) => { res.json({ todo: updatedTodo }); })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  },

  delete: function (req, res, next) {
    Todo.findByPk(req.params.id, { include: 'user' })
      .then((todo) => {
        todo.destroy()
          .then((todo) => { res.json({ message: 'Todo has been deleted !' }); })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  },
};
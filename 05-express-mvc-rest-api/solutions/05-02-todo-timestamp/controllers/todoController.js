const moment = require("moment");
const { list, addItem, markDone } = require("../models/todo");

const listTodos = (req, res) => {
  const errorCode = req.query.errorCode;
  const todos = list();

  const formattedTodos = todos.map((todo) => {
    return {
      ...todo,
      formattedCreatedAt: moment(todo.createdAt).fromNow(),
    };
  });

  res.render("todo-list.ejs", { todos: formattedTodos, errorCode });
};

const createTodo = (req, res) => {
  const title = req.body.title;
  const errorCode = addItem(title);

  if (errorCode) {
    res.redirect(`/todos?errorCode=${errorCode}`);
    return;
  }
  res.redirect("/todos");
};

const updateTodoAsDone = (req, res) => {
  markDone(req.params.todoIndex);

  res.redirect("/todos");
};

module.exports = { listTodos, createTodo, updateTodoAsDone };

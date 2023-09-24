import { read, addItem, markDone } from "../models/todo";

export const listTodos = (req, res) => {
  const errorCode = req.query.errorCode;
  const todos = read();

  res.render("todo-list.ejs", { todos, errorCode });
};

export const createTodo = (req, res) => {
  const title = req.body.title;
  const errorCode = addItem(title);

  if (errorCode) {
    res.redirect(`/todos?errorCode=${errorCode}`);
    return;
  }
  res.redirect("/todos");
};

export const updateTodoAsDone = (req, res) => {
  markDone(req.params.todoIndex);

  res.redirect("/todos");
};
